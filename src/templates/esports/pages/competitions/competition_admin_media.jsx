import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import Data from "../../../../util/Data";
import Navigate from "../../../../util/Navigate";
import withRouter from "../../../../util/withRouter";
import Danger from "../../component/alerts/Danger";
import Loading from "../../component/alerts/Loading";
import Input from "../../component/form/input";
import Textarea from "../../component/form/textarea";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import CompetitionFormBasicInfo from "../../component/section/competitions/form_competition_basic";
import CompetitionFormMatchDetails from "../../component/section/competitions/form_competition_match";
import CompetitionFormMedia from "../../component/section/competitions/form_competition_media";
import CompetitionFormSignupDetails from "../../component/section/competitions/form_competition_signup";
import CompetitionFormSocial from "../../component/section/competitions/form_competition_social";
import SidebarManageMenu from "../../component/section/competitions/menu_side_manage";
import Glitch from 'glitch-javascript-sdk';


class CompetitionsMediaPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            tournament: {},
            errors: {},
            isLoadingMainImage: false,
            mainImages: [],
            isLoadingBannerImage: false,
            bannerImages: [],
        };

        if (!Glitch.util.Session.isLoggedIn()) {
            window.location = Navigate.authLogin();
        }
    }

    componentDidMount() {
        this.loadTournament();
    }

    loadTournament() {

        let id = this.props.router.params.id;

        Glitch.api.Competitions.view(id).then(response => {
            this.setState({ tournament: response.data.data });
        }).catch(error => {

        });
    }


    mainImageOnChange = (imageList, addUpdateIndex) => {
        this.setState({ mainImages: imageList });
    };

    saveMainImage = (index) => {

        let image = this.state.mainImages[0];

        this.setState({ isLoadingMainImage: true });

        const blob = Data.dataURItoBlob(image.data_url);

        let id = this.props.router.params.id;

        Glitch.api.Competitions.uploadCompetitionMainImageBlob(id, blob).then(response => {
            this.setState({ tournament: response.data.data, mainImages: [], isLoadingMainImage: false });
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

        const blob = Data.dataURItoBlob(image.data_url);

        let id = this.props.router.params.id;

        Glitch.api.Competitions.uploadCompetitionsBannerImageBlob(id, blob).then(response => {
            this.setState({ tournament: response.data.data, bannerImages: [], isLoadingBannerImage: false });
        }).catch(error => {

            this.setState({ isLoadingBannerImage: false });
        });

    }

    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Update Tournamnet Media'} curPage={'Compete'} />

                <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-8 col-12 pe-5">
                                    <h3 className="title">Update {Glitch.util.LabelManager.getCompetitionLabel(false, true)} Media</h3>
                                    <hr />
                                    <div className="text-left" style={{ textAlign: "left" }}>

                                        {this.state.tournament && this.state.tournament.main_image ?
                                            <>
                                                <h5>Current Main Image</h5>
                                                <img src={this.state.tournament.main_image} className="img-fluid" />
                                                <hr/>
                                            </>
                                            : ''}

                                        {this.state.tournament && this.state.tournament.banner_image ?
                                            <>
                                                <h5>Current Banner Image</h5>
                                                <img src={this.state.tournament.banner_image} className="img-fluid" />
                                                <hr />
                                            </>
                                            : ''}

                                        <CompetitionFormMedia
                                            mainImageValue={this.state.mainImages}
                                            isLoadingMainImage={this.isLoadingMainImage}
                                            mainImageOnChange={this.mainImageOnChange}
                                            saveMainImage={this.saveMainImage}
                                            bannerImageValue={this.state.bannerImages}
                                            isLoadingBannerImage={this.isLoadingBannerImage}
                                            bannerImageOnChange={this.bannerImageOnChange}
                                            saveBannerImage={this.saveBannerImage}
                                            errors={this.state.errors}
                                        />

                                        <hr />


                                        {(Object.keys(this.state.errors).length > 0) ? <Danger message={"There are errors in your update. Please check the form above."} /> : ''}

                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-7 col-12">
                                    <aside className="ps-lg-4">
                                        <SidebarManageMenu competition_id={this.state.tournament.id} />

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

export default withRouter(CompetitionsMediaPage);