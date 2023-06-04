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


class PostsListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: '',
            errors: {},

        };
    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Glitch.api.Posts.list().then(response => {

            let posts = response.data.data.map(function (post, index) {
                return <div className="mt-3"><PostItem post={post} /></div>;
            })

            this.setState({ posts: posts });

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
                    <Link className="default-button reverse-effect" to={Navigate.postsCreatePage()}><span>Create Post</span> </Link>
                </div>
                {(this.state.posts) ?
                    <div className="container mt-3">
                        {this.state.posts}
                    </div> :
                    <section className="fore-zero padding-top padding-bottom">
                        <div className="container">
                            <div className="section-wrapper">
                                <div className="zero-item">
                                    <div className="zero-thumb">

                                    </div>
                                    <div className="zero-content">
                                        <h2>No Posts Have Been Created</h2>
                                        <p>Be a leader and create the first post!</p>
                                        <Link className="default-button reverse-effect" to={Navigate.postsCreatePage()}><span>Create Post <i className="icofont-double-right"></i></span> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(PostsListPage);