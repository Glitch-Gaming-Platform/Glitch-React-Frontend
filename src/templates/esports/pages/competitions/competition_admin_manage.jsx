import { Component, Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Navigate from "../../../../util/Navigate";
import Requests from "../../../../util/Requests";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Author from "../../component/section/author";
import CommentForm from "../../component/section/commentform";
import Comments from "../../component/section/comments";
import MatchType from "../../component/section/competitions/detail_match_type";
import TournamentOverview from "../../component/section/competitions/detail_overview";
import VenueItem from "../../component/section/competitions/detail_venue_item";
import SidebarManageMenu from "../../component/section/competitions/menu_side_manage";
import Archive from "../../component/sidebar/archive";
import CategorieTwo from "../../component/sidebar/categorietwo";
import Instagram from "../../component/sidebar/instagram";
import RecentPost from "../../component/sidebar/recentpost";
import SearchBar from "../../component/sidebar/search";
import Tags from "../../component/sidebar/tags";
import CompetitionBrackets from "../../component/section/competitions/detail_bracket";
import Glitch from 'glitch-javascript-sdk';



class CompetitionsManagePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournament: {},
            errors: {},
            isLoading: false,
            tournaments: []
        };

    }

    componentDidMount() {
        this.loadTournament();
    }

    loadTournament() {

        let id = this.props.router.params.id;

        Glitch.api.Competitions.view(id).then(response => {
            this.setState({ tournament: response.data.data });
        }).catch(error => {

        });
    }

    render() {



        return (
            <Fragment>
                <Header />
                <PageHeader title={'Tournaments'} curPage={'Find A Tournamnet'} />

                <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-8 col-12">
                                    <TournamentOverview tournament={this.state.tournament} is_admin={true} />

                                    <hr/>

                                </div>
                                <div className="col-lg-4 col-md-7 col-12">
                                    <aside className="ps-lg-4">
                                        <SidebarManageMenu competition_id={this.state.tournament.id} />
                                       
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(CompetitionsManagePage);
