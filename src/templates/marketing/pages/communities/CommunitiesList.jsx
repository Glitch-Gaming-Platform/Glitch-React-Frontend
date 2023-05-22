import Glitch from 'glitch-javascript-sdk';
import { Component, Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import { Link } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';

class CommunitiesList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            communities: [],
        };

    }

    componentDidMount() {

        Glitch.api.Communities.list().then((response) => {

            this.setState({communities : response.data.data });

        }).catch(error => {

        });
    }

    render() {
        return (
            <>
                <Fragment>
                    <Header />
                    <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                        <div className="container">
                            <div className="section-wrapper text-center text-uppercase">
                                <div className="pageheader-thumb mb-4">
                                    <img style={{ maxHeight: '160px' }} src="assets/images/revenue/profits.png" alt="team" />
                                </div>
                                <h2 className="pageheader-title">Communities</h2>

                                <p className="lead">See the communities.</p>

                            </div>
                        </div>
                    </section>

                    <div className="container padding-bottom mt-5" >
                        <div className="section-wrapper">
                            <Link className={"default-button"} to={Navigate.communitiesCreatePage()} >Create A Community</Link>
                        </div>
                    </div>

                    {(this.state.communities) ? this.state.communities.map(function (community, index) {
                        return <div className="container padding-bottom" key={index}>
                            <div className="section-wrapper">
                                <div className="row g-4 justify-content-center"></div>
                                <div className="col-12">
                                    <div className="blog-item">
                                        <div className="blog-inner d-flex flex-wrap align-items-center">
                                            <div className="blog-thumb w-xl-50 w-100">

                                                <img src={(community.bannner_image) ? community.bannner_image : `assets/images/revenue/sponsored_1.jpg`} alt={`Earn Donations`} className="w-100" />

                                            </div>
                                            <div className="blog-content p-4 w-xl-50 w-100">
                                                <h3><Link to={'http://' + ((community.cname && community.cname_enabled) ? community.cname : community.subdomain + '.glitch.local') }>{community.name}</Link></h3>
                                                <br />
                                                <p>{community.description}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>;
                    }) : ''


                    }

                    <Footer />
                </Fragment>
            </>
        );
    }
}

export default CommunitiesList;