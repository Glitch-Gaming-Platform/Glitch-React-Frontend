import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import Navigate from "../../../../util/Navigate";
import withRouter from "../../../../util/withRouter";
import Danger from "../../component/alerts/Danger";
import Loading from "../../component/alerts/Loading";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Glitch from 'glitch-javascript-sdk';


class CompetitionsRegisterUserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error : null,
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

    register(event) {

        event.preventDefault();

        let data = {
            user_id : Glitch.util.Session.getID()
        };

        this.setState({ isLoading: true });

        let id = this.props.router.params.id;

        Glitch.api.Competitions.registerUser(id, data).then(response => {

            this.setState({ isLoading: false });

            this.props.router.navigate(Navigate.tournamentsView(response.data.data.id));
        }).catch(error => {

            this.setState({ isLoading: false });

            if(error.response && error.response.data) {
                this.setState({errors : error.response.data});

                setTimeout(() =>{
                    this.setState({errors : {}});
                }, timeouts.error_message_timeout)
            }
        });
    }

    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Register For Tournamnet'} curPage={'Compete'} />
                <div className=" padding-top padding-bottom">
                    <div className=" container">
                        <div className="stream-wrapper">
                            <h3 className="title">Register {Glitch.util.LabelManager.getCompetitionLabel(false, true)}</h3>
                            <form className="account-form text-left" style={{ textAlign: "left" }}>
                                
                                <h3>Register For {Glitch.util.LabelManager.getCompetitionLabel(false, true)}</h3>

                                <p>Register to the {Glitch.util.LabelManager.getCompetitionLabel(false, false)} as an individual contentest. After logging in, simply register using the button below.</p>

                                
                                { this.state.errors && this.state.errors.error ? <Danger message={this.state.errors.error}  /> : ''}
                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => { this.register(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Register</span></button>
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

export default withRouter(CompetitionsRegisterUserPage);