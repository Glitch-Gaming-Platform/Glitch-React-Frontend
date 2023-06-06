import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import Navigate from "../../../../util/Navigate";
import Response from "../../../../util/Response";
import Session from "../../../../util/Session";
import withRouter from "../../../../util/withRouter";
import Danger from "../../component/alerts/Danger";
import Loading from "../../component/alerts/Loading";
import Input from "../../component/form/input";
import Textarea from "../../component/form/textarea";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import BracketFormBasicInfo from "../../component/section/competitions/form_bracket_basic";
import BracketFormParticipants from "../../component/section/competitions/form_bracket_competitors";
import BracketFormCompletion from "../../component/section/competitions/form_bracket_completion";
import CompetitionFormBasicInfo from "../../component/section/competitions/form_competition_basic";
import CompetitionFormMatchDetails from "../../component/section/competitions/form_competition_match";
import CompetitionFormSignupDetails from "../../component/section/competitions/form_competition_signup";
import CompetitionFormSocial from "../../component/section/competitions/form_competition_social";
import RoundFormBasicInfo from "../../component/section/competitions/form_round_basic";
import Glitch from 'glitch-javascript-sdk';


class CompetitionsCreateBracketsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            tournament: {},
            errors: {},
            isLoading: false,
        };

        if (!Session.isLoggedIn()) {
            window.location = Navigate.authLogin();
        }
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

    create(event) {

        event.preventDefault();

        let data = this.state.data;

        this.setState({ isLoading: true });

        let id = this.props.router.params.id;

        let round_id = this.props.router.params.round_id;

        Glitch.api.Competitions.createRound(id, round_id, data).then(response => {

            this.setState({ isLoading: false });

            this.props.router.navigate(Navigate.tournamentsRoundsList(id));
        }).catch(error => {

            this.setState({ isLoading: false });

            let jsonErrors = Response.parseJSONFromError(error);

            if (jsonErrors) {

                this.setState({ errors: jsonErrors });

                setTimeout(() => {
                    this.setState({ errors: {} });
                }, timeouts.error_message_timeout)
            }
        })
    }

    render() {

        let round_id = this.props.router.params.round_id;

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Create A Tournamnet Bracket'} curPage={'Compete'} />
                <div className=" padding-top padding-bottom">
                    <div className=" container">
                        <div className="stream-wrapper">
                            <h2 className="title">Create A Tournament Bracket For Round {round_id}</h2>
                            <p className="lead">A bracket is used to assign which competitors will compete against each other. For each competitor, create a bracket with an assigned competitor. Competitors with the same bracket number will compete against each other.</p>
                            <form className="account-form text-left" style={{ textAlign: "left" }}>


                                <BracketFormBasicInfo
                                    bracketValue={this.state.data.bracket}
                                    bracketOnChange={(e) => { this.setState({ data: { ...this.state.data, bracket: e.target.value } }); }}
                                    startDateValue={this.state.data.bracket_start_date}
                                    startDateOnChange={(e) => { this.setState({ data: { ...this.state.data, bracket_start_date: e } }); }}
                                    endDateValue={this.state.data.bracket_end_date}
                                    endDateOnChange={(e) => { this.setState({ data: { ...this.state.data, bracket_end_date: e } }); }}
                                    checkinEnableValue={this.state.data.checked_in}
                                    checkEnabledOnChange={(e) => { this.setState({ data: { ...this.state.data, checked_in: e.target.checked } }); }}

                                    errors={this.state.errors}
                                />

                                <BracketFormParticipants
                                    users={this.state.tournament.contestants}
                                    userValue={this.state.data.user_id}
                                    userOnChange={(e) => { this.setState({ data: { ...this.state.data, user_id : e.target.value } }); }} 
                                    teams={this.state.tournament.teams}
                                    teamValue={this.state.data.team_id}
                                    teamOnChange={(e) => { this.setState({ data: { ...this.state.data, team_id : e.target.value } }); }}

                                    errors={this.state.errors}
                                />

                                <BracketFormCompletion
                                    isWinnerValue={this.state.data.is_winner}
                                    isWinnerOnChange={(e) => { this.setState({ data: { ...this.state.data, is_winner: e.target.checked } }); }}
                                    isFinishedValue={this.state.data.is_finished}
                                    isFinishedOnChange={(e) => { this.setState({ data: { ...this.state.data, is_finished: e.target.checked } }); }}
                                    pointsValue={this.state.data.points_awarded}
                                    pointsOnChange={(e) => { this.setState({ data: { ...this.state.data, points_awarded: e.target.value } }); }}
                                    cashValue={this.state.data.cash_awarded}
                                    cashOnChange={(e) => { this.setState({ data: { ...this.state.data, cash_awarded: e.target.value } }); }}

                                    errors={this.state.errors}
                                />


                                {(Object.keys(this.state.errors).length >0 ) ? <Danger message={"There are errors in creating a bracket. Please check the form above."} /> : ''}

                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => { this.create(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Create Bracket</span></button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(CompetitionsCreateBracketsPage);