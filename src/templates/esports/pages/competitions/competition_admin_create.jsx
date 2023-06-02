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
import Glitch from 'glitch-javascript-sdk';


class CompetitionsCreatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            errors: {},
            isLoading: false,
        };

        if (!Session.isLoggedIn()) {
            window.location = Navigate.authLogin();
        }
    }

    create(event) {

        event.preventDefault();

        let data = this.state.data;

        this.setState({ isLoading: true });

        Glitch.api.Competitions.create(data).then(response => {

            this.setState({ isLoading: false });

            this.props.router.navigate(Navigate.tournamentsManage(response.data.data.id));
        }).catch(error => {


            console.log(error);
            this.setState({ isLoading: false });

            let jsonErrors = Response.parseJSONFromError(error);

            if (error.response && error.response.data) {

                this.setState({ errors: error.response.data });

                setTimeout(() => {
                    this.setState({ errors: {} });
                }, timeouts.error_message_timeout)
            }
        })
    }

    componentDidMount() {

    }

    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Create Tournamnet'} curPage={'Compete'} />
                <div className=" padding-top padding-bottom">
                    <div className=" container">
                        <div className="stream-wrapper">
                            <h3 className="title">Create A Tournament</h3>
                            <form className="account-form text-left" style={{ textAlign: "left" }}>
                                <CompetitionFormBasicInfo
                                    nameValue={this.state.data.name}
                                    nameOnChange={(e) => { this.setState({ data: { ...this.state.data, name: e.target.value } }); }}
                                    descriptionValue={this.state.data.description}
                                    descriptionOnChange={(e) => { this.setState({ data: { ...this.state.data, description: e.target.value } }); }}
                                    startDateValue={this.state.data.start_date}
                                    startDateOnChange={(e) => { this.setState({ data: { ...this.state.data, start_date : e } }); }}
                                    endDateValue={this.state.data.end_date} 
                                    endDateOnChange={(e) => { this.setState({ data: { ...this.state.data, end_date: e} }); }}
                                    errors = {this.state.errors}
                                />

                                <hr/>

                                <CompetitionFormMatchDetails
                                    competitorsPerMatchValue={this.state.data.competitors_per_match}
                                    competitorsPerMatchOnChange={(e) => { this.setState({ data: { ...this.state.data, competitors_per_match : e.target.value } }); }}
                                    typeValue={this.state.data.type}
                                    typeChange={(e) => { this.setState({ data: { ...this.state.data, type : e.target.value } }); }}
                                    minimumTeamSizeValue={this.state.data.minimum_team_size}
                                    minimumTeamSizeOnChange={(e) => { this.setState({ data: { ...this.state.data, minimum_team_size : e.target.value } }); }}
                                    errors = {this.state.errors}
                                />

                                <hr/>

                                <CompetitionFormSignupDetails
                                    allowTeamSignupValue={this.state.data.allow_team_signup}
                                    allowTeamSignupOnChange={(e) => { this.setState({ data: { ...this.state.data, allow_team_signup: e.target.checked } }); }}
                                    allowUserSignupValue={this.state.data.allow_individual_signup}
                                    allowUserSignupOnChange={(e) => { this.setState({ data: { ...this.state.data, allow_individual_signup: e.target.checked } }); }}
                                    maxTeamsValue={this.state.data.max_registration_for_teams}
                                    maxTeamsOnChange={(e) => { this.setState({ data: { ...this.state.data, max_registration_for_teams: e.target.value } }); }}
                                    maxUsersValue={this.state.data.max_registration_for_users}
                                    maxUsersOnChange={(e) => { this.setState({ data: { ...this.state.data, max_registration_for_users: e.target.value } }); }}
                                    teamRegistrationPriceValue={this.state.data.team_registration_price}
                                    teamRegistrationPriceOnChange={(e) => { this.setState({ data: { ...this.state.data, team_registration_price: e.target.value } }); }}
                                    userRegistrationPriceValue={this.state.data.individual_registration_price}
                                    userRegistrationPriceOnChange={(e) => { this.setState({ data: { ...this.state.data, individual_registration_price: e.target.value } }); }}
                                    registrationStartDateValue={this.state.data.registration_start_date}
                                    registrationStartDateOnChange={(e) => { this.setState({ data: { ...this.state.data, registration_start_date : e } }); }}
                                    registrationEndDateValue={this.state.data.registration_end_date} 
                                    registrationEndDateOnChange={(e) => { this.setState({ data: { ...this.state.data, registration_end_date : e} }); }}
                                    enableCheckinValue={(this.state.data.checkin_enabled === 'true' || this.state.data.checkin_enabled == true)}
                                    enableCheckinOnChange={(e) => { this.setState({ data: { ...this.state.data, checkin_enabled : e.target.checked } }); }}
                                    errors={this.state.errors}
                                />

                                <hr/>

                                <CompetitionFormSocial
                                    facebookValue={this.state.data.facebook_page}
                                    facebookOnChange={(e) => { this.setState({ data: { ...this.state.data, facebook_page : e.target.value } }); }}
                                    twitterValue={this.state.data.twitter_page}
                                    twitterOnChange={(e) => { this.setState({ data: { ...this.state.data, twitter_page : e.target.value } }); }}
                                    instagramValue={this.state.data.instagram_page}
                                    instagramOnChange={(e) => { this.setState({ data: { ...this.state.data, instagram_page : e.target.value } }); }}
                                    snapchatValue={this.state.data.snapchat_page}
                                    snapchatOnChange={(e) => { this.setState({ data: { ...this.state.data, snapchat_page : e.target.value } }); }}
                                    tiktokValue={this.state.data.tiktok_page}
                                    tiktokOnChange={(e) => { this.setState({ data: { ...this.state.data, tiktok_page : e.target.value } }); }}
                                    paetronValue={this.state.data.paetron_page}
                                    paetronOnChange={(e) => { this.setState({ data: { ...this.state.data, paetron_page : e.target.value } }); }}
                                    twitchValue={this.state.data.twitch_page}
                                    twitchOnChange={(e) => { this.setState({ data: { ...this.state.data, twitch_page: e.target.value } }); }}
                                    youtubeValue={this.state.data.youtube_page}
                                    youtubeOnChange={(e) => { this.setState({ data: { ...this.state.data, youtube_page : e.target.value } }); }}
                                    errors={this.state.errors}
                                />




                                {(Object.keys(this.state.errors).length >0 ) ? <Danger message={"There are errors in your registration. Please check the form above."} /> : ''}

                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => { this.create(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Create Tournament</span></button>
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

export default withRouter(CompetitionsCreatePage);