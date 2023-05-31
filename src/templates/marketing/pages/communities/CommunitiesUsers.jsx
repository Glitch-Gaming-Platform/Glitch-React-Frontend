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

class CommunitiesUsers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            community: {},
            super_administrators: [],
            administrators: [],
        };



    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Glitch.api.Communities.view(id).then(response => {

            this.setState({community : response.data.data});
            this.setState({data : response.data.data});


        }).catch(error => {

        })

        Glitch.api.Communities.listUsers(id, {roles: Roles.SuperAdministrator }).then(response => {
            this.setState({super_administrators : response.data.data});
        });

        Glitch.api.Communities.listUsers(id, {roles: Roles.Administrator }).then(response => {
            this.setState({administrators : response.data.data});
        });

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
                                    

                                    {(Object.keys(this.state.errors).length >0 ) ? <Danger message={"There are error(s) in updating the community. Please check the form above."} /> : ''}

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
            </>
        );
    }
}

export default withRouter(CommunitiesUsers);