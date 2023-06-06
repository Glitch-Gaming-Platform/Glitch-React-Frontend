import Glitch from 'glitch-javascript-sdk';
import { Component, Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import { Link } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';
import PageHeader from '../../component/layout/pageheader';
import withRouter from '../../../../util/withRouter';
import Roles from '../../../../constants/roles';
import CommunityFormInvite from '../../component/section/communities/form_community_invite';
import Success from '../../component/alerts/Success';
import Danger from '../../component/alerts/Danger';
import Loading from '../../component/alerts/Loading';
import SidebarManageMenu from '../../component/section/communities/menu_side_manage';
import timeouts from '../../../../constants/timeouts';

class CommunitiesUsersInvite extends Component {

    constructor(props) {
        super(props);

        this.state = {
            community: {},
            data: {},
            errors : {},
            success : {}

        };



    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Glitch.api.Communities.view(id).then(response => {

            this.setState({ community: response.data.data });


        }).catch(error => {

        })

    }

    inviteUser() {

        let id = this.props.router.params.id;

        Glitch.api.Communities.sendInvite(id, this.state.data).then(response => {

            this.setState({data : {email : '', name : '', role : ''}});
            
            this.setState({ success : { message : "Invite Successfully Sent"}});

            setTimeout(() => {
                this.setState({ success: {}, data: {} });

            }, timeouts.error_message_timeout);
        }).catch(error => {

            let jsonErrors = error?.response?.data;

            if (jsonErrors) {
                
                this.setState({ errors: jsonErrors });

                setTimeout(() => {
                    this.setState({ errors: {} });
                }, timeouts.error_message_timeout);
            }

        })
    }

    render() {
        return (
            <>
                <Fragment>
                    <Header />
                    <PageHeader title={'Communities'} curPage={'Manage Community'} />

                    <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                        <div className="container">
                            <div className="section-wrapper">
                                <div className="row justify-content-center pb-15">
                                    <div className="col-lg-8 col-12 pe-5">

                                        <form className="text-left" style={{ textAlign: "left" }}>
                                            <CommunityFormInvite
                                                nameValue={this.state.data.name}
                                                nameOnChange={(e) => { this.setState({ data: { ...this.state.data, name: e.target.value } }); }}
                                                emailValue={this.state.data.email}
                                                emailOnChange={(e) => { this.setState({ data: { ...this.state.data, email: e.target.value } }); }}
                                                roleValue={this.state.data.role}
                                                roleOnChange={(e) => { this.setState({ data: { ...this.state.data, role : e.target.value } }); }}
                                                errors={this.state.errors}
                                            />

                                            {(Object.keys(this.state.errors).length > 0) ? <Danger message={"There are error(s) in inviting the user. Please check the form above."} /> : ''}

                                            {(Object.keys(this.state.success).length > 0) ? <Success message={"Invite Successfully Sent"} /> : ''}

                                            <div className="form-group">
                                                <button type='button' className="d-block default-button" onClick={(e => { this.inviteUser(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Invite User</span></button>
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
            </>
        );
    }
}

export default withRouter(CommunitiesUsersInvite);