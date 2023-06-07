import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

class InstallationPage extends Component {

    render() {
        return (
            <>
                <Fragment>
                    <Header />
                    <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                        <div className="container">
                            <div className="section-wrapper text-center text-uppercase">
                                <div className="pageheader-thumb mb-4">
                                    <img style={{ maxHeight: '160px' }} src="assets/images/features/features.png" alt="team" />
                                </div>
                                <h2 className="pageheader-title">Installation Of Your Community</h2>

                                <p className="lead">Learn how ot install your community on various platforms.</p>

                            </div>
                        </div>
                    </section>

                    <div className="blog-section padding-top padding-bottom">
                        <div className="container">
                            <div className="section-wrapper">
                                <div className="row g-4 justify-content-center">

                                    <div className="col-lg-12 col-12" key={"step1"}>
                                        <div className="blog-item">
                                            <div className="blog-inner">

                                                <div className="blog-content px-3 py-4">
                                                    <h3><span className="badge badge-secondary" style={{backgroundColor: "blue"}}>1</span> Installing The Backend</h3>

                                                    <p>The source of truth for your community application is the backend. The backend code and installation instructions are available here:</p>

                                                    <p><a target={"_blank"} href="https://github.com/Glitch-Gaming-Platform/Glitch-PHP-Backend">https://github.com/Glitch-Gaming-Platform/Glitch-PHP-Backend</a></p>

                                                    <p>Start by reading the instructions and installing it. Afterward, you can install the frontend application.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-12 col-12" key={"step2"}>
                                        <div className="blog-item">
                                            <div className="blog-inner">

                                                <div className="blog-content px-3 py-4">
                                                    <h3><span className="badge badge-secondary" style={{backgroundColor: "blue"}}>2</span> Installing The Frontend</h3>

                                                    <p>After the backend, you can then set up the frontend. The frontend provided is an example application designed to give you an idea of how the system works. You can view the example frontend here:</p>

                                                    <p><a target={"_blank"} href="https://github.com/Glitch-Gaming-Platform/Glitch-React-Frontend">https://github.com/Glitch-Gaming-Platform/Glitch-React-Frontend</a></p>

                                                    <p>Read the through the instructions for installing the frontend.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-12 col-12" key={"step3"}>
                                        <div className="blog-item">
                                            <div className="blog-inner">

                                                <div className="blog-content px-3 py-4">
                                                    <h3><span className="badge badge-secondary" style={{backgroundColor: "blue"}}>3</span> Installing Mobile</h3>

                                                    <p>Like the frontend, the mobile implementation is meant to serve as an example to guide developers. The mobile implementation example will be completed by the end of February.</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-12 col-12" key={"step4"}>
                                        <div className="blog-item">
                                            <div className="blog-inner">

                                                <div className="blog-content px-3 py-4">
                                                    <h3><span className="badge badge-secondary" style={{backgroundColor: "blue"}}>4</span> Customizing The Streaming Experience</h3>

                                                    <p>One of the community's most unique aspects is the ability to live stream the games. The live stream interface is powered by Invirtu/BingeWave, which is a mixture of no-code and low-code video builder. To understand how the implementation works, review the docs here:</p>

                                                    <p><a target={"_blank"} href="https://app.strollhere.com/FIMaxF/glitch/glitch-website-overview">https://app.strollhere.com/FIMaxF/glitch/glitch-website-overview</a></p>

                                                    <p>Watch the videos on how to customize the streaming experience.</p>
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

export default InstallationPage;