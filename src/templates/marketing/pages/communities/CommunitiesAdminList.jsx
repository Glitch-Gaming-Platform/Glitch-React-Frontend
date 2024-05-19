import Glitch from 'glitch-javascript-sdk';
import { Component, Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import { Link } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';
import PublisherHeader from '../../component/layout/publisherheader';

class CommunitiesAdminList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            communities: [],
        };

    }

    componentDidMount() {

        Glitch.api.Communities.list({ roles: [Glitch.constants.Roles.ADMINISTRATOR, Glitch.constants.Roles.SUPER_ADMINISTRATOR, Glitch.constants.Roles.MODERATOR] }).then((response) => {

            this.setState({communities : response.data.data });

        }).catch(error => {

        });
    }

    render() {
        return (
            <>
                <Fragment>
                    <PublisherHeader position={"relative"}  />
                    <section className="pageheader-section-min">
                        <div className="container">
                            <div className="section-wrapper text-center text-uppercase">
                                <div className="pageheader-thumb mb-4">
                                </div>
                                <h2 className="pageheader-title">My Admin Communities</h2>

                                <p className="lead">See the communities that you are admin or moderator of. Communities are organizations used to manage campaigns.</p>

                            </div>
                        </div>
                    </section>

                    <div className="container mt-5" >
                        <div className="section-wrapper">
                            <Link className={"btn btn-success"} to={Navigate.communitiesCreatePage()} >Create A Community</Link>
                        </div>
                    </div>
                    <hr />

                    <br />

                    {(this.state.communities) ? this.state.communities.map(function (community, index) {
                        return <div className="container padding-bottom" key={index}>
                            <div className="section-wrapper">
                                <div className="row g-4 justify-content-center"></div>
                                <div className="col-12">
                                    <div className="blog-item">
                                        <div className="blog-inner d-flex flex-wrap align-items-center">
                                            <div className="blog-thumb w-xl-50 w-100">

                                                <img src={(community.banner_image) ? community.banner_image : `/assets/images/cover/cover_${Math.floor(Math.random() * 27) + 1}.jpeg`} alt={`Earn Donations`} className="w-100" />


                                            </div>
                                            <div className="blog-content p-4 w-xl-50 w-100">
                                                <h3><Link to={Navigate.communitiesManagePage(community.id)}>{community.name}</Link></h3>
                                                <br />
                                                <p>{community.description}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    }) : ''


                    }

                    <Footer />
                </Fragment>
            </>
        );
    }
}

export default CommunitiesAdminList;