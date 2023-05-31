import Glitch from 'glitch-javascript-sdk';

import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import SidebarManageMenu from "../../component/section/communities/menu_side_manage";
import CommunityFormMedia from '../../component/section/communities/form_community_media';
import Loading from '../../component/alerts/Loading';
import Danger from '../../component/alerts/Danger';





class CommunitiesMedia extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            community: {},
            errors: {},
            isLoading: false,
            isLoadingMainImage: false,
            logoImages: [],
            isLoadingBannerImage: false,
            bannerImages: [],
        };

    }

    componentDidMount() {
        this.loadCommunity();
    }

    loadCommunity() {

        let id = this.props.router.params.id;

        Glitch.api.Communities.view(id).then(response => {

            this.setState({ community: response.data.data });
            this.setState({ data: response.data.data });


        }).catch(error => {

        })
    }

    logoOnChange = (imageList, addUpdateIndex) => {
        this.setState({ logoImages: imageList });
    };

    saveLogo = (index) => {

        let image = this.state.logoImages[0];

        this.setState({ isLoadingMainImage: true });

        const blob = Glitch.util.Data.dataURItoBlob(image.data_url);

        //const formData = new FormData();

        //formData.append('image', blob, 'screenshot.png');

        let id = this.props.router.params.id;

        Glitch.api.Communities.uploadLogoBlob(id, blob).then(response => {
            this.setState({ community: response.data.data, logoImages: [], isLoadingMainImage: false });
        }).catch(error => {

            this.setState({ isLoadingMainImage: false });
        });

    }

    bannerImageOnChange = (imageList, addUpdateIndex) => {
        this.setState({ bannerImages: imageList });
    };

    saveBannerImage = (index) => {

        let image = this.state.bannerImages[0];

        this.setState({ isLoadingBannerImage: true });

        const blob = Glitch.util.Data.dataURItoBlob(image.data_url);

        //const formData = new FormData();

        //formData.append('image', blob, 'screenshot.png');

        let id = this.props.router.params.id;

        Glitch.api.Communities.uploadBannerImageBlob(id, blob).then(response => {
            this.setState({ community: response.data.data, bannerImages: [], isLoadingBannerImage: false });
        }).catch(error => {

            this.setState({ isLoadingBannerImage: false });
        });

    }

    render() {



        return (
            <Fragment>
                <Header />
                <PageHeader title={'Communities'} curPage={'Manage Community'} />

                <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-8 col-12 pe-5">


                                    {this.state.community && this.state.community.logo ?
                                        <>
                                            <h5>Current Logo</h5>
                                            <img src={this.state.community.logo} className="img-fluid" />
                                        </>
                                        : ''}

                                    {this.state.community && this.state.community.banner_image ?
                                        <>
                                            <h5>Current Banner</h5>
                                            <img src={this.state.community.banner_image} className="img-fluid" />
                                        </>
                                        : ''}


                                    <CommunityFormMedia
                                        logoValue={this.state.logoImages}
                                        isLoadingMainImage={this.isLoadingMainImage}
                                        logoOnChange={this.logoOnChange}
                                        saveLogo={this.saveLogo}
                                        bannerImageValue={this.state.bannerImages}
                                        isLoadingBannerImage={this.isLoadingBannerImage}
                                        bannerImageOnChange={this.bannerImageOnChange}
                                        saveBannerImage={this.saveBannerImage}
                                        errors={this.state.errors}
                                    />

                                    {(Object.keys(this.state.errors).length > 0) ? <Danger message={"There are error(s) in updating the community. Please check the form above."} /> : ''}

                                    <div className="form-group">
                                        <button className="d-block default-button" onClick={(e => { this.updateCommunity(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Update Community</span></button>
                                    </div>



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
        );
    }

}

export default withRouter(CommunitiesMedia);
