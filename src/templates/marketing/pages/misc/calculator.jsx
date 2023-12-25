import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Benefits from "../../component/section/benefits";
import Creators from "../../component/section/creators";
import { Helmet } from 'react-helmet';
import PerformanceMarketingCalculator from "../../component/tools/performance_marketing_calculator";

class CreatorsCalculator extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Glitch Performance Marketing Calculator</title>
                    <meta name="description" content="The fastest and easiest way to live stream your games online and create engaging experiences." />
                    <meta property="og:title" content="Glitch Performance Marketing Calculator" />
                    <meta property="og:description" content="Optimize your earning potential as an influencer by calculating your possible revenue when marketing a game. Leverage performance-based influencer marketing strategies to maximize your impact and profitability in the gaming industry." />
                    <meta property="og:image" content="//assets/images/creators/calculator.png" />
                    <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://www.glitch.fun'} />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:title" content="Glitch Performance Marketing Calculator" />
                    <meta name="twitter:description" content="Optimize your earning potential as an influencer by calculating your possible revenue when marketing a game. Leverage performance-based influencer marketing strategies to maximize your impact and profitability in the gaming industry." />
                    <meta name="twitter:image" content="//assets/images/creators/calculator.png" />
                </Helmet>
                <Fragment>
                    <Header />
                    <section className="pageheader-section" style={{ backgroundImage: "url(/assets/images/pageheader/bg.jpg)" }}>
                        <div className="container">
                            <div className="section-wrapper text-center text-uppercase">
                                <div className="pageheader-thumb mb-4">
                                    <img style={{ maxHeight: '160px' }} src="/assets/images/creators/calculator.png" alt="team" />
                                </div>
                                <h2 className="pageheader-title">Rate Card Calculator</h2>

                                <p className="lead">Calculator your earnings potential</p>

                            </div>
                        </div>
                    </section>
                    <PerformanceMarketingCalculator />
                    <Footer />
                </Fragment>
            </>
        );
    }
}

export default CreatorsCalculator;