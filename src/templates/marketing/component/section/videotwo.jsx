import { Component } from "react";


const subtitle = "our LATEST VIDEOS";
const title = "check our live streaming";



let VideoListContentTop = [
    {
        imgUrl: '/assets/images/video/01.jpg',
        imgAlt: 'Video Thum',
        videoLink: 'https://www.youtube.com/embed/g5eQgEuiFC8',
        title: '2021 LVP SuperLiga Orange Summer',
        btnText: 'watch now',
    },
    {
        imgUrl: '/assets/images/video/02.jpg',
        imgAlt: 'Video Thum',
        videoLink: 'https://www.youtube.com/embed/g5eQgEuiFC8',
        title: '2021 LVP SuperLiga Orange Summer',
        btnText: 'watch now',
    },
    {
        imgUrl: '/assets/images/video/07.jpg',
        imgAlt: 'Video Thum',
        videoLink: 'https://www.youtube.com/embed/g5eQgEuiFC8',
        title: '2021 LVP SuperLiga Orange Summer',
        btnText: 'watch now',
    },
    {
        imgUrl: '/assets/images/video/08.jpg',
        imgAlt: 'Video Thum',
        videoLink: 'https://www.youtube.com/embed/g5eQgEuiFC8',
        title: '2021 LVP SuperLiga Orange Summer',
        btnText: 'watch now',
    },
]

let VideoListContentBottom = [
    {
        imgUrl: '/assets/images/video/03.jpg',
        imgAlt: 'Video Thum',
        videoLink: 'https://www.youtube.com/embed/g5eQgEuiFC8',
        title: 'IEM SEASON XVI – SUMMER',
        btnText: 'watch now',
    },
    {
        imgUrl: '/assets/images/video/04.jpg',
        imgAlt: 'Video Thum',
        videoLink: 'https://www.youtube.com/embed/g5eQgEuiFC8',
        title: 'IEM SEASON XVI – SUMMER',
        btnText: 'watch now',
    },
    {
        imgUrl: '/assets/images/video/05.jpg',
        imgAlt: 'Video Thum',
        videoLink: 'https://www.youtube.com/embed/g5eQgEuiFC8',
        title: 'IEM SEASON XVI – SUMMER',
        btnText: 'watch now',
    },
]

class VideoSectionTwo extends Component {
    render() { 
        return (
            <div className="video-section padding-top padding-bottom bg-attachment" style={{backgroundImage: "url(/assets/images/video/bg.jpg)"}}>
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
                                        {VideoListContentTop.map((val, i) => (
                                            <div className="col-lg-6 col-12" key={i}>
                                                <div className="video-item">
                                                    <div className="video-inner position-relative">
                                                        <div className="video-thumb position-relative video-overlay">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                            <div className="video-icon">
                                                                <a href={val.videoLink} target="_blank">
                                                                    <i className="icofont-play-alt-1"></i>
                                                                    <span className="pluse"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="video-content abs-video-content">
                                                            <a href={val.videoLink}  target="_blank">{val.btnText} <i className="icofont-play-alt-1"></i></a>
                                                            <h3>{val.title}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="video-bottom">
                                    <div className="row g-4 justify-content-center">
                                        {VideoListContentBottom.map((val, i) => (
                                            <div className="col-xl-4 col-md-6 col-12" key={i}>
                                                <div className="video-item">
                                                    <div className="video-inner position-relative">
                                                        <div className="video-thumb position-relative video-overlay">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                            <div className="video-icon">
                                                                <a href={val.videoLink} target="_blank">
                                                                    <i className="icofont-play-alt-1"></i>
                                                                    <span className="pluse"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="video-content abs-video-content">
                                                            <a href={val.videoLink}  target="_blank">{val.btnText} <i className="icofont-play-alt-1"></i></a>
                                                            <h3>{val.title}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default VideoSectionTwo;