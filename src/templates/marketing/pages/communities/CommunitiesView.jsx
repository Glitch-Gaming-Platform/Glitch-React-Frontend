import Glitch from 'glitch-javascript-sdk';
import { Component, Fragment } from 'react';
import Header from '../../component/layout/header';
import Footer from '../../component/layout/footer';
import { Link } from 'react-router-dom';
import Navigate from '../../../../util/Navigate';
import PageHeader from '../../component/layout/pageheader';
import withRouter from '../../../../util/withRouter';

class CommunitiesView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            community: {},
        };
    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Glitch.api.Communities.view(id).then(response => {
            this.setState({ community: response.data.data });
        })

    }

    render() {
        return (
            <>
                <Fragment>
                    <Header />
                    <PageHeader title={this.state.community.name +' Community'} curPage={'Communities'} />
                    <div className=" padding-top padding-bottom">
                        <div className=" container">
                            <div className="stream-wrapper" style={{textAlign: "left"}}>
                                <h4>Name:</h4>
                                <p>{this.state.community.name}</p>

                                <h4>Description:</h4>
                                <p>{this.state.community.description}</p>

                                <h4>Subdomain:</h4>
                                <p>{this.state.community.subdomain}{process.env.REACT_APP_SITE_DOMAIN}</p>
                            </div>
                        </div>
                    </div>


                    <Footer />
                </Fragment>
            </>
        );
    }
}

export default withRouter(CommunitiesView);