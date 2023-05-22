import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Danger from "../../component/alerts/Danger";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import SocialMedia from "../../component/section/socialmedia";
import ImageUploading from 'react-images-uploading';
import withRouter from "../../../../util/withRouter";
import Requests from "../../../../util/Requests";
import Navigate from "../../../../util/Navigate";
import Data from "../../../../util/Data";
import Textarea from "../../component/form/textarea";
import Loading from "../../component/alerts/Loading";



const title = "Complete Your Profile";

class RegisterStep2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bio: '',
            user : {},
            errors: [],
            images: [],
            isLoading : false,
            isLoadingImage : false,
        };

    }

    componentDidMount() {

        Requests.userMe().then(response => {

            this.setState({
                user: response.data,
            });

        }).catch(error => {
            console.log(error);
        });
    }

    updateAccount(event) {
        event.preventDefault();

        let data = {
            bio: this.state.bio
        };

        this.setState({isLoading : true});

        Requests.updateAccount(data).then(response => {
            
            this.setState({isLoading : false});

            this.props.router.navigate(Navigate.streamsPage());
        }).catch(error => {

            this.setState({isLoading : false});

            this.props.router.navigate(Navigate.streamsPage());
            /*let jsonErrors = Response.parseJSONFromError(error);

            if (jsonErrors) {
                this.setState({ errors: jsonErrors });

                setTimeout(() => {
                    this.setState({ errors: {} });
                }, timeouts.error_message_timeout)
            }*/
        })
    }

    imageOnChange = (imageList, addUpdateIndex) => {

        this.setState({ images: imageList });

    };

    saveImage = (event, index) => {

        event.preventDefault();

        this.setState({isLoadingImage : true});

        let image = this.state.images[index];

        const blob = Data.dataURItoBlob(image.data_url);

        const formData = new FormData();

        formData.append('image', blob, 'screenshot.png');

        Requests.userUploadAvatar(formData).then(response => {
            this.setState({ user: response.data, images: [], isLoadingImage : false });
        }).catch(error => {
            this.setState({isLoadingImage : false});
            console.log(error)
        });

    }

    render() {
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Update Profile'} curPage={'Profile'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <hr />
                            <form className="account-form">

                                <img src={(this.state.user.avatar) ? this.state.user.avatar : "/assets/images/blog/author/01.jpg"} />

                                <ImageUploading
                                    multiple
                                    value={this.state.images}
                                    onChange={this.imageOnChange}
                                    maxNumber={1}
                                    dataURLKey="data_url"
                                >
                                    {({
                                        imageList,
                                        onImageUpload,
                                        onImageRemoveAll,
                                        onImageUpdate,
                                        onImageRemove,
                                        isDragging,
                                        dragProps,
                                    }) => (
                                        // write your building UI
                                        <div className="upload__image-wrapper">
                                            <button
                                                type="button"
                                                className="btn btn-warning"
                                                style={isDragging ? { color: 'red' } : undefined}
                                                onClick={onImageUpload}
                                                {...dragProps}
                                            >
                                                Upload New Image
                                            </button>
                                            &nbsp;

                                            {imageList.map((image, index) => (
                                                <div key={index} className="image-item">
                                                    <img src={image['data_url']} alt="" width="400" />
                                                    <div className="image-item__btn-wrapper">
                                                        <button type="button" className="btn btn-success" onClick={(e) => this.saveImage(e, index)}>{this.state.isLoadingImage ? <Loading /> : ''} Save Image</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </ImageUploading>

                                <h3 className="title">Bio</h3>

                                <div className="row">
                                    <div className="col-12">

                                        <div className="form-group">
                                            <Textarea name="description" onChange={(e) => { this.setState({ bio: e.target.value }); }} placeholder="Enter your bio that describes you." >{this.state.bio}</Textarea>
                                            {this.state.errors && this.state.errors.bio && this.state.errors.bio.map(function (name, index) {
                                                return <Danger message={name} key={index} />;
                                            })}
                                        </div>

                                    </div>

                                </div>


                                {this.state.errors && this.state.errors.map(function (name, index) {
                                    return <Danger message={name} key={index} />;
                                })}
                                <div className="form-group">
                                    <button type="button" className="d-block default-button" onClick={(e => { this.updateAccount(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Start Gaming!</span></button>
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

export default withRouter(RegisterStep2);