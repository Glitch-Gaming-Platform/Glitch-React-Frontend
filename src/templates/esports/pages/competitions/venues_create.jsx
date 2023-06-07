import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import Navigate from "../../../../util/Navigate";
import withRouter from "../../../../util/withRouter";
import Danger from "../../component/alerts/Danger";
import Loading from "../../component/alerts/Loading";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import VenueFormAdditional from "../../component/section/competitions/form_venue_additonal";
import VenueFormBasic from "../../component/section/competitions/form_venue_basic";
import VenueFormLocation from "../../component/section/competitions/form_venue_location";
import Glitch from 'glitch-javascript-sdk';


class CompetitionsVenuesCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : {},
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
            this.setState({ tournament: response.data });
        }).catch(error => {

        });
    }

    create(event) {

        event.preventDefault();

        let data = this.state.data;

        this.setState({ isLoading: true });
        

        Glitch.api.Competitions.createVenue(this.state.tournament.id, data).then(response => {

            this.setState({ isLoading: false });

            this.props.router.navigate(Navigate.tournamentsVenuesList(this.state.tournament.id));
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
                <PageHeader title={'Update Venue'} curPage={'Tournmanet Venues'} />
                <div className=" padding-top padding-bottom">
                    <div className=" container">
                        <div className="stream-wrapper">
                            <h3 className="title">Add A Venue</h3>
                            <form className="text-left" style={{ textAlign: "left" }}>
                                
                                <VenueFormBasic
                                    nameValue={this.state.data.venue_name}
                                    nameOnChange={(e) => { this.setState({ data: { ...this.state.data, venue_name : e.target.value } }); }}
                                    venueTypeValue={this.state.data.is_virtual_hybrid_remote}
                                    venueTypeOnChange={(e) => { this.setState({ data: { ...this.state.data, is_virtual_hybrid_remote : e.target.value } }); }}
                                    errors = {this.state.errors}
                                />

                                <VenueFormLocation
                                    addressLine1Value={this.state.data.address_line_1}
                                    addressLine1OnChange={(e) => { this.setState({ data: { ...this.state.data, address_line_1: e.target.value } }); }}
                                    addressLine2Value={this.state.data.address_line_2}
                                    addressLine2OnChange={(e) => { this.setState({ data: { ...this.state.data, address_line_2: e.target.value } }); }}
                                    locaclityValue={this.state.data.locality}
                                    localityOnChange={(e) => { this.setState({ data: { ...this.state.data, locality: e.target.value } }); }}
                                    provinceValue={this.state.data.province}
                                    provinceOnChange={(e) => { this.setState({ data: { ...this.state.data, province: e.target.value } }); }}
                                    postalValue={this.state.data.postal_code}
                                    postalOnChange={(e) => { this.setState({ data: { ...this.state.data, postal_code: e.target.value } }); }}
                                    errors = {this.state.errors}
                                />

                                <VenueFormAdditional
                                    directionInstructionsValue={this.state.data.venue_direction_instructions}
                                    directionInstructionsOnChange={(e) => { this.setState({ data: { ...this.state.data, venue_direction_instructions : e } }); }}
                                    accessInstructionsValue={this.state.data.venue_access_instructions}
                                    accessInstructionsOnChange={(e) => { this.setState({ data: { ...this.state.data, venue_access_instructions : e } }); }}
                                    additionalNotesValue={this.state.data.additional_notes}
                                    additionalNotesOnChange={(e) => { this.setState({ data: { ...this.state.data, additional_notes : e } }); }}
                                    errors = {this.state.errors}
                                />


                                {(Object.keys(this.state.errors).length >0 ) ? <Danger message={"There are errors in creating the venue. Please check the form above."} /> : ''}

                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => { this.create(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Add Venue</span></button>
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

export default withRouter(CompetitionsVenuesCreate);