import { Component, Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Navigate from "../../../../util/Navigate";
import withRouter from "../../../../util/withRouter";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import CompetitionBrackets from "../../component/section/competitions/detail_bracket";
import TournamentItem from "../../component/section/competitions/detail_tournament_item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import SidebarManageMenu from "../../component/section/competitions/menu_side_manage";
import Glitch from 'glitch-javascript-sdk';

class CompetitionsRoundsListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournament: {},
            data: {},
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
            this.setState({ tournament : response.data });
        }).catch(error => {

        });
    }

    render() {



        return (
            <Fragment>
                <Header />
                <PageHeader title={'Tourmanet Rounds'} curPage={'Find A Tournamnet'} />

                <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                    
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-8 col-12">
                                    <Link className="btn btn-success" to={Navigate.tournamentsRoundsCreate(this.state.tournament.id)}><FontAwesomeIcon icon={faPlus} /> Add A Round</Link>
                                    <br />
                                    <h2>Manage Rounds and Brackets</h2>
                                    <p className="lead">Manage the rounds and brackets for reach round below.</p>

                                    <CompetitionBrackets tournament={this.state.tournament} is_admin={true} />

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



            </Fragment>
        );
    }

}

export default withRouter(CompetitionsRoundsListPage);
