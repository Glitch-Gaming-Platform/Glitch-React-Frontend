import Glitch from 'glitch-javascript-sdk';
import { Component, Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import { Link } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';
import PageHeader from '../../component/layout/pageheader';
import withRouter from '../../../../util/withRouter';
import Roles from '../../../../constants/roles';
import Danger from '../../component/alerts/Danger';
import Loading from '../../component/alerts/Loading';
import SidebarManageMenu from '../../component/section/communities/menu_side_manage';
import PublisherHeader from '../../component/layout/publisherheader';

class CommunitiesUsers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            community: {},
            users: [],
            super_administrators: [],
            administrators: [],
        };



    }

    getRole(role) {

        if(role == Glitch.constants.Roles.ADMINISTRATOR) {
            return 'Administrator';
        } else if(role == Glitch.constants.Roles.SUPER_ADMINISTRATOR) {
            return 'Super Administrator';
        } else if(role == Glitch.constants.Roles.BLOCKED) {
            return 'Blocked';
        } else if(role == Glitch.constants.Roles.MODERATOR) {
            return 'Moderator';
        } else if(role == Glitch.constants.Roles.NONE) {
            return 'None';
        } else if(role == Glitch.constants.Roles.PARTICIPANT) {
            return 'Member';
        } else if(role == Glitch.constants.Roles.SPEAKER) {
            return 'Speaker';
        } else if(role == Glitch.constants.Roles.SUBSCRIBER) {
            return 'Subscriber';
        } else {
            return 'Unknown';
        }
    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Glitch.api.Communities.view(id).then(response => {

            this.setState({ community: response.data.data });

        }).catch(error => {

        })

        Glitch.api.Communities.listUsers(id).then(response => {
            this.setState({ users: response.data.data });
        });

    }

    render() {
        return (
            <>
                <Fragment>
                    <PublisherHeader />
                    <PageHeader title={this.state.community.name +' Users'} curPage={'Manage Community'} />

                    <div className="container pt-5 mb-3">
                        <Link className="default-button reverse-effect" to={Navigate.communitiesUsersInvitePage(this.state.community.id)}><span>Invite User</span> </Link>
                    </div>
                    <div className="blog-section blog-single padding-bottom aside-bg">

                        <div className="container">

                            <div className="section-wrapper">
                                <div className="row justify-content-center pb-15">
                                    <div className="col-lg-8 col-12 pe-5">


                                        <h3>Community Users</h3>

                                        {this.state.users.map((user, index) => {
                                            return (<div className="authors">
                                                <div className="author-thumb">
                                                    <Link to={Navigate.communitiesUsersManagePage(this.state.community.id, user.user.id)}><img src={(user.user.avatar) ? user.user.avatar : "https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png"} alt="author" /></Link>
                                                </div>
                                                <div className="author-content">
                                                    <h6><Link to={Navigate.communitiesUsersManagePage(this.state.community.id, user.user.id)}>{user.user.username}</Link></h6>
                                                    <p className='lead'>{this.getRole(user.user_role)}</p>
                                                    <p>{user.bio}</p>

                                                </div>
                                            </div>);
                                        })}


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

export default withRouter(CommunitiesUsers);