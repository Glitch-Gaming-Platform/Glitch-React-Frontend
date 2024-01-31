import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

class FeaturesPage extends Component {

    render() {
        return (
            <>
                <Fragment>
                    <Header />
                    <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                        <div className="container">
                            <div className="section-wrapper text-center text-uppercase">
                                <div className="pageheader-thumb mb-4">
                                    <img style={{maxHeight: '160px'}} src="/assets/images/features/features.png" alt="team" />
                                </div>
                                <h2 className="pageheader-title">Features For Your Community</h2>

                                <p className="lead">Our open-source platform provides all the features need to successfully launch a live gaming community.</p>

                            </div>
                        </div>
                    </section>

                    <div className="blog-section padding-top padding-bottom">
                        <div className="container">
                            <div className="section-wrapper">
                                <div className="row g-4 justify-content-center">

                                <div className="col-lg-6 col-12" key={"feture1"}>
                                        <div className="blog-item">
                                            <div className="blog-inner">
                                                <div className="blog-thumb text-center">
                                                   
                                                        <img src={`/assets/images/features/live-streaming.png`} alt={`Test`} className="w-50" />
                                                   
                                                </div>
                                                <div className="blog-content px-3 py-4">
                                                    <h3>Live Streams</h3>
                                                   
                                                    <p>Allow users to go live as they play their games and have their fans and followers watch.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12" key={"feture1"}>
                                        <div className="blog-item">
                                            <div className="blog-inner">
                                                <div className="blog-thumb text-center">
                                                   
                                                        <img src={`/assets/images/features/private_chat.png`} alt={`Test`} className="w-50" />
                                                   
                                                </div>
                                                <div className="blog-content px-3 py-4">
                                                    <h3>Recordings</h3>
                                                   
                                                    <p>Record the gameplay and use it later for any purpose; remarketing, Q&A, user learning, etc.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12" key={"feture1"}>
                                        <div className="blog-item">
                                            <div className="blog-inner">
                                                <div className="blog-thumb text-center">
                                                   
                                                        <img src={`/assets/images/features/private_chat.png`} alt={`Test`} className="w-50" />
                                                   
                                                </div>
                                                <div className="blog-content px-3 py-4">
                                                    <h3>Private Messaging</h3>
                                                   
                                                    <p>Allows users to direct message each other and engage in private 1:1 or group conversations.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12" key={"feture1"}>
                                        <div className="blog-item">
                                            <div className="blog-inner">
                                                <div className="blog-thumb text-center">
                                                   
                                                        <img src={`/assets/images/features/group_chat.png`} alt={`Test`} className="w-50" />
                                                   
                                                </div>
                                                <div className="blog-content px-3 py-4">
                                                    <h3>Live Chat</h3>
                                                   
                                                    <p>Implement a live chat to enable communication real-time communication of mass users.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12" key={"feture1"}>
                                        <div className="blog-item">
                                            <div className="blog-inner">
                                                <div className="blog-thumb text-center">
                                                   
                                                        <img src={`/assets/images/features/trophy.png`} alt={`Test`} className="w-50" />
                                                   
                                                </div>
                                                <div className="blog-content px-3 py-4">
                                                    <h3>Tournaments & Teams</h3>
                                                   
                                                    <p>Use competitions to increase user engagement and the lifetime value of the game(s).</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12" key={"feture1"}>
                                        <div className="blog-item">
                                            <div className="blog-inner">
                                                <div className="blog-thumb text-center">
                                                   
                                                        <img src={`/assets/images/features/ticket.png`} alt={`Test`} className="w-50" />
                                                   
                                                </div>
                                                <div className="blog-content px-3 py-4">
                                                    <h3>Ticketing & Paywalls</h3>
                                                   
                                                    <p>Guard content with a paywall and use ticketing for events to collect data and generate revenue.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12" key={"feture1"}>
                                        <div className="blog-item">
                                            <div className="blog-inner">
                                                <div className="blog-thumb text-center">
                                                   
                                                        <img src={`/assets/images/features/profile.png`} alt={`Test`} className="w-50" />
                                                   
                                                </div>
                                                <div className="blog-content px-3 py-4">
                                                    <h3>User Profiles</h3>
                                                   
                                                    <p>Allow users to express their individuality and gather data with highly robust profiles.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12" key={"feture1"}>
                                        <div className="blog-item">
                                            <div className="blog-inner">
                                                <div className="blog-thumb text-center">
                                                   
                                                        <img src={`/assets/images/features/social-media.png`} alt={`Test`} className="w-50" />
                                                   
                                                </div>
                                                <div className="blog-content px-3 py-4">
                                                    <h3>Social Interactions</h3>
                                                   
                                                    <p>Increase engagement by enabling users to interact with content through liking, sharing, upvoting, and more.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                
                            </div>
                        </div>
                    </div>


     


                </Fragment>

            </>
        )
    }
}

export default FeaturesPage;