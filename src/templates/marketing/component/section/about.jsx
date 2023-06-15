import { Component } from "react";


const subtitle = "Our Goal";

const title = "Build A Live Gaming Community\n The Way You Envision";
const desc = "Use an open-source gaming community platform that you can customize, tweak and brand to create the live gaming & esports you deserve.";


let AboutListContent = [
    {
        imgUrl: '/assets/images/about/icon-1.png',
        imgAlt: 'Restream To Twitch, Youtube, and Facebook',
        title: 'Your Fans Can Easily Stream Their Gameplay',
        desc: 'Your fans can easily stream their gameplay from the community and multicast to Facebook, YouTube, and Twitch simultaneously.',
    },
    {
        imgUrl: '/assets/images/about/icon-2.png',
        imgAlt: 'No-Code Your Own Experience',
        title: 'Your Users Create Content and Compete',
        desc: 'Users can compete and create content centered around your game to help drive engagement.',
    },
    {
        imgUrl: '/assets/images/about/icon-3.png',
        imgAlt: 'About Icon',
        title: 'Your Game Earns Revenue from Engagement',
        desc: 'As users stream, compete, and create content, your game(s) earn an additional stream of revenue.',
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