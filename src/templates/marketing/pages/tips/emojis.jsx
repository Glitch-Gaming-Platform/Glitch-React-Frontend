import { Component, Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Glitch from 'glitch-javascript-sdk';

class EmojisPage extends Component {

    state = {
        emojis: [],
        selectedEmojiId: null,
        quantity: 0,
        user: null,
        packages: [],
        showPackages: false,
        selectedPackage: null,
    }

    timer = null;

    componentDidMount() {
        Glitch.api.TipEmojis.list({ order_by: 'price', order_direction: 'asc' }).then((response) => {
            this.setState({ emojis: response.data.data });
        }).catch(error => {
            console.log(error);
        });

        Glitch.api.Users.me().then((response) => {
            this.setState({ user: response.data.data });
        }).catch(error => {
            console.log(error);
        });
    }

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
        console.log('Emoji:', emoji, 'Quantity:', quantity);

        let tokens_remaining = this.state.user.tokens_remaining;

        let total_price = quantity * emoji.price;

        total_price = Number(total_price.toFixed(2));

        if (total_price > tokens_remaining) {
            this.displayPackages();
        } else {

        }
    }

    displayPackages = () => {

        Glitch.api.TipPackages.list().then((response) => {
            console.log(response);
            const packages = response.data.data;
            this.setState({ packages: packages });
            this.setState({showPackages: true});
            console.log("State Updted");
        }).catch(error => {
            console.log(error);
        });
    }

    selectPackage = (selectedPackage) => {
        //this.setState({ selectedPackage, showPackages: false });
    }

    closePackages = () => {
        //this.setState({ showPackages: false });
    }

    processStripeCheckout = (stripeToken) => {
        // Process the payment here using the Stripe token and selected package
    }

    render() {
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Tip The Influencer'} curPage={'Emojis'} />
                <section className="fore-zero padding-top padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="zero-item">
                                <div className="zero-thumb">
                                    <img src="/assets/images/404.png" alt="404" />
                                </div>
                                {this.state.showPackages ==true && (
                                    <div className="packages-overlay">
                                        <div className="packages-modal">
                                            <button onClick={this.closePackages} className="close-btn">X</button>
                                            <h2>Select a Package</h2>
                                            <div className="packages-list">
                                                {this.state.packages.map((pack, index) => (
                                                    <div key={index} className="package" onClick={() => this.selectPackage(pack)}>
                                                        <h3>{pack.name}</h3>
                                                        <p>Price: ${pack.price}</p>
                                                        <p>Tokens: {pack.tokens_awarded}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="zero-content" style={{ height: '25vh', overflowY: 'scroll' }}>
                                    <div className="row">
                                        {this.state.emojis.map((emoji, index) => (
                                            <div className="col-md-3 col-sm-6" key={index} style={{ marginBottom: '15px' }}>
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


                <Footer />
            </Fragment>
        );
    }
}

export default EmojisPage;
