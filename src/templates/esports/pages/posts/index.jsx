import { Component, Fragment } from "react";
import Requests from "../../../../util/Requests";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import VideoSection from "../../component/section/video";

import Glitch from 'glitch-javascript-sdk';
import Navigate from "../../../../util/Navigate";
import { Link } from "react-router-dom";
import PostItem from "../../component/section/posts/detail_post_item";
import SearchBar from "../../component/sidebar/search";
import RecentPost from "../../component/sidebar/recentpost";
import CategorieTwo from "../../component/sidebar/categorietwo";
import Archive from "../../component/sidebar/archive";
import Tags from "../../component/sidebar/tags";

class PostsListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: null,
            errors: {},

        };
    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Glitch.api.Posts.list().then(response => {

            if(response.data.data && response.data.data.length > 0) {
                let posts = response.data.data.map(function (post, index) {
                    return <div className="mt-3"><PostItem post={post} /></div>;
                })

                this.setState({ posts: posts });
            }

        }).catch(error => {
            console.log(error);
        })

    }

    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Community Posts'} curPage={'Posts'} />
                <div className="container pt-5">
                    <Link className="default-button reverse-effect" to={Navigate.postsCreatePage()}><span>Create {Glitch.util.LabelManager.getPostLabel(true, true)}</span> </Link>
                </div>
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row justify-content-center pb-15">
                            <div className="col-lg-8 col-12 pe-5">
                                {(this.state.posts) ?
                                    <>
                                        {this.state.posts}
                                    </> :
                                    <section className="fore-zero pt-5 padding-bottom">
                                        <div className="container">
                                            <div className="section-wrapper">
                                                <div className="zero-item">

                                                    <div className="zero-content">
                                                        <h2>No {Glitch.util.LabelManager.getPostLabel(true, true)} Have Been Created</h2>
                                                        <p>Be a leader and create the first {Glitch.util.LabelManager.getPostLabel(false, true)}!</p>
                                                        <Link className="default-button reverse-effect" to={Navigate.postsCreatePage()}><span>Create {Glitch.util.LabelManager.getPostLabel(false, true)} <i className="icofont-double-right"></i></span> </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                }
                            </div>
                            <div className="col-lg-4 col-md-7 col-12">
                                <aside className="ps-lg-4">
                                    <SearchBar />
                                    <RecentPost />
                                    <CategorieTwo />
                                    <Archive />
                                    <Tags />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(PostsListPage);