import { Component, Fragment } from "react";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import VideoSection from "../../component/section/video";

import Glitch from 'glitch-javascript-sdk';
import Navigate from "../../../../util/Navigate";

const subtitle = "our LATEST VIDEOS";
const title = "check our live streaming";

class StreamsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            currentPage: 1,
            loading: false,
            hasMore: true,
            error: null,
        };
    }

    componentDidMount() {
        this.loadEvents();
        this.setupIntersectionObserver();
    }

    loadEvents = () => {
        const { currentPage, events } = this.state;
        this.setState({ loading: true });

        Glitch.api.Events.list({ page: currentPage }).then(response => {
            const newEvents = response.data.data;
            this.setState(prevState => ({
                events: [...prevState.events, ...newEvents],
                currentPage: prevState.currentPage + 1,
                loading: false,
                hasMore: newEvents.length > 0,
                error: null,
            }));
        }).catch(error => {
            this.setState({ loading: false, error });
        });
    };

    setupIntersectionObserver = () => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        this.observer = new IntersectionObserver(this.handleIntersection, options);
        this.observer.observe(this.loadingRef);
    };

    handleIntersection = (entries) => {
        const { loading, hasMore } = this.state;
        const target = entries[0];

        if (target.isIntersecting && !loading && hasMore) {
            this.loadEvents();
        }
    };

    componentWillUnmount() {
        this.observer.disconnect();
    }

    render() {
        const { events, loading, error } = this.state;

        return (
            <Fragment>
                <Header />
<<<<<<< HEAD
                <PageHeader title={'The Live Streams' } curPage={'Streams'} />
                
                {this.state.events}
=======
                <PageHeader title={'The Live Streams'} curPage={'Streams'} />

                <div className="video-section padding-top padding-bottom bg-attachment" style={{ backgroundImage: "url(/assets/images/video/bg.jpg)" }}>
                    <div className="container">
                        <div className="section-header">
                            <p>{subtitle}</p>
                            <h2>{title}</h2>
                        </div>
                        <div className="section-wrapper">
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="video-top">
                                        <div className="row g-4 justify-content-center">
                                            {events.map((val, i) => (
                                                <div className="col-lg-4 col-12" key={i}>
                                                    <div className="video-item">
                                                        <div className="video-inner position-relative">
                                                            <div className="video-thumb position-relative video-overlay">
                                                                <img src={(val.image_main) ? val.image_main : "/assets/images/cta/02.png"} alt={`${val.imgAlt}`} className="w-100" />
                                                                <div className="video-icon">
                                                                    <a href={Navigate.streamsWatchPage(val.id)} >
                                                                        <i className="icofont-play-alt-1"></i>
                                                                        <span className="pluse"></span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="video-content abs-video-content">
                                                                <a href={Navigate.streamsWatchPage(val.id)} >{val.btnText} <i className="icofont-play-alt-1"></i></a>
                                                                <h3>{val.title}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            {loading && <div>Loading...</div>}
                                            {error && <div>Error: {error.message}</div>}
                                            
                                            <div ref={ref => (this.loadingRef = ref)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
>>>>>>> ff47b703a6d884b96fbd1827bd0fd8d0f8604293
                <Footer />
            </Fragment>
        );
    }
}

export default withRouter(StreamsPage);
