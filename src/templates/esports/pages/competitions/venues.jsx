import { Component, Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Navigate from "../../../../util/Navigate";
import Requests from "../../../../util/Requests";
import withRouter from "../../../../util/withRouter";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import VenueItem from "../../component/section/competitions/detail_venue_item";
import SidebarManageMenu from "../../component/section/competitions/menu_side_manage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Glitch from 'glitch-javascript-sdk';


class CompetitionsVenuesList extends Component {

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
        this.loadVenues();
    }

    loadTournament() {

        let id = this.props.router.params.id;

       Glitch.api.Competitions.view(id).then(response => {
            this.setState({ tournament: response.data });
        }).catch(error => {

        });
    }

    loadVenues() {

        let id = this.props.router.params.id;

       Glitch.api.Competitions.venues(id).then(response => {
            this.setState({ venues: response.data });
        }).catch(error => {

        });
    }


    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Manage Tournaments Venues'} curPage={'Find A Tournamnet'} />

                <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-8 col-12">
                                    <article>
                                        <Link to={Navigate.tournamentsVenuesCreate(this.state.tournament.id)} className="btn btn-success"><FontAwesomeIcon icon={faPlus} /> Add Venue</Link>
                                        <h2>{this.state.tournament.name} Venues</h2>

                                        {this.state.venues && this.state.venues.map(function (venue, index) {
                                            return (
                                                <>
                                                    <VenueItem key={index} venue={venue} is_admin={true} />
                                                    <hr />
                                                </>
                                            );
                                        })}



                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-7 col-12">
                                    <aside className="ps-lg-4">
                                        <SidebarManageMenu competition_id={this.state.tournament.id} />

                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );

    }
}

export default withRouter(CompetitionsVenuesList);