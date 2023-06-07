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
import CompetitionFormBasicInfo from "../../component/section/competitions/form_competition_basic";
import CompetitionFormMatchDetails from "../../component/section/competitions/form_competition_match";
import CompetitionFormSignupDetails from "../../component/section/competitions/form_competition_signup";
import CompetitionFormSocial from "../../component/section/competitions/form_competition_social";
import CompetitionFormWaivers from "../../component/section/competitions/form_competition_waivers";
import Glitch from 'glitch-javascript-sdk';


class CompetitionsWaiversPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            errors: {},
            isLoading: false,
        };

        if (!Glitch.util.Session.isLoggedIn()) {
            window.location = Navigate.authLogin();
        }
    }

    componentDidMount() {
        this.loadTournament();
    }

    loadTournament() {

        let id = this.props.router.params.id;

        Glitch.api.Competitions.view(id).then(response => {
            this.setState({ data: response.data.data });
        }).catch(error => {

        });
    }

    update(event) {

        event.preventDefault();

        let data = this.state.data;

        this.setState({ isLoading: true });

        let id = this.props.router.params.id;

        Glitch.api.Competitions.update(id, data).then(response => {

            this.setState({ isLoading: false });

            this.props.router.navigate(Navigate.tournamentsManage(response.data.data.id));
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
                <PageHeader title={'Update Tournamnet Rules & Waivers'} curPage={'Compete'} />
                <div className=" padding-top padding-bottom">
                    <div className=" container">
                        <div className="stream-wrapper">
                            <h3 className="title">Update {Glitch.util.LabelManager.getCompetitionLabel(false, true)} Rules & Waivers</h3>
                            <form className="text-left" style={{ textAlign: "left" }}>
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

                                <div className="form-group text-center">
                                    <button className="default-button" onClick={(e => { this.update(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Update Rules and Waiver</span></button>
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