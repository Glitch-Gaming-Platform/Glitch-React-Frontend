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
import CompetitionFormWaivers from "../../component/section/competitions/form_competition_waivers";


class CompetitionsWaiversPage extends Component {

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

    componentDidMount() {
        this.loadTournament();
    }

    loadTournament() {

        let id = this.props.router.params.id;

        Requests.tournamentsView(id).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {

        });
    }

    update(event) {

        event.preventDefault();

        let data = this.state.data;

        this.setState({ isLoading: true });

        let id = this.props.router.params.id;

        Requests.tournamentsUpdate(id, data).then(response => {

            this.setState({ isLoading: false });

            this.props.router.navigate(Navigate.tournamentsManage(response.data.id));
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
                <PageHeader title={'Update Tournamnet Rules & Waivers'} curPage={'Compete'} />
                <div className=" padding-top padding-bottom">
                    <div className=" container">
                        <div className="stream-wrapper">
                            <h3 className="title">Update Tournament Rules & Waivers</h3>
                            <form className="account-form text-left" style={{ textAlign: "left" }}>
                                <CompetitionFormWaivers
                                    rulesValue={this.state.data.rules}
                                    rulesOnChange={(e) => { this.setState({ data: { ...this.state.data, rules : e } }); }}
                                    agreementValue={this.state.data.agreement}
                                    agreementOnChange={(e) => { this.setState({ data: { ...this.state.data, agreement: e } }); }} 
                                    scheduleValue={this.state.data.schedule}
                                    scheduleOnChange={(e) => { this.setState({ data: { ...this.state.data, schedule : e } }); }}
                                    disqualifiersValue={this.state.data.disqualifiers}
                                    disqualifiersOnChange={(e) => { this.setState({ data: { ...this.state.data, disqualifiers : e } }); }}
                                    refundValue={this.state.data.refund_policy}
                                    refundOnChange={(e) => { this.setState({ data: { ...this.state.data, refund_policy : e } }); }}
                                    harassmentValue={this.state.data.harassment_policy}
                                    harassmentOnChange={(e) => { this.setState({ data: { ...this.state.data, harassment_policy : e } }); }} 
                                    privacyValue={this.state.data.saftey_policy}
                                    privacyOnChange={(e) => { this.setState({ data: { ...this.state.data, saftey_policy : e } }); }} 
                                    safteyValue={this.state.data.privacy_policy}
                                    safteyOnChange={(e) => { this.setState({ data: { ...this.state.data, privacy_policy : e } }); }}
                                    errors = {this.state.errors}
                                />

                                <hr/>

                                {(Object.keys(this.state.errors).length >0 ) ? <Danger message={"There are errors in your update. Please check the form above."} /> : ''}

                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => { this.update(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Update Rules and Waiver</span></button>
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

export default withRouter(CompetitionsWaiversPage);