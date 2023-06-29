import { Component } from "react";


const subtitle = "Our Goal";

const title = "Communities That Benefit Game Publishers and Developers";
const desc = "We are an open-source gaming community platform designed to revolutionize engagement and revenue generation for game publishers and indie developers.";


let AboutListContent = [
    {
        imgUrl: '/assets/images/about/icon-1.png',
        imgAlt: 'Restream To Twitch, Youtube, and Facebook',
        title: 'Your Fans Can Easily Stream Their Gameplay',
        desc: 'Immerse your fans in the gaming experience as they effortlessly stream their gameplay from our community and simultaneously multicast to Facebook, YouTube, and Twitch.',
    },
    {
        imgUrl: '/assets/images/about/icon-2.png',
        imgAlt: 'No-Code Your Own Experience',
        title: 'Your Users Create Content and Compete',
        desc: 'Unleash the creativity and competitive spirit of your users as they compete and generate captivating content centered around your game, igniting unparalleled engagement.',
    },
    {
        imgUrl: '/assets/images/about/icon-3.png',
        imgAlt: 'About Icon',
        title: 'Your Game Earns Revenue from Engagement',
        desc: 'Watch your game(s) unlock an additional stream of revenue as users stream, compete, and craft mesmerizing content.',
    },
]



class AboutSection extends Component {
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
 
export default AboutSection;