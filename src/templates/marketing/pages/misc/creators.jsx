import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Benefits from "../../component/section/benefits";
import Creators from "../../component/section/creators";
import { Helmet } from 'react-helmet';

class CreatorsPage extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Glitch Streaming App</title>
                    <meta name="description" content="The fastest and easiest way to live stream your games online and create engaging experiences." />
                    <meta property="og:title" content="Glitch Streaming App" />
                    <meta property="og:description" content="The fastest and easiest way to live stream your games online and create engaging experiences." />
                    <meta property="og:image" content="//assets/images/meta/meta_11.jpeg" />
                    <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://www.glitch.fun'} />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:title" content="Glitch Streaming App" />
                    <meta name="twitter:description" content="The fastest and easiest way to live stream your games online and create engaging experiences." />
                    <meta name="twitter:image" content="//assets/images/meta/meta_11.jpeg" />
                </Helmet>
                <Fragment>
                    <Header />
                    <br /><br /><br />
                    <Creators />
                    <Footer />
                </Fragment>
            </>
        );
    }
}

export default CreatorsPage;