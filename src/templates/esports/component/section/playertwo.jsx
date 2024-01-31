import { Component } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./socialmedia";

const subtitle = "Our Team Players";
const title = "Meet Our Squad Players";

let PlayerListContent = [
    {
        bgImgUrl: '/assets/images/team/home-2/1.jpg',
        imgUrl: '/assets/images/team/1.png',
        imgAlt: 'Player Thumb',
        title: 'Dragon Team',
    },
    {
        bgImgUrl: '/assets/images/team/home-2/2.jpg',
        imgUrl: '/assets/images/team/2.png',
        imgAlt: 'Player Thumb',
        title: 'Frogs Team',
    },
    {
        bgImgUrl: '/assets/images/team/home-2/3.jpg',
        imgUrl: '/assets/images/team/3.png',
        imgAlt: 'Player Thumb',
        title: 'Tigers Team',
    },
    {
        bgImgUrl: '/assets/images/team/home-2/4.jpg',
        imgUrl: '/assets/images/team/4.png',
        imgAlt: 'Player Thumb',
        title: 'Shark Team',
    },
    {
        bgImgUrl: '/assets/images/team/home-2/5.jpg',
        imgUrl: '/assets/images/team/5.png',
        imgAlt: 'Player Thumb',
        title: 'Gaming Team',
    },
    {
        bgImgUrl: '/assets/images/team/home-2/1.jpg',
        imgUrl: '/assets/images/team/1.png',
        imgAlt: 'Player Thumb',
        title: 'Dragon Team',
    },
]


class PlayerSectionTwo extends Component {
    render() { 
        return (
            <section className="player-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4">
                            {PlayerListContent.map((val, i) => (
                                <div className="col-lg-4 col-sm-6 col-12" key={i}>
                                    <div className="player-item-2 text-center" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                        <div className="player-inner-2">
                                            <div className="player-thumb-2">
                                                <Link to="/team-single">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </Link>
                                            </div>
                                            <div className="player-content-2">
                                                <Link to="/team-single"><h2>{val.title}</h2></Link>
                                                <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center">
                                                    <SocialMedia />
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default PlayerSectionTwo;