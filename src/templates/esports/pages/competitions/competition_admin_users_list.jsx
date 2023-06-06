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
import UserItem from "../../component/section/competitions/detail_user_item";
import Glitch from 'glitch-javascript-sdk';


class CompetitionsRoundsUsersPage extends Component {

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
            this.setState({ tournament : response.data.data });
        }).catch(error => {

        });
    }

    render() {



        return (
            <Fragment>
                <Header />
                <PageHeader title={'Tourmanet Users'} curPage={'Manage Tournamnet'} />

                <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                    
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-8 col-12">
                                    <Link className="btn btn-success" to={Navigate.tournamentsUsersInvite(this.state.tournament.id)}><FontAwesomeIcon icon={faPlus} /> Invite {Glitch.util.LabelManager.getUserLabel(false, true)}</Link>
                                    <br />
                                    <h2>{Glitch.util.LabelManager.getUserLabel(true, true)}</h2>
                                    <p className="lead">Manage the {Glitch.util.LabelManager.getUserLabel(true, false)} who have access to the platform.</p>

                                    {this.state.tournaments && this.state.tournament.admins && this.state.tournament.admins.map(function (user, index) {
                                        return (
                                            <> 
                                                <UserItem key={index} user={user} />
                                            </>
                                        );
                                    })}

                                    

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

export default withRouter(CompetitionsRoundsUsersPage);
