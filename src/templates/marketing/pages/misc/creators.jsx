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
                    <meta name="description" content="Unlock your gaming potential with Glitch! Effortless live streaming, instant clip editing, and real-time collaboration for content creators. Streamline your gaming broadcasts, connect with fans, and monetize your passion. Download now for Windows, Mac and Linux." />
                    <meta property="og:title" content="Glitch Streaming App" />
                    <meta property="og:description" content="Unlock your gaming potential with Glitch! Effortless live streaming, instant clip editing, and real-time collaboration for content creators. Streamline your gaming broadcasts, connect with fans, and monetize your passion. Download now for Windows, Mac and Linux." />
                    <meta property="og:image" content="//assets/images/meta/meta_11.jpeg" />
                    <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : 'https://www.glitch.fun'} />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:title" content="Glitch Streaming App" />
                    <meta name="twitter:description" content="Unlock your gaming potential with Glitch! Effortless live streaming, instant clip editing, and real-time collaboration for content creators. Streamline your gaming broadcasts, connect with fans, and monetize your passion. Download now for Windows, Mac and Linux." />
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