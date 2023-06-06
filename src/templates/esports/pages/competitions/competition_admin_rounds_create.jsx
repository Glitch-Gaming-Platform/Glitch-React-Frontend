import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import Navigate from "../../../../util/Navigate";
import Requests from "../../../../util/Requests";
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


class CompetitionsCreateRoundsPage extends Component {

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
    }

    loadTournament() {

        let id = this.props.router.params.id;
        Glitch.api.Competitions.view(id).then(response => {
            this.setState({ tournament : response.data.data });
        }).catch(error => {

        });
    }

    create(event) {

        event.preventDefault();

        let data = this.state.data;

        this.setState({ isLoading: true });

        let id = this.props.router.params.id;

        Requests.tournamentsRoundsCreate(id, data).then(response => {

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
                <PageHeader title={'Create A Tournamnet Round'} curPage={'Compete'} />
                
                <div className=" padding-top padding-bottom">
                    <div className=" container">
                        <div className="stream-wrapper">
                            <h3 className="title">Create A {Glitch.util.LabelManager.getCompetitionLabel(false, true)} Round</h3>
                            <form className="account-form text-left" style={{ textAlign: "left" }}>
                                

                                <RoundFormBasicInfo 
                                    roundValue={this.state.data.round} 
                                    roundOnChange={(e) => { this.setState({ data: { ...this.state.data, round : e.target.value } }); }}
                                    titleValue={this.state.data.title}
                                    titleOnChange={(e) => { this.setState({ data: { ...this.state.data, title : e.target.value } }); }} 
                                    overviewValue={this.state.data.overview} 
                                    overviewOnChange={(e) => { this.setState({ data: { ...this.state.data, overview: e.target.value } }); }} 
                                    startDateValue={this.state.data.round_start_date} 
                                    startDateOnChange={(e) => { this.setState({ data: { ...this.state.data, round_start_date : e } }); }} 
                                    endDateValue={this.state.data.round_end_date} 
                                    endDateOnChange={(e) => { this.setState({ data: { ...this.state.data, round_end_date : e } }); }} 
                                    checkinEnableValue={this.state.data.checkin_enabled} 
                                    checkEnabledOnChange={(e) => { this.setState({ data: { ...this.state.data, checkin_enabled : e.target.checked } }); }}
                                    checkinPriorValue={this.state.data.checkin_mintues_prior} 
                                    checkinPriorOnChange={(e) => { this.setState({ data: { ...this.state.data, checkin_mintues_prior : e.target.value } }); }}
                                    eliminationValue={this.state.data.elimination_type}
                                    eliminationOnChange={(e) => { this.setState({ data: { ...this.state.data, elimination_type : e.target.value } }); }}

                                     errors = {this.state.errors}
                                />


                                {(Object.keys(this.state.errors).length >0 ) ? <Danger message={"There are errors in creating the round. Please check the form above."} /> : ''}

                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => { this.create(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Create Round</span></button>
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

export default withRouter(CompetitionsCreateRoundsPage);