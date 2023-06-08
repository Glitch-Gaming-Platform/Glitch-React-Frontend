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
import CompetitionBrackets from "../../component/section/competitions/detail_bracket";
import TournamentOverview from "../../component/section/competitions/detail_overview";
import CompetitionFormBasicInfo from "../../component/section/competitions/form_competition_basic";
import CompetitionFormMatchDetails from "../../component/section/competitions/form_competition_match";
import CompetitionFormSignupDetails from "../../component/section/competitions/form_competition_signup";
import CompetitionFormSocial from "../../component/section/competitions/form_competition_social";
import Glitch from 'glitch-javascript-sdk';


class CompetitionsInfoPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournament : {},
            leaderboards : {},
            me : {},
            data: {},
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
            this.setState({ tournament : response.data.data });

            Glitch.api.Competitions.allLeaderboards(id).then(response => {
                this.setState({ leaderboards : response.data.data });
            }).catch(error => {

            });

            Glitch.api.Competitions.me(id).then(response => {
                this.setState({ me : response.data.data });
            }).catch(error => {

            });
        }).catch(error => {

        });
    }

    register(event) {

        event.preventDefault();

        let data = this.state.data;

        this.setState({ isLoading: true });

        let id = this.props.router.params.id;

        Glitch.api.Competitions.registerUser(id, data).then(response => {

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
                <PageHeader title={Glitch.util.LabelManager.getCompetitionLabel(false, true) + ' Info'} curPage={'Compete'} backgroundImage={this.state.tournament.banner_image} />
                
                <div className="container">
                    <TournamentOverview tournament={this.state.tournament} leaderboards={this.state.leaderboards} me={this.state.me} is_admin={false} />

                    <hr />

                
                </div>

                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(CompetitionsInfoPage);