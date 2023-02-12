import { Component, Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Navigate from "../../../../util/Navigate";
import Requests from "../../../../util/Requests";
import withRouter from "../../../../util/withRouter";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import TournamentItem from "../../component/section/competitions/detail_tournament_item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


class CompetitionsListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournaments: [],
            data: {},
            errors: {},
            isLoading: false,
            tournaments: []
        };

    }

    componentDidMount() {
        this.loadTournaments();
    }

    loadTournaments() {

        Requests.tournamentsList().then(response => {
            this.setState({ tournaments: response.data });
            console.log(response);
        }).catch(error => {

        });
    }

    render() {



        return (
            <Fragment>
                <Header />
                <PageHeader title={'Tournaments'} curPage={'Find A Tournamnet'} />

                <div className="container">

                    <div className="tab-content mt-3" id="myTabContent">

                        <div className="container text-right">

                            <Link className="btn btn-success mb-5" to={Navigate.tournamentsCreate()}><FontAwesomeIcon icon={faPlus} /> Create A Tournament</Link>

                            <div className="row g-4 match-grid GameListStyleTwo">
                                {this.state.tournaments && this.state.tournaments.map(function (tournament, index) {
                                    return (
                                        <TournamentItem key={index} tournament={tournament} />
                                    );
                                })}
                            </div>

                        </div>

                    </div>
                </div>



            </Fragment>
        );
    }

}

export default withRouter(CompetitionsListPage);
