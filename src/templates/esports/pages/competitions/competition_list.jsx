import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Navigate from "../../../../util/Navigate";
import withRouter from "../../../../util/withRouter";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import TournamentItem from "../../component/section/competitions/detail_tournament_item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Glitch from 'glitch-javascript-sdk';


class CompetitionsListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournaments: [],
            isLoading: false,
            error: null,
        };
        this.page = 1;
        this.perPage = 10;
    }

    componentDidMount() {
        this.loadTournaments();
        this.setupIntersectionObserver();
    }

    loadTournaments = () => {
        const { tournaments } = this.state;
        this.setState({ isLoading: true });

        Glitch.api.Competitions.list({ page: this.page, per_page: this.perPage }).then(response => {
            const newTournaments = response.data.data;
            this.setState(prevState => ({
                tournaments: [...prevState.tournaments, ...newTournaments],
                isLoading: false,
                error: null,
            }));
            this.page += 1;
        }).catch(error => {
            this.setState({ isLoading: false, error });
        });
    };

    setupIntersectionObserver = () => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        this.observer = new IntersectionObserver(this.handleIntersection, options);
        this.observer.observe(this.loadingRef);
    };

    handleIntersection = (entries) => {
        const target = entries[0];

        if (target.isIntersecting && !this.state.isLoading) {
            this.loadTournaments();
        }
    };

    componentWillUnmount() {
        this.observer.disconnect();
    }

    render() {
        const { tournaments, isLoading, error } = this.state;

        return (
            <Fragment>
                <Header />
                <PageHeader title={Glitch.util.LabelManager.getCompetitionLabel(true, true)} curPage={'Find ' + Glitch.util.LabelManager.getCompetitionLabel(true, true)} />

                <div className="container pt-5">
                    <p className="esportsCTA">Ready to crown a champion? Create your own {Glitch.util.LabelManager.getCompetitionLabel(false, false)} and watch as players from around the world compete for glory. Start building the ultimate gaming showdown!</p>
                </div>

                <div className="container pt-5">
                    <Link className="default-button reverse-effect" to={Navigate.tournamentsCreate()}><span>Create {Glitch.util.LabelManager.getCompetitionLabel(false, true)}</span> </Link>
                </div>


                <div className="tab-content mt-3" id="myTabContent">
                    <div className="container text-right">

                        <div className="row g-4 match-grid GameListStyleTwo">
                            {tournaments.map((tournament, index) => (
                                <TournamentItem key={index} tournament={tournament} />
                            ))}

                            {
                                (tournaments && tournaments.length <= 0) ?
                                    (

                                        <section className="fore-zero pt-5 padding-bottom">
                                            <div className="container">
                                                <div className="section-wrapper">
                                                    <div className="zero-item">

                                                        <div className="zero-content">
                                                            <h2>No {Glitch.util.LabelManager.getCompetitionLabel(true, true)} Have Been Created</h2>
                                                            <p>Create your first {Glitch.util.LabelManager.getCompetitionLabel(false, true)}!</p>
                                                            <Link className="default-button reverse-effect" to={Navigate.tournamentsCreate()}><span>Create {Glitch.util.LabelManager.getCompetitionLabel(false, true)} <i className="icofont-double-right"></i></span> </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                    ) : <></>

                            }

                            {isLoading && <div>Loading...</div>}
                            {error && <div>Error: {error.message}</div>}

                            <div ref={ref => (this.loadingRef = ref)} />
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default withRouter(CompetitionsListPage);




