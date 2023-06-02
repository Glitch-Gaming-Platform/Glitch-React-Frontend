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
import CompetitionFormBasicInfo from "../../component/section/competitions/form_competition_basic";
import CompetitionFormMatchDetails from "../../component/section/competitions/form_competition_match";
import CompetitionFormSignupDetails from "../../component/section/competitions/form_competition_signup";
import CompetitionFormSocial from "../../component/section/competitions/form_competition_social";
import RoundFormBasicInfo from "../../component/section/competitions/form_round_basic";
import Glitch from 'glitch-javascript-sdk';


class CompetitionsUpdateRoundsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            tournament : {},
            errors: {},
            isLoading: false,
        };

        if (!Session.isLoggedIn()) {
            window.location = Navigate.authLogin();
        }
    }

    componentDidMount() {
        this.loadTournament();
        this.loadRound();
    }

    loadTournament() {

        let id = this.props.router.params.id;

        Glitch.api.Competitions.view(id).then(response => {
            this.setState({ tournament : response.data });
        }).catch(error => {

        });
    }

    loadRound() {

        let id = this.props.router.params.id;

        let round_id = this.props.router.params.round_id;

        Glitch.api.Competitions.rounds(id, round_id).then(response => {
            this.setState({ data : response.data });
        }).catch(error => {

        });
    }


    update(event) {

        event.preventDefault();

        let data = this.state.data;

        this.setState({ isLoading: true });

        let id = this.props.router.params.id;

        let round_id = this.props.router.params.round_id;

        Glitch.api.Competitions.updateRound(id, round_id, data).then(response => {

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

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Update Tournamnet Round'} curPage={'Compete'} />
                <div className=" padding-top padding-bottom">
                    <div className=" container">
                        <div className="stream-wrapper">
                            <h3 className="title">Update Tournament Round</h3>
                            <form className="account-form text-left" style={{ textAlign: "left" }}>
                                

                                <RoundFormBasicInfo 
                                    roundValue={this.state.data.round} 
                                    roundOnChange={(e) => { this.setState({ data: { ...this.state.data, round : e.target.value } }); }}
                                    titleValue={this.state.data.title}
                                    titleOnChange={(e) => { this.setState({ data: { ...this.state.data, title : e.target.value } }); }} 
                                    overviewValue={this.state.data.overview} 
                                    overviewOnChange={(e) => { this.setState({ data: { ...this.state.data, overview: e.target.value } }); }} 
                                    startDateValue={(typeof this.state.data.round_start_date === "string") ? new Date(this.state.data.round_start_date) : this.state.data.round_start_date} 
                                    startDateOnChange={(e) => { this.setState({ data: { ...this.state.data, round_start_date : e } }); }} 
                                    endDateValue={(typeof this.state.data.round_end_date === "string") ? new Date(this.state.data.round_end_date) : this.state.data.round_end_date} 
                                    endDateOnChange={(e) => { this.setState({ data: { ...this.state.data, round_end_date : e } }); }} 
                                    checkinEnableValue={(this.state.data.checkin_enabled === 'true' || this.state.data.checkin_enabled == true)} 
                                    checkEnabledOnChange={(e) => { this.setState({ data: { ...this.state.data, checkin_enabled : e.target.checked } }); }}
                                    checkinPriorValue={this.state.data.checkin_mintues_prior} 
                                    checkinPriorOnChange={(e) => { this.setState({ data: { ...this.state.data, checkin_mintues_prior : e.target.value } }); }}
                                    eliminationValue={this.state.data.elimination_type}
                                    eliminationOnChange={(e) => { this.setState({ data: { ...this.state.data, elimination_type : e.target.value } }); }}

                                     errors = {this.state.errors}
                                />


                                {(Object.keys(this.state.errors).length >0 ) ? <Danger message={"There are errors in creating the round. Please check the form above."} /> : ''}

                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => { this.update(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Update Round</span></button>
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

export default withRouter(CompetitionsUpdateRoundsPage);