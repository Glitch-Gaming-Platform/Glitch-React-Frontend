import { Component } from "react";


const subtitle = "For Creators And Influencers";

const title = "Connect. Game. Earn. Repeat";
const desc = "Content creators and influencers have the opportunity to earn money by promoting both indie and AAA games.";


let AboutListContent = [
    {
        imgUrl: '/assets/images/about/icon-3.png',
        imgAlt: 'Restream To Twitch, Youtube, and Facebook',
        title: 'Play The Newest Games',
        desc: 'Get paid to play the newest games first and offer your followers exciting new content to engage with.',
    },
    {
        imgUrl: '/assets/images/about/coin.png',
        imgAlt: 'No-Code Your Own Experience',
        title: 'Get Paid Within 7 Days',
        desc: 'After completing a campaign, receive payment within 7 days of submitting your work! No long waits for cash payouts.',
    },
    {
        imgUrl: '/assets/images/about/youtube.png',
        imgAlt: 'About Icon',
        title: 'We Support All Social Platforms',
        desc: 'Create gaming content for all social platforms, including TikTok, Twitch, Reddit, Twitter, YouTube, and more!',
    },
]



class AboutSectionCreators extends Component {
    render() { 
        const {imgUrl} = this.props;
        return (
            <section className="about-section">
                <div className="container">
                    <div className="section-wrapper padding-top">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image">
                                    <img src={imgUrl} alt="about-image" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10">
                                <div className="about-wrapper">
                                    <div className="section-header">
                                        <p>{subtitle}</p>
                                        <h2>{title}</h2>
                                    </div>
                                    <div className="about-content">
                                        <p>{desc}</p>
                                        <ul className="about-list">
                                            {AboutListContent.map((val, i) => (
                                                <li className="about-item d-flex flex-wrap" key={i}>
                                                    <div className="about-item-thumb">
                                                        <img 
                                                            src={`${val.imgUrl}`} 
                                                            alt={`${val.imgAlt}`}
                                                        />
                                                    </div>
                                                    <div className="about-item-content">
                                                        <h5>{val.title}</h5>
                                                        <p>{val.desc}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default AboutSectionCreators;