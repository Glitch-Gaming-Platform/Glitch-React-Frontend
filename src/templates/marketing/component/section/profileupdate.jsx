import { Component } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import ImageUploading from 'react-images-uploading';
import Requests from "../../../../util/Requests";
import Data from "../../../../util/Data";
import Loading from "../alerts/Loading";
import Danger from "../alerts/Danger";
import Textarea from "../form/textarea";
import Response from "../../../../util/Response";
import Alerts from "../../../../util/Alerts";
import timeouts from "../../../../constants/timeouts";


const Name = "Rajib Ahmed";
const desc = "Competently conceptualize alternative synergy and technically and niche markets. Efficiently impact technically sound outsourcing rath tnclicks-and-mortar best practices.";



class ProfileUpdateHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first_name: props.user.first_name,
            last_name: props.user.last_name,
            email: props.user.email,
            username: props.user.username,
            user: {},
            facebook_page: props.user.facebook_page,
            instagram_page: props.user.instagram_page,
            paetron_page: props.user.paetron_page,
            snapchat_page: props.user.snapchat_page,
            tiktok_page: props.user.tiktok_page,
            twitch_page: props.user.twitch_page,
            twitter_page: props.user.twitch_page,
            youtube_page: props.user.youtube_page,
            errors: {},
            images: [],
            isLoading : false,
            isLoadingImage : false,
        };

    }

    componentDidMount() {

        this.setState({
            user: this.props.user
        });
    }

    updateAccount(event) {
        event.preventDefault();

        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            username: this.state.username,
            facebook_page: this.state.facebook_page,
            instagram_page: this.state.instagram_page,
            paetron_page: this.state.paetron_page,
            snapchat_page: this.state.snapchat_page,
            tiktok_page: this.state.tiktok_page,
            twitch_page: this.state.twitch_page,
            twitter_page: this.state.twitter_page,
            youtube_page: this.state.youtube_page,
            bio: this.state.bio

        };

        this.setState({isLoading : true});

        Requests.updateAccount(data).then(response => {
           
            this.setState({isLoading : false});

            Alerts.display("Success", "Your profile has been updated", 'success');


        }).catch(error => {

            this.setState({isLoading : false});

            let jsonErrors = Response.parseJSONFromError(error);

            if (jsonErrors) {
                this.setState({ errors: jsonErrors });

                setTimeout(() => {
                    this.setState({ errors: {} });
                }, timeouts.error_message_timeout)
            }
        })
    }

    imageOnChange = (imageList, addUpdateIndex) => {

        this.setState({ images: imageList });

    };

    saveImage = (index) => {

        let image = this.state.images[index];

        this.setState({isLoadingImage : true});

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
            <div className="product-details">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="product-thumb">
                            <div className="swiper-container pro-single-top">
                                <div className="single-thumb">
                                    <img src={(this.state.user.avatar) ? this.state.user.avatar : "https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png"} />
                                </div>

                            </div>
                        </div>

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
                                                <button className="btn btn-success" onClick={() => this.saveImage(index)}>{this.state.isLoadingImage ? <Loading /> : ''} Save Image</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </ImageUploading>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="post-content">
                            <h4>{this.state.user.first_name} {this.state.user.last_name}</h4>

                            <div className="no-wrapper">
                                <h3 className="title">Update Your Account</h3>
                                <div className="account-form">

                                    <div className="row">

                                        <div className="col-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="item01"
                                                    value={this.state.first_name}
                                                    onChange={(e) => { this.setState({ first_name: e.target.value }); }}
                                                    placeholder="First Name *"
                                                />
                                                {this.state.errors && this.state.errors.first_name && this.state.errors.first_name.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="item02"
                                                    value={this.state.last_name}
                                                    onChange={(e) => { this.setState({ last_name: e.target.value }); }}
                                                    placeholder="Last Name *"
                                                />
                                                {this.state.errors && this.state.errors.last_name && this.state.errors.last_name.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="item02"
                                                    value={this.state.username}
                                                    onChange={(e) => { this.setState({ username: e.target.value }); }}
                                                    placeholder="Username *"
                                                />
                                                {this.state.errors && this.state.errors.username && this.state.errors.username.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="item03"
                                                    value={this.state.email}
                                                    onChange={(e) => { this.setState({ email: e.target.value }); }}
                                                    placeholder="Your email *"
                                                />
                                                {this.state.errors && this.state.errors.email && this.state.errors.email.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>

                                        </div>

                                    </div>

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


                                    <h3 className="title">Social Pages</h3>

                                    <div className="row">

                                        <div className="col-6">

                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="facebook_page"
                                                    id="item04"
                                                    value={this.state.facebook_page}
                                                    onChange={(e) => { this.setState({ facebook_page: e.target.value }); }}
                                                    placeholder="Your Facebook handle *"
                                                />
                                                {this.state.errors && this.state.errors.facebook_page && this.state.errors.facebook_page.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="instagram_page"
                                                    id="item05"
                                                    value={this.state.instagram_page}
                                                    onChange={(e) => { this.setState({ instagram_page: e.target.value }); }}
                                                    placeholder="Your Instagram handle *"
                                                />
                                                {this.state.errors && this.state.errors.instagram_page && this.state.errors.instagram_page.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="paetron_page"
                                                    id="item06"
                                                    value={this.state.paetron_page}
                                                    onChange={(e) => { this.setState({ paetron_page: e.target.value }); }}
                                                    placeholder="Your Paetron handle *"
                                                />
                                                {this.state.errors && this.state.errors.paetron_page && this.state.errors.paetron_page.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="snapchat_page"
                                                    id="item07"
                                                    value={this.state.snapchat_page}
                                                    onChange={(e) => { this.setState({ snapchat_page: e.target.value }); }}
                                                    placeholder="Your Snapchat handle *"
                                                />
                                                {this.state.errors && this.state.errors.snapchat_page && this.state.errors.snapchat_page.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>
                                        </div>


                                    </div>

                                    <div className="row">

                                        <div className="col-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="tiktok_page"
                                                    id="item08"
                                                    value={this.state.tiktok_page}
                                                    onChange={(e) => { this.setState({ tiktok_page: e.target.value }); }}
                                                    placeholder="Your Tik Tok handle *"
                                                />
                                                {this.state.errors && this.state.errors.tiktok_page && this.state.errors.tiktok_page.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="twitch_page"
                                                    id="item09"
                                                    value={this.state.twitch_page}
                                                    onChange={(e) => { this.setState({ twitch_page: e.target.value }); }}
                                                    placeholder="Your Twitch handle *"
                                                />
                                                {this.state.errors && this.state.errors.twitch_page && this.state.errors.twitch_page.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>
                                        </div>
                                        <div className="col-6">

                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="twitter_page"
                                                    id="item10"
                                                    value={this.state.twitter_page}
                                                    onChange={(e) => { this.setState({ twitter_page: e.target.value }); }}
                                                    placeholder="Your Twitter handle *"
                                                />
                                                {this.state.errors && this.state.errors.twitter_page && this.state.errors.twitter_page.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="youtube_page"
                                                    id="item12"
                                                    value={this.state.youtube_page}
                                                    onChange={(e) => { this.setState({ youtube_page: e.target.value }); }}
                                                    placeholder="Your Youtube handle *"
                                                />
                                                {this.state.errors && this.state.errors.youtube_page && this.state.errors.youtube_page.map(function (name, index) {
                                                    return <Danger message={name} key={index} />;
                                                })}
                                            </div>
                                        </div>

                                    </div>





                                </div>

                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => { this.updateAccount(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Update Account</span></button>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileUpdateHeader;