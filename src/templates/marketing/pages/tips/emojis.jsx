import { Component, Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Glitch from 'glitch-javascript-sdk';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutPage from "./checkout";
import withRouter from "../../../../util/withRouter";
import LoginRegisterPopup from "../../component/form/loginregister";

import Swal from 'sweetalert2'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

class EmojisPage extends Component {

    state = {
        emojis: [],
        selectedEmojiId: null,
        quantity: 0,
        user: null,
        packages: [],
        showPackages: false,
        selectedPackage: null,
        creator: null,
        showLoginRegister: false
    }

    timer = null;

    componentDidMount() {

        let id = this.props.router.params.id;

        Glitch.api.Events.view(id).then(response => {

            Glitch.util.Session.getID();

            this.setState({ event: response.data.data });

            this.setState({ creator: response.data.data.super_admins[0] });

        }).catch(error => {
            console.log(error);
        });

        Glitch.api.TipEmojis.list({ order_by: 'price', order_direction: 'asc' }).then((response) => {
            this.setState({ emojis: response.data.data });
        }).catch(error => {
            console.error(error);
        });

        Glitch.api.Users.me().then((response) => {
            this.setState({ user: response.data.data });
        }).catch(error => {
            console.error(error);
        });

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        const stripe = window.Stripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {

            Glitch.api.TipPackagePurchases.processStripePaymentIntent({ payment_intent_id: paymentIntent.id }).then((response) => {

                Glitch.api.Users.me().then((response) => {
                    this.setState({ user: response.data.data });
                }).catch(error => {
                    console.error(error);
                });

            }).catch(error => {
                console.error(error);
            });


            switch (paymentIntent.status) {
                case "succeeded":
                    //alert("Payment succeeded!");
                    break;
                case "processing":
                    //alert("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    //alert("Your payment was not successful, please try again.");
                    break;
                default:
                    //alert("Something went wrong.");
                    break;
            }
        });

    }

    handleLoginRegisterModalClose = () => {
        this.setState({ showLoginRegister: false });

        Glitch.api.Users.me().then((response) => {
            this.setState({ user: response.data.data });
        }).catch(error => {
            console.error(error);
        });
    };

    selectEmoji = (emojiId) => {
        this.setState({ selectedEmojiId: emojiId });
    }

    incrementQuantity = (emoji) => {
        this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.giveTip(emoji, this.state.quantity);
            this.setState({ quantity: 0 });
        }, 1000);
    }

    giveTip = (emoji, quantity) => {
        // Pass the emoji data and quantity to wherever it needs to go

        if (!Glitch.util.Session.isLoggedIn() || !this.state.user) {
            this.setState({ showLoginRegister: true });
        } else {

            let tokens_remaining = this.state.user.tokens_remaining;

            let total_price = quantity * emoji.price;

            total_price = Number(total_price.toFixed(2));


            if (total_price > tokens_remaining) {
                this.displayPackages();
            } else {

                Glitch.api.Tips.give({ type_id: emoji.id, quantity: quantity, receiving_user_id: this.state.creator.id, event_id : this.state.event.id }).then((response) => {

                    let tip = response.data.data;

                    Swal.fire({
                        title: 'Success!',
                        text: 'You have sent ' + tip.token_quantity + ' ' + tip.emoji + ' to ' + this.state.creator.username,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });

                    this.setState({selectedEmojiId : null});

                    Glitch.api.Users.me().then((response) => {
                        this.setState({ user: response.data.data });
                    }).catch(error => {
                        console.error(error);
                    });

                }).catch(error => {
                    console.error(error);
                });
            }
        }
    }

    displayPackages = () => {

        if (!Glitch.util.Session.isLoggedIn() || !this.state.user) {
            this.setState({ showLoginRegister: true });
        } else {

            Glitch.api.TipPackages.list().then((response) => {
                const packages = response.data.data;
                this.setState({ packages: packages });
                this.setState({ showPackages: true });
            }).catch(error => {
                console.error(error);
            });
        }
    }

    selectPackage = (selectedPackage) => {

        this.setState({ selectedPackage });

        Glitch.api.TipPackagePurchases.getStripePaymentIntent({ package_id: selectedPackage.id }).then((response) => {

            let client_secret = response.data.data.client_secret;

            const stripe = window.Stripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

            const appearance = { theme: 'stripe' };
            const options = { /* options */ };
            const elements = stripe.elements({ clientSecret: client_secret, appearance: appearance });

            const paymentElement = elements.create('payment', options);
            paymentElement.mount('#payment-element');

            const form = document.getElementById('payment-form');
            const submitButton = document.getElementById('submit-button');

            form.addEventListener('submit', (event) => {
                event.preventDefault();

                elements.submit()
                    .then((result) => {
                        // Handle result.error
                        if (!result.error) {
                            stripe.confirmPayment({
                                elements: elements,
                                clientSecret: client_secret,
                                confirmParams: {
                                    // Return URL where the customer should be redirected after the PaymentIntent is confirmed.
                                    return_url: window.location.href,
                                },
                            })
                                .then(function (result) {
                                    if (result.error) {
                                        // Inform the customer that there was an error.
                                    }
                                });
                        }
                    });
            });

        });


    }

    closePackages = () => {
        this.setState({ showPackages: false });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Tip ' + this.state?.creator?.username} curPage={'Emojis'} />
                <section className="fore-zero padding-top padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <h5>Coins Availabe: <i className="fa-solid fa-coins"></i> ${(this?.state?.user?.tokens_remaining) ? this?.state?.user?.tokens_remaining : 0}</h5>
                            <div className="zero-item">
                                <h3>Tip {this.state?.creator?.username}</h3>
                                <div className="zero-thumb">

                                </div>

                                {this.state.showPackages == true && (
                                    <div className="packages-overlay">
                                        <div className="packages-modal">
                                            <button onClick={this.closePackages} className="close-btn">X</button>

                                            {this.state.selectedPackage != null && (
                                                <form id="payment-form">
                                                    <div id="link-authentication-element">

                                                    </div>
                                                    <div id="payment-element"></div>
                                                    <br />
                                                    <button id="submit-button" className="btn btn-success btn-lg">Submit Payment</button>
                                                </form>
                                            )}


                                            {this.state.selectedPackage == null && (
                                                <>
                                                    <h2 className="text-black">Select a Package</h2>
                                                    <p className="text-black">You need some tokens to tip the influencer. Purchase some tokens from a package below.</p>
                                                    <div className="packages-list">
                                                        {this.state.packages.map((pack, index) => (
                                                            <div key={index} className="package" onClick={() => this.selectPackage(pack)}>
                                                                <h3>{pack.name}</h3>
                                                                <p>Price: ${pack.price}</p>
                                                                <p>Tokens: {pack.tokens_awarded}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}


                                <p className="lead">Give tips to the creator by selecting an emoji below and tipping them. The tips will appear on-screen during their live stream.</p>
                                <div className="zero-content" style={{ height: '45vh', overflowY: 'scroll' }}>
                                    <div className="row">
                                        {this.state.emojis.map((emoji, index) => (
                                            <div className="col-md-3 col-sm-3 col-6" key={index} style={{ marginBottom: '15px' }}>
                                                <div onClick={() => this.selectEmoji(emoji.id)} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', backgroundColor: 'white', color: 'black' }}>
                                                    <div style={{ textAlign: 'center', fontSize: '32px' }}>{emoji.emoji}</div>
                                                    <div style={{ textAlign: 'center', fontWeight: 'bold' }}>{`$${emoji.price}`}</div>
                                                    {this.state.selectedEmojiId === emoji.id && <button style={{ width: '100%', backgroundColor: 'blue', color: 'white', fontSize: '18px', padding: '10px', borderRadius: '20px' }} onClick={() => this.incrementQuantity(emoji)}>Tip</button>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <LoginRegisterPopup show={this.state.showLoginRegister} handleClose={this.handleLoginRegisterModalClose} />
                <Footer />
            </Fragment>
        );
    }
}

export default withRouter(EmojisPage);
