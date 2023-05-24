import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import Navigate from "../../../../util/Navigate";
import Response from "../../../../util/Response";
import withRouter from "../../../../util/withRouter";
import Loading from "../../component/alerts/Loading";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Glitch from 'glitch-javascript-sdk';


class CompetitionsBracketCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournament: {},
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

        this.setState({ isLoading: true });

        let id = this.props.router.params.id;

        Glitch.api.Competitions.createVenue(id, data).then(response => {

            this.setState({ isLoading: false });

            this.props.router.navigate(Navigate.tournamentsManage(this.state.tournament.id));
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
                <PageHeader title={'Add Venue'} curPage={'Find A Tournamnet'} />
                <div className=" padding-top padding-bottom">
                    <div className=" container">
                        <div className="stream-wrapper">
                            <h3 className="title">Add A Venue</h3>
                            <form className="account-form text-left" style={{ textAlign: "left" }}>






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

export default withRouter(CompetitionsBracketCreate);