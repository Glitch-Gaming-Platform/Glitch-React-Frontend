import Glitch from 'glitch-javascript-sdk';

import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import SidebarManageMenu from "../../component/section/communities/menu_side_manage";
import Navigate from '../../../../util/Navigate';
import timeouts from '../../../../constants/timeouts';
import CommunityFormBasic from '../../component/section/communities/form_community_basic';
import Danger from '../../component/alerts/Danger';
import Loading from '../../component/alerts/Loading';





class CommunitiesUpdatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : {},
            community: {},
            template : {},
            errors: {},
            isLoading: false,
        };

    }

    componentDidMount() {

        Glitch.api.Templates.list().then(response => {

            this.setState({templates : response.data.data});

        }).catch(error => {

        });

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
                <PageHeader title={'Communities'} curPage={'Manage Community'} />

                <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-8 col-12 pe-5">
                                    
                                <form className="text-left" style={{ textAlign: "left" }}>
                                    <CommunityFormBasic
                                        nameValue={this.state.data.name}
                                        nameOnChange={(e) => { this.setState({ data: { ...this.state.data, name : e.target.value } }); }}
                                        descriptionValue={this.state.data.description}
                                        descriptionOnChange={(e) => { this.setState({ data: { ...this.state.data, description : e.target.value } }); }}
                                        subdomainValue={this.state.data.subdomain}
                                        subdomainOnChange={(e) => { this.setState({ data: { ...this.state.data, subdomain : e.target.value } }); }}
                                        templateValue={this.state.data.template_id}
                                        templateOnChange={(e) => { this.setState({ data: { ...this.state.data, template_id : e.target.value } }); }}
                                        templates={this.state.templates}
                                        errors = {this.state.errors}
                                    />

                                    {(Object.keys(this.state.errors).length >0 ) ? <Danger message={"There are errors in creating the venue. Please check the form above."} /> : ''}

                                    <div className="form-group">
                                        <button className="d-block default-button" onClick={(e => { this.updateCommunity(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Update Community</span></button>
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

export default withRouter(CommunitiesUpdatePage);
