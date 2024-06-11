import { Component } from "react";
import { Link } from "react-router-dom";
import Navigate from "../../../../util/Navigate";


const subtitle = "For Publishers and Indie Developers";

const title = "Market Your Game(s) With Creators";
const desc = "Engage influencers and content creators to play, market, and promote your game, driving other users to play.";


let AboutListContent = [
    {
        imgUrl: '/assets/images/about/icon-1.png',
        imgAlt: 'Restream To Twitch, Youtube, and Facebook',
        title: 'Market Across All Social Platforms',
        desc: 'Broadcast your game simultaneously across Facebook, YouTube, and Twitch. Additionally, produce short-form content tailored for TikTok, Instagram, Facebook, Twitter, and YouTube.',
    },
    {
        imgUrl: '/assets/images/about/artificial-intelligence.png',
        imgAlt: 'No-Code Your Own Experience',
        title: 'Manage Your Campaign With AI',
        desc: 'Leverage AI or an agency to automatically manage various aspects of your campaign, including approving creators, managing campaign statuses, handling payouts, and more.',
    },
    {
        imgUrl: '/assets/images/about/chart-circle.png',
        imgAlt: 'About Icon',
        title: 'Pay Based On Results',
        desc: 'Collaborate with creators who are willing to work on a performance basis, rewarding results that your content generates for your game.',
    },
]



class AboutSectionPublishers extends Component {
    render() { 
        const {imgUrl} = this.props;
        return (
            <section className="about-section">
                <div className="container">
                    <div className="section-wrapper padding-top">
                        <div className="row">
                            
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
                                        <div className="text-start mt-4">
                                            <Link to={Navigate.publishersBenefitsPage()} class="default-button reverse-effect mr-2" data-rel="lightcase"><span>Learn More <i class="icofont-play-alt-1"></i></span> </Link>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to={Navigate.publishersOnboardingStep1Page()} class="default-button"><span>Register <i class="icofont-circled-right"></i></span> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-image">
                                    <img src={imgUrl} alt="about-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default AboutSectionPublishers;