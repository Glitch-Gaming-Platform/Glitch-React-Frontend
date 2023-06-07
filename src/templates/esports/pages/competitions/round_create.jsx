import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import Navigate from "../../../../util/Navigate";
import withRouter from "../../../../util/withRouter";
import Loading from "../../component/alerts/Loading";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Glitch from 'glitch-javascript-sdk';


class CompetitionsRoundCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournament : {},
            venues: [],
            errors: {},
            isLoading: false,
        };

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

        let id = this.props.router.params.id;

        this.setState({ isLoading: true });

        Glitch.api.Competitions.createVenue(id, data).then(response => {

            this.setState({ isLoading: false });

            this.props.router.navigate(Navigate.tournamentsManage(this.state.tournament.id));
        }).catch(error => {

            this.setState({ isLoading: false });

            if (error.response && error.response.data) {
                this.setState({ errors: error.response.data });

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
                <PageHeader title={'Add Venue'} curPage={'Find A Tournamnet'} />
                <div className=" padding-top padding-bottom">
                    <div className=" container">
                        <div className="stream-wrapper">
                            <h3 className="title">Add A Venue</h3>
                            <form className="account-form text-left" style={{ textAlign: "left" }}>
                                





                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => { this.create(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Create {Glitch.util.LabelManager.getCompetitionLabel(false, true)}</span></button>
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

export default withRouter(CompetitionsRoundCreate);