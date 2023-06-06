import { Component, Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Navigate from "../../../../util/Navigate";
import withRouter from "../../../../util/withRouter";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import TournamentItem from "../../component/section/competitions/detail_tournament_item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Glitch from 'glitch-javascript-sdk';


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

        Glitch.api.Competitions.list().then(response => {
            this.setState({ tournaments: response.data.data });
            console.log(response);
        }).catch(error => {

        });
    }

    render() {



        return (
            <Fragment>
                <Header />
                <PageHeader title={Glitch.util.LabelManager.getCompetitionLabel(true, true)} curPage={'Find A Tournamnet'} />

                <div className="container">

                    <div className="tab-content mt-3" id="myTabContent">

                        <div className="container text-right">
                            <br />
                            <p className="esportsCTA">Ready to crown a champion? Create your own {Glitch.util.LabelManager.getCompetitionLabel(false, false)} and watch as players from around the world compete for glory. Start building the ultimate gaming showdown!</p>
                           <br />
                            <Link className="btn btn-success mb-5" to={Navigate.tournamentsCreate()}><FontAwesomeIcon icon={faPlus} /> Create A {Glitch.util.LabelManager.getCompetitionLabel(false, true)}</Link>

                            <div className="row g-4 match-grid GameListStyleTwo">
                                {this.state.tournaments && this.state.tournaments.map(function (tournament, index) {
                                    return (
                                        <TournamentItem key={index} tournament={tournament} />
                                    );
                                })}

                                {
                                    (this.state.tournaments && this.state.tournaments.length <= 0) ?
                                        (

                                            <section className="fore-zero pt-5 padding-bottom">
                                                <div className="container">
                                                    <div className="section-wrapper">
                                                        <div className="zero-item">

                                                            <div className="zero-content">
                                                                <h2>No {Glitch.util.LabelManager.getCompetitionLabel(true, true)} Have Been Created</h2>
                                                                <p>Create your first {Glitch.util.LabelManager.getCompetitionLabel(false, true)}!</p>
                                                                <Link className="default-button reverse-effect" to={Navigate.tournamentsCreate()}><span>Create {Glitch.util.LabelManager.getCompetitionLabel(false, true)} <i className="icofont-double-right"></i></span> </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                        ) : <></>

                                }
                            </div>

                        </div>

                    </div>
                </div>



            </Fragment>
        );
    }

}

export default withRouter(CompetitionsListPage);
