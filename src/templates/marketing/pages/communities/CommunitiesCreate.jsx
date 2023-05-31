import Glitch from 'glitch-javascript-sdk';
import { Component, Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import PageHeader from '../../component/layout/pageheader';
import CommunityFormBasic from '../../component/section/communities/form_community_basic';
import Loading from '../../component/alerts/Loading';
import timeouts from '../../../../constants/timeouts';
import Danger from '../../component/alerts/Danger';
import Navigate from '../../../../util/Navigate';
import withRouter from '../../../../util/withRouter';

class CommunitiesCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data : {},
            templates: [],
            errors : {},
        };

    }

    componentDidMount() {

        Glitch.api.Templates.list().then(response => {

            this.setState({templates : response.data.data});

        }).catch(error => {

        });

    }

    createCommunity(event) {

        event.preventDefault();

        let data = this.state.data;

        this.setState({ isLoading: true });
        
        Glitch.api.Communities.create(data).then(response => {

            this.setState({ isLoading: false });

            this.props.router.navigate(Navigate.communitiesManagePage(response.data.data.id));

        }).catch(error => {

            this.setState({ isLoading: false });

            let jsonErrors = error?.response?.data;

            if (jsonErrors) {

                console.log(jsonErrors);
                this.setState({ errors: jsonErrors });

                setTimeout(() => {
                    this.setState({ errors: {} });
                }, timeouts.error_message_timeout)
            }
        });
        
    }

    render() {
        return (
            <>
                <Fragment>
                    <Header />
                    <PageHeader title={'Creamte Community'} curPage={'Communities   '} />
                    <div className=" padding-top padding-bottom">
                        <div className=" container">
                            <div className="stream-wrapper">
                                <h3 className="title">Create A Community</h3>
                                <form className="text-left" style={{ textAlign: "left" }}>
                                    <CommunityFormBasic
                                        nameValue={this.state.data.name}
                                        nameOnChange={(e) => { this.setState({ data: { ...this.state.data, name : e.target.value } }); }}
                                        descriptionValue={this.state.data.description}
                                        descriptionOnChange={(e) => { this.setState({ data: { ...this.state.data, description : e.target.value } }); }}
                                        subdomainValue={this.state.data.subdomain}
                                        subdomainOnChange={(e) => { this.setState({ data: { ...this.state.data, subdomain : e.target.value } }); }}
                                        templateValue={this.state.data.template_id}
                                        templateOnChange={(e) => { this.setState({ data: { ...this.state.data, template_id : e.target.value } }); }}
                                        templates={this.state.templates}
                                        errors = {this.state.errors}
                                    />

                                    {(Object.keys(this.state.errors).length >0 ) ? <Danger message={"There are error(s) in creating the community. Please check the form above."} /> : ''}

                                    <div className="form-group">
                                        <button className="d-block default-button" onClick={(e => { this.createCommunity(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Create Community</span></button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </Fragment>
            </>
        );
    }
}

export default withRouter(CommunitiesCreate);