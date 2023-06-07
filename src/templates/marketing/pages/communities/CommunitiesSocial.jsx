import Glitch from 'glitch-javascript-sdk';

import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import SidebarManageMenu from "../../component/section/communities/menu_side_manage";
import CommunityFormSocial from '../../component/section/communities/form_community_social';
import Loading from '../../component/alerts/Loading';
import Danger from '../../component/alerts/Danger';
import timeouts from '../../../../constants/timeouts';
import Navigate from '../../../../util/Navigate';





class CommunitiesSocial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : {},
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

            this.setState({community : response.data.data, data : response.data.data});


        }).catch(error => {

        })
    }

    updateCommunity(event) {

        if(event){
            event.preventDefault();
        }

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
                <PageHeader title={this.state.community.name +' Community Social Profiles'} curPage={'Manage Community'} />

                <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-8 col-12 pe-5">
                                    
                                <form className="text-left" style={{ textAlign: "left" }}>
                                        <CommunityFormSocial
                                            facebookValue={this.state.data.facebook_page}
                                            facebookOnChange={(e) => { this.setState({ data: { ...this.state.data, facebook_page : e.target.value } }); }}
                                            twitterValue={this.state.data.twitter_page}
                                            twitterOnChange={(e) => { this.setState({ data: { ...this.state.data, twitter_page : e.target.value } }); }}
                                            instagramValue={this.state.data.instagram_page}
                                            instagramOnChange={(e) => { this.setState({ data: { ...this.state.data, instagram_page : e.target.value } }); }}
                                            snapchatValue={this.state.data.snapchat_page}
                                            snapchatOnChange={(e) => { this.setState({ data: { ...this.state.data, snapchat_page : e.target.value } }); }}
                                            tiktokValue={this.state.data.tiktok_page}
                                            tiktokOnChange={(e) => { this.setState({ data: { ...this.state.data, tiktok_page : e.target.value } }); }}
                                            paetronValue={this.state.data.paetron_page}
                                            paetronOnChange={(e) => { this.setState({ data: { ...this.state.data, paetron_page : e.target.value } }); }}
                                            twitchValue={this.state.data.twitch_page}
                                            twitchOnChange={(e) => { this.setState({ data: { ...this.state.data, twitch_page: e.target.value } }); }}
                                            youtubeValue={this.state.data.youtube_page}
                                            youtubeOnChange={(e) => { this.setState({ data: { ...this.state.data, youtube_page : e.target.value } }); }}
                                            discordValue={this.state.data.discord_page}
                                            discorOnChange={(e) => { this.setState({ data: { ...this.state.data, discord_page : e.target.value } }); }}
                                            steamValue={this.state.data.steam_page}
                                            steamOnChange={(e) => { this.setState({ data: { ...this.state.data, steam_page : e.target.value } }); }}
                                            errors={this.state.errors}
                                        />

                                        <hr />

                                        {(Object.keys(this.state.errors).length >0 ) ? <Danger message={"There are error(s) in updating the community. Please check the form above."} /> : ''}

                                        <div className="form-group">
                                            <button className="d-block default-button" onClick={(e) => { this.updateCommunity(e) }}><span>{this.state.isLoading ? <Loading /> : ''} Update Social</span></button>
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

export default withRouter(CommunitiesSocial);
