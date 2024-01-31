import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GameListTwo from "../component/section/gamelisttwo";
import CtaSection from "../component/section/cta";

class GameListTwoSection extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'MOST POPULAR GAME'} curPage={'Match2'} />
                <GameListTwo />
                <CtaSection imgUrl={'/assets/images/cta/01.png'} />
                <Footer />
            </Fragment>
        );
    }
}
 
export default GameListTwoSection;