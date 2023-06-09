import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import Navigate from "../../../../util/Navigate";
import withRouter from "../../../../util/withRouter";
import Danger from "../../component/alerts/Danger";
import Loading from "../../component/alerts/Loading";
import Input from "../../component/form/input";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Glitch from 'glitch-javascript-sdk';
import PostFormButtons from "../../component/section/posts/form_buttons";
import ImageUploadAndCrop from "../../component/form/image_crop_uploader";
import VideoUploader from "../../component/form/video";
import Wysiwyg from "../../component/form/wysiwyg";
import Alerts from "../../../../util/Alerts";


class PostUpdatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            blob: null,
            events: [],
            errors: {},
            isLoading: false,
        };

        if (!Glitch.util.Session.isLoggedIn()) {
            window.location = Navigate.authLogin();
        }
    }

    componentDidMount() {

        if (Glitch.util.Session.isLoggedIn()) {

            Glitch.api.Users.me().then(response => {

                let userData = response.data.data;

                this.loadPostData(userData);

            }).catch(error => {
                console.log(error);
            });

        } else {
            this.loadPostData();
        }
    }

    loadPostData(user) {

        let id = this.props.router.params.id;

        Glitch.api.Posts.view(id).then(response => {

            this.setState({ data : response.data.data });

        }).catch(error => {
            console.log(error);
        });

    }

    update(e) {

        e.preventDefault();

        let id = this.props.router.params.id;

        let data = {
            title : this.state.data.title,
            content : this.state.data.content,
        };

        Glitch.api.Posts.update(id, data).then(response => {

            this.props.router.navigate(Navigate.postsViewPage(id));

        }).catch(error => {
            console.log(error);
        });


    }


    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Update ' + Glitch.util.LabelManager.getPostLabel(false, true)} curPage={'Stream'} />
                <div className=" padding-top padding-bottom">
                    <div className="container pl-2">
                        <div className="stream-wrapper">
                            <h3 className="title">Update {Glitch.util.LabelManager.getPostLabel(false, false)}</h3>

                            <form className="mt-5">


                                <div className="form-group" style={{ textAlign: "left" }}>
                                    <label>Title</label>
                                    <Input type="text" name="title" value={this.state.data.title} onChange={(e) => { this.setState((prevState) => ({ data: { ...prevState.data, title: e.target.value }, })); }} placeholder="Give the post a title" />
                                    {this.state.errors && this.state.errors.title && this.state.errors.title.map(function (name, index) {
                                        return <Danger message={name} key={index} />;
                                    })}
                                </div>

                                <div className="form-group" style={{ textAlign: "left" }}>
                                    <label>Content</label>
                                    <Wysiwyg name="content" onChange={(e) => { this.setState((prevState) => ({ data: { ...prevState.data, content: e }, })); }}>{this.state.data.content}</Wysiwyg>
                                    {this.state.errors && this.state.errors.content && this.state.errors.content.map(function (name, index) {
                                        return <Danger message={name} key={index} />;
                                    })}
                                </div>



                                {this.state.errors && this.state.errors.file && this.state.errors.file.map(function (name, index) {
                                    return <Danger message={name} key={index} />;
                                })}

                
                                <div className="form-group mt-5">
                                    <button type="button" className="d-block default-button" onClick={(e => { this.update(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Update {Glitch.util.LabelManager.getPostLabel(false, true)}</span></button>
                                </div>
                               
                            </form>

                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(PostUpdatePage);