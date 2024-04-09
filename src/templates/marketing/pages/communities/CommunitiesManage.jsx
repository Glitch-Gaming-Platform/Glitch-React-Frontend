import Glitch from 'glitch-javascript-sdk';

import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import SidebarManageMenu from "../../component/section/communities/menu_side_manage";
import CommunityOverview from '../../component/section/communities/community_overview';
import PublisherHeader from '../../component/layout/publisherheader';





class CommunitiesManagePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            community: {},
            community_link : '',
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


        }).catch(error => {

        })
    }

    render() {



        return (
            <Fragment>
                <PublisherHeader/>
                <PageHeader title={'Manage ' + this.state.community.name +' Community'} curPage={'Manage Community'} />

                <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-8 col-12 pe-5">   

                                    <h2>Manage Your Community</h2>
                                    <p>See the overview of your community and manage your community options through the menu. You can access your community as <a target="_blank" href={"//" + this.state.community.subdomain + process.env.REACT_APP_SITE_DOMAIN }>{this.state.community.subdomain}{process.env.REACT_APP_SITE_DOMAIN}</a>.</p>

                                    <CommunityOverview community={this.state.community} />

                                    

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

export default withRouter(CommunitiesManagePage);
