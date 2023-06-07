import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import Navigate from "../../../../util/Navigate";
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


class CompetitionsUpdateBracketsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            tournament: {},
            errors: {},
            isLoading: false,
        };

        if (!Glitch.util.Session.isLoggedIn()) {
            window.location = Navigate.authLogin();
        }
    }

    componentDidMount() {
        this.loadTournament();
        this.loadBracket();
    }

    loadTournament() {

        let id = this.props.router.params.id;

        Glitch.api.Competitions.view(id).then(response => {
            this.setState({ tournament: response.data.data });
        }).catch(error => {

        });
    }

    loadBracket() {

        let id = this.props.router.params.id;

        let round_id = this.props.router.params.round_id;

        let bracket_id = this.props.router.params.bracket_id;

        Glitch.api.Competitions.showBracket(id, round_id, bracket_id).then(response => {
            this.setState({ data : response.data.data });
        }).catch(error => {

        });
    }

    update(event) {

        event.preventDefault();

        let data = this.state.data;

        this.setState({ isLoading: true });

        let id = this.props.router.params.id;

        let round_id = this.props.router.params.round_id;

        let bracket_id = this.props.router.params.bracket_id;

        Glitch.api.Competitions.updateBracket(id, round_id, bracket_id, data).then(response => {

            this.setState({ isLoading: false });

            this.props.router.navigate(Navigate.tournamentsRoundsList(id));
        }).catch(error => {

            this.setState({ isLoading: false });

            if(error.response && error.response.data) {
                this.setState({errors : error.response.data});

                setTimeout(() =>{
                    this.setState({errors : {}});
                }, timeouts.error_message_timeout)
            }
        })
    }

    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Update Tournamnet Bracket'} curPage={'Compete'} />
                <div className=" padding-top padding-bottom">
                    <div className=" container">
                        <div className="stream-wrapper">
                            <h3 className="title">Update {Glitch.util.LabelManager.getCompetitionLabel(false, true)} Bracket</h3>
                            <form className="account-form text-left" style={{ textAlign: "left" }}>


                                <BracketFormBasicInfo
                                    bracketValue={this.state.data.bracket}
                                    bracketOnChange={(e) => { this.setState({ data: { ...this.state.data, bracket: e.target.value } }); }}
                                    startDateValue={(typeof this.state.data.bracket_start_date === "string") ? new Date(this.state.data.bracket_start_date) : this.state.data.bracket_start_date}
                                    startDateOnChange={(e) => { this.setState({ data: { ...this.state.data, bracket_start_date: e } }); }}
                                    endDateValue={(typeof this.state.data.bracket_end_date === "string") ? new Date(this.state.data.bracket_end_date) : this.state.data.bracket_end_date}
                                    endDateOnChange={(e) => { this.setState({ data: { ...this.state.data, bracket_end_date: e } }); }}
                                    checkinEnableValue={(this.state.data.checked_in === 'true' || this.state.data.checked_in === true)}
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
                                    isWinnerValue={(this.state.data.is_winner === 'true' || this.state.data.is_winner === true)}
                                    isWinnerOnChange={(e) => { this.setState({ data: { ...this.state.data, is_winner: e.target.checked } }); }}
                                    isFinishedValue={(this.state.data.is_finished === 'true' || this.state.data.is_finished === true)}
                                    isFinishedOnChange={(e) => { this.setState({ data: { ...this.state.data, is_finished: e.target.checked } }); }}
                                    pointsValue={this.state.data.points_awarded}
                                    pointsOnChange={(e) => { this.setState({ data: { ...this.state.data, points_awarded: e.target.value } }); }}
                                    cashValue={this.state.data.cash_awarded}
                                    cashOnChange={(e) => { this.setState({ data: { ...this.state.data, cash_awarded: e.target.value } }); }}
                                    errors={this.state.errors}
                                />


                                {(Object.keys(this.state.errors).length >0 ) ? <Danger message={"There are errors in updating the bracket. Please check the form above."} /> : ''}

                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => { this.update(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Update Bracket</span></button>
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

export default withRouter(CompetitionsUpdateBracketsPage);