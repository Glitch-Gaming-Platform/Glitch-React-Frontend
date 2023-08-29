import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Benefits from "../../component/section/benefits";
import Creators from "../../component/section/creators";

class CreatorsPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Live Streaming For Creators & Influencers'} curPage={'Creators'} />
                <br />
                <Creators />
                <Footer />
            </Fragment>
        );
    }
}
 
export default CreatorsPage;