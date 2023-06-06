import { Component, Fragment } from "react";
import Requests from "../../../../util/Requests";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import VideoSection from "../../component/section/video";

import Glitch from 'glitch-javascript-sdk';


class StreamsPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            events : '',
            errors : {},
            
        };
    }

    componentDidMount() {

        Glitch.api.Events.list().then(response => {
            this.setState({events : <VideoSection streams={response.data.data} ></VideoSection>});
        }).catch(error => {
            console.log(error);
        })

        /*
        Requests.eventsList().then(response => {
            this.setState({events : <VideoSection streams={response.data} ></VideoSection>});
        }).catch(error => {
            console.log(error);
        })*/
    }

    render() { 

        return(
            <Fragment>
                <Header />
                <PageHeader title={'The Live Streams' } curPage={'Streams'} />
                
                {this.state.events}
                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(StreamsPage);