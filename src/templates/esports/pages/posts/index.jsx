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
            posts: [],
            page: 1,
            hasMore: true,
            isLoading: false,
            errors: {},

        };
    }

    componentDidMount() {
        this.loadPosts();
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }


    loadPosts = () => {
        if (!this.state.hasMore || this.state.isLoading) return;

        this.setState({ isLoading: true });

        Glitch.api.Posts.list({ page: this.state.page })
            .then((response) => {
                if (response.data.data && response.data.data.length > 0) {
                    const newPosts = response.data.data.map((post, index) => (
                        <div className="mt-3" key={post.id}>
                            <PostItem post={post} />
                        </div>
                    ));

                    this.setState((prevState) => ({
                        posts: [...prevState.posts, ...newPosts],
                        page: prevState.page + 1,
                        hasMore: response.data.meta.current_page < response.data.meta.last_page,
                        isLoading: false,
                    }));
                } else {
                    this.setState({
                        hasMore: false,
                        isLoading: false,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                this.setState({ isLoading: false });
            });
    };

    handleScroll = () => {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
            this.state.hasMore &&
            !this.state.isLoading
        ) {
            this.loadPosts();
        }
    };

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
                                        {this.state.isLoading && <div>Loading...</div>}
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