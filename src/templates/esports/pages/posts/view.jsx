import { Component, Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Author from "../../component/section/author";
import CommentForm from "../../component/form/comment";
import Comments from "../../component/section/comments";
import Archive from "../../component/sidebar/archive";
import CategorieTwo from "../../component/sidebar/categorietwo";
import Instagram from "../../component/sidebar/instagram";
import RecentPost from "../../component/sidebar/recentpost";
import SearchBar from "../../component/sidebar/search";
import Tags from "../../component/sidebar/tags";
import Glitch from 'glitch-javascript-sdk';
import withRouter from "../../../../util/withRouter";
import Navigate from "../../../../util/Navigate";
import Data from "../../../../util/Data";
import Timestamp from "../../component/element/time";
import { Link } from "react-router-dom";


class PostViewPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: [],
            comment_text: '',
            errors: {},

        };
    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Glitch.api.Posts.view(id).then(response => {
            this.setState({ post: response.data.data, comments: response.data.data.children });
        }).catch(error => {
            console.log(error);
        })
    }

    submitComment(e) {

        let id = this.props.router.params.id;

        let data = {
            parent_id: id,
            content: this.state.comment_text,
            title: 'Re: ' + this.state.post.title,
            type: Glitch.constants.PostTypes.TEXT
        };

        Glitch.api.Posts.create(data).then(response => {
            this.setState(prevState => ({
                comments: [response.data.data, ...prevState.comments],
                comment_text: '',
            }));
        }).catch(error => {

        });

    }


    render() {
        return (
            <Fragment>
                <Header />
                <PageHeader title={this.state.post.title} curPage={'Read Post'} />
                <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-8 col-12 pe-5">
                                    <article>
                                        <div className="post-item-2">
                                            <div className="post-inner">
                                                {(this.state.post.media) ?
                                                    <div className="post-thumb">
                                                        {this.state.post.media.map(function (item, index) {
                                                            if (item.mime_type.includes('video')) {
                                                                return (
                                                                    <video controls style={{ maxWidth: '100%', height: 'auto' }} key={index}>
                                                                        <source src={item.file_url} type="video/mp4" />
                                                                    </video>
                                                                );
                                                            } else if (item.mime_type.includes('image')) {
                                                                return <img src={item.file_url} key={index} />;
                                                            } else {
                                                                return null;
                                                            }
                                                        })}
                                                    </div>
                                                    : <></>}

                                                <div className="post-content">
                                                    <h2>{this.state.post.title} </h2>
                                                    <ul className="lab-ul post-date">
                                                        <li><span><i className="icofont-ui-calendar"></i> <Timestamp timestamp={this.state.post.created_at}></Timestamp></span></li>
                                                        <li><span><i className="icofont-user"></i><Link to={Navigate.usersProfilePage(this.state?.post?.user?.id)}>{this.state?.post?.user?.username}</Link></span></li>
                                                        <li><span><i className="icofont-speech-comments"></i><a href="#comments">{Data.countCommentChildren(this.state.post)} Comments</a></span></li>
                                                    </ul>

                                                    {this.state.post.content}

                                                    {this.state.post.url && <Link target="_blank" to={this.state.post.url}>{this.state.post.url}</Link>}

                                                    <br /><br />

                                                    <div className="tags-area">
                                                        <ul className="tags lab-ul justify-content-center">
                                                            <li>
                                                                <a href="#">Charity</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="active">NoneProfit</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Admission</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Exams</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="share lab-ul justify-content-center">
                                                            <li>
                                                                <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="dribble"><i className="icofont-dribbble"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="google"><i className="icofont-google-plus"></i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <CommentForm
                                            commentOnChange={(e) => { this.setState({ comment_text: e.target.value }) }}
                                            commentValue={this.state.comment_text} commentSubmit={(e) => { this.submitComment(e) }}
                                        />

                                        <Comments
                                            comments={this.state.comments}
                                            title={"Comments"}
                                        />

                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-7 col-12">
                                    <aside className="ps-lg-4">
                                        <SearchBar />
                                        <RecentPost />
                                        <CategorieTwo />
                                        <Instagram />
                                        <Archive />
                                        <Tags />
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

export default withRouter(PostViewPage);