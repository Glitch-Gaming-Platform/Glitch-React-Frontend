import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

const title = 'Oops! This Page Not Found';
const desc = 'We are Really Sorry But the Page you Requested is Missing';
const btnText = 'Go Back to Home';

class ErrorPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'ERROR PAGE'} curPage={'ERROR PAGE'} />
                <section className="fore-zero padding-top padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="zero-item">
                                <div className="zero-thumb">
                                    <img src="/assets/images/404.png" alt="404" />
                                </div>
                                <div className="zero-content">
                                    <h2>{title}</h2>
                                    <p>{desc} <i className="icofont-worried"></i></p>
                                    <Link to="/" className="default-button reverse-effect"><span>{btnText} <i className="icofont-double-right"></i></span> </Link>
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
 
export default ErrorPage;
