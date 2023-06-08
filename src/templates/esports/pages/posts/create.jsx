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


class PostCreatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                title: '',
                content : '',
                type: '',
            },
            blob: null,
            events: [],
            errors: {},
            isLoading: false,
        };

        if (!Glitch.util.Session.isLoggedIn()) {
            window.location = Navigate.authLogin();
        }
    }

    create(event) {

        event.preventDefault();

        let data = this.state.data;

        this.setState({ isLoading: true });

        if (this.state.data.type == Glitch.constants.PostTypes.TEXT || this.state.data.type == Glitch.constants.PostTypes.LINK) {

            Glitch.api.Posts.create(data).then(response => {

                this.setState({ isLoading: false });

                this.props.router.navigate(Navigate.postsViewPage(response.data.data.id));
            }).catch(error => {

                this.setState({ isLoading: false });

                if (error.response && error.response.data) {
                    this.setState({ errors: error.response.data });

                    setTimeout(() => {
                        this.setState({ errors: {} });
                    }, timeouts.error_message_timeout)
                }
            });
        } else if (this.state.data.type == Glitch.constants.PostTypes.IMAGE || this.state.data.type == Glitch.constants.PostTypes.VIDEO) {

            Glitch.api.Posts.createWithBlob(this.state.blob, data).then(response => {

                this.setState({ isLoading: false });

                this.props.router.navigate(Navigate.postsViewPage(response.data.data.id));
            }).catch(error => {

                this.setState({ isLoading: false });

                if (error.response && error.response.data) {
                    this.setState({ errors: error.response.data });

                    setTimeout(() => {
                        this.setState({ errors: {} });
                    }, timeouts.error_message_timeout)
                }
            });
        }
    }

    componentDidMount() {

    }

    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Create Stream'} curPage={'Stream'} />
                <div className=" padding-top padding-bottom">
                    <div className="container pl-2">
                        <div className="stream-wrapper">
                            <h3 className="title">Create A {Glitch.util.LabelManager.getPostLabel(false, false)}</h3>


                            <PostFormButtons onButtonClicked={(type) => { this.setState((prevState) => ({ data: { ...prevState.data, type: type }, })); }} />

                            <form className="mt-5">

                                {(this.state.data.type == Glitch.constants.PostTypes.TEXT || this.state.data.type == Glitch.constants.PostTypes.VIDEO || this.state.data.type == Glitch.constants.PostTypes.IMAGE || this.state.data.type == Glitch.constants.PostTypes.LINK) &&
                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <label>Title</label>
                                        <Input type="text" name="title" value={this.state.title} onChange={(e) => { this.setState((prevState) => ({ data: { ...prevState.data, title: e.target.value }, })); }} placeholder="Give the post a title" />
                                        {this.state.errors && this.state.errors.title && this.state.errors.title.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                }

                                {(this.state.data.type == Glitch.constants.PostTypes.LINK) &&
                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <label>Url</label>
                                        <Input type="text" name="url" value={this.state.url} onChange={(e) => { this.setState((prevState) => ({ data: { ...prevState.data, url: e.target.value }, })); }} placeholder="Enter a website to link too." />
                                        {this.state.errors && this.state.errors.url && this.state.errors.url.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                }

                                {this.state.data.type == Glitch.constants.PostTypes.IMAGE &&
                                    <div className="mt-4 mb-4" style={{ textAlign: "left" }}>
                                        <label>Upload Image</label>
                                        <ImageUploadAndCrop setCroppedBlob={(file) => { this.setState((prevState) => ({ blob: file })); }} />
                                    </div>
                                }

                                {this.state.data.type == Glitch.constants.PostTypes.VIDEO &&
                                    <div className="mt-4 mb-4" style={{ textAlign: "left" }}>
                                        <label>Upload Video</label>
                                        <VideoUploader setVideoBlob={(file) => { this.setState((prevState) => ({ blob: file })); }} />
                                    </div>
                                }

                                {(this.state.data.type == Glitch.constants.PostTypes.TEXT || this.state.data.type == Glitch.constants.PostTypes.VIDEO || this.state.data.type == Glitch.constants.PostTypes.IMAGE || this.state.data.type == Glitch.constants.PostTypes.VIDEO) &&
                                    <div className="form-group" style={{ textAlign: "left" }}>
                                        <label>Content</label>
                                        <Wysiwyg name="content" onChange={(e) => { this.setState((prevState) => ({ data: { ...prevState.data, content: e }, })); }}>{this.state.data.content}</Wysiwyg>
                                        {this.state.errors && this.state.errors.content && this.state.errors.content.map(function (name, index) {
                                            return <Danger message={name} key={index} />;
                                        })}
                                    </div>
                                }



                                {this.state.errors && this.state.errors.file && this.state.errors.file.map(function (name, index) {
                                    return <Danger message={name} key={index} />;
                                })}

                                {(this.state.data.type == Glitch.constants.PostTypes.TEXT || this.state.data.type == Glitch.constants.PostTypes.VIDEO || this.state.data.type == Glitch.constants.PostTypes.IMAGE || this.state.data.type == Glitch.constants.PostTypes.LINK) &&
                                    <div className="form-group mt-5">
                                        <button className="d-block default-button" onClick={(e => { this.create(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Create {Glitch.util.LabelManager.getPostLabel(false, true)}</span></button>
                                    </div>
                                }
                            </form>

                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(PostCreatePage);