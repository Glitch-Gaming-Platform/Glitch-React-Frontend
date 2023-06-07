import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Benefits from "../../component/section/benefits";

class BenefitsPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Benefits'} curPage={'Benefits'} />
                <br />
                <Benefits />
                <Footer />
            </Fragment>
        );
    }
}
 
export default BenefitsPage;