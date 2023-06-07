import Glitch from 'glitch-javascript-sdk';

import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import SidebarManageMenu from "../../component/section/communities/menu_side_manage";
import CommunityFormFeatures from '../../component/section/communities/form_community_features';
import Danger from '../../component/alerts/Danger';
import Loading from '../../component/alerts/Loading';
import Navigate from '../../../../util/Navigate';
import timeouts from '../../../../constants/timeouts';
import CommunityFormLabels from '../../component/section/communities/form_community_labels';





class CommunitiesFeatures extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            community: {},
            errors: {},
            isLoading: false,
        };

    }

    componentDidMount() {
        this.loadCommunity();
    }

    loadCommunity() {

        let id = this.props.router.params.id;

        Glitch.api.Communities.view(id).then(response => {

            this.setState({community : response.data.data});
            this.setState({data : response.data.data});


        }).catch(error => {

        })
    }

    updateCommunity(event) {

        event.preventDefault();

        let data = this.state.data;

        let id = this.props.router.params.id;

        this.setState({ isLoading: true });
        
        Glitch.api.Communities.update(id, data).then(response => {

            this.setState({ isLoading: false });

            this.props.router.navigate(Navigate.communitiesManagePage(response.data.data.id));
        }).catch(error => {

            this.setState({ isLoading: false });

            let jsonErrors = error?.response?.data;

            if (jsonErrors) {

                this.setState({ errors: jsonErrors });

                setTimeout(() => {
                    this.setState({ errors: {} });
                }, timeouts .error_message_timeout)
            }
        });
        
    }

    render() {



        return (
            <Fragment>
                <Header />
                <PageHeader title={this.state.community.name +' Features'} curPage={'Manage Community'} />

                <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-8 col-12 pe-5">
                                    <form className="text-left" style={{ textAlign: "left" }}>
                                        <CommunityFormFeatures
                                            disableStreamsValue={(this.state.data.disable_streams === 'true' || this.state.data.disable_streams == true)}
                                            disableStreamsOnChange={(e) => { this.setState({ data: { ...this.state.data, disable_streams: e.target.checked } }); }}
                                            disableCompetitionsValue={(this.state.data.disable_competitions === 'true' || this.state.data.disable_competitions == true)}
                                            disableCompetitionsOnChange={(e) => { this.setState({ data: { ...this.state.data, disable_competitions: e.target.checked } }); }}
                                            disableForumsValue={(this.state.data.disable_forums === 'true' || this.state.data.disable_forums == true)}
                                            disableForumsOnChange={(e) => { this.setState({ data: { ...this.state.data, disable_forums: e.target.checked } }); }}
                                            disableTeamsValue={(this.state.data.disable_teams === 'true' || this.state.data.disable_teams == true)}
                                            disableTeamsOnChange={(e) => { this.setState({ data: { ...this.state.data, disable_teams: e.target.checked } }); }}
                                            disableUsersValue={(this.state.data.disable_users === 'true' || this.state.data.disable_users == true)}
                                            disableUsersOnChange={(e) => { this.setState({ data: { ...this.state.data, disable_users: e.target.checked } }); }}
                                            errors = {this.state.errors}
                                        />

                                        <hr />
                                        <br />
                                        <CommunityFormLabels 
                                            labelPostsPluralValue={this.state.data.label_posts_plural}
                                            labelPostsPluralOnChange={(e) => { this.setState({ data: { ...this.state.data,label_posts_plural : e.target.value } }); }}
                                            labelPostsSingularValue={this.state.data.label_posts_singular}
                                            labelPostsSingularOnChange={(e) => { this.setState({ data: { ...this.state.data, label_posts_singular : e.target.value } }); }}

                                            labelUsersPluralValue={this.state.data.label_users_plural}
                                            labelUsersPluralOnChange={(e) => { this.setState({ data: { ...this.state.data,label_users_plural : e.target.value } }); }}
                                            labelUsersSingularValue={this.state.data.label_users_singular}
                                            labelUsersSingularOnChange={(e) => { this.setState({ data: { ...this.state.data, label_users_singular : e.target.value } }); }}

                                            labelCompetitionsPluralValue={this.state.data.label_competitions_plural}
                                            labelCompetitionsPluralOnChange={(e) => { this.setState({ data: { ...this.state.data,label_competitions_plural : e.target.value } }); }}
                                            labelCompetitionsSingularValue={this.state.data.label_competitions_singular}
                                            labelCompetitionsSingularOnChange={(e) => { this.setState({ data: { ...this.state.data, label_competitions_singular : e.target.value } }); }}

                                            labelStreamsPluralValue={this.state.data.label_streams_plural}
                                            labelStreamsPluralOnChange={(e) => { this.setState({ data: { ...this.state.data,label_streams_plural : e.target.value } }); }}
                                            labelStreamsSingularValue={this.state.data.label_streams_singular}
                                            labelStreamsSingularOnChange={(e) => { this.setState({ data: { ...this.state.data, label_streams_singular : e.target.value } }); }}
                                        />

                                        {(Object.keys(this.state.errors).length >0 ) ? <Danger message={"There are error(s) in updating the community. Please check the form above."} /> : ''}

                                        <hr/>

                                        <div className="form-group">
                                            <button className="d-block default-button" onClick={(e) => { this.updateCommunity(e) }}><span>{this.state.isLoading ? <Loading /> : ''} Update Features</span></button>
                                        </div>

                                    </form>
                                    


                                </div>
                                <div className="col-lg-4 col-md-7 col-12">
                                    <aside className="ps-lg-4">
                                        <SidebarManageMenu community_id={this.state.community.id} />
                                       
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(CommunitiesFeatures);
