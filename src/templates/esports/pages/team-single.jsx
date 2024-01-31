import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeaderTwo from "../component/layout/pageheadertwo";
import SocialMedia from "../component/section/socialmedia";

const subtitle = "DOTA 01";
const title = "ABOUT THE TEAM";
const desc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nisi earum, tempore tempora, dolores fugit voluptates aliquam sit aspernatur officia dicta, nostrum ipsam ipsa odio? Accusamus nulla itaque, tempore autem sunt blanditiis amet iure ipsa nemo ullam nihil, dicta quod fuga omnis quibusdam. Ea, autem sequi et aliquam cupiditate illum? Nemo, quis! Fugit illum, libero esse eaque placeat";

const playerTitle = "TEAM Members";

let WinPriceList = [
    {
        icon: 'icofont-medal',
        title: '15 WINS',
    },
    {
        icon: 'icofont-signal',
        title: '04 LOSES',
    },
    {
        icon: 'icofont-game',
        title: '05 DRAWS',
    },
    {
        icon: 'icofont-workers-group',
        title: '02 PLAYS',
    },
]


let PlayerList = [
    {
        imgUrl: '/assets/images/player/01.jpg',
        imgAlt: 'Player Thumb',
        pName: 'Guadalupe R. Johnson',
    },
    {
        imgUrl: '/assets/images/player/02.jpg',
        imgAlt: 'Player Thumb',
        pName: 'AMADO R. MARTIN',
    },
    {
        imgUrl: '/assets/images/player/03.jpg',
        imgAlt: 'Player Thumb',
        pName: 'KYLE S. STELLY',
    },
    {
        imgUrl: '/assets/images/player/04.jpg',
        imgAlt: 'Player Thumb',
        pName: 'JOHN T. TONEY',
    },
    {
        imgUrl: '/assets/images/player/05.jpg',
        imgAlt: 'Player Thumb',
        pName: 'CHARLES S. ELLIOTT',
    },
    {
        imgUrl: '/assets/images/player/06.jpg',
        imgAlt: 'Player Thumb',
        pName: 'CLAUDE M. VASQUEZ',
    },
]


class TeamSinglePage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeaderTwo />
                <div className="about-team padding-top padding-bottom">
                    <div className="container">
                        <div className="section-header">
                            <p>{subtitle}</p>
                            <h2 className="mb-3">{title}</h2>
                            <p className="desc">{desc}</p>
                        </div>
                        <ul className="d-flex flex-wrap justify-content-center player-meta mb-0">
                            {WinPriceList.map((val, i) => (
                                <li className="d-flex align-items-center" key={i}>
                                    <span className="left me-3"><i className={val.icon}></i></span>
                                    <span className="right">{val.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="player-section padding-top padding-bottom bg-attachment" style={{backgroundImage: "url(/assets/images/video/bg.jpg)"}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>{playerTitle}</h2>
                        </div>
                        <div className="section-wrapper">
                            <div className="row g-4 justify-content-center">
                                {PlayerList.map((val, i) => (
                                    <div className="col-lg-4 col-sm-6 col-12" key={i}>
                                        <div className="player-item">
                                            <div className="player-inner">
                                                <div className="player-thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="player-content text-center">
                                                    <div className="player-info-list">
                                                        <h3 className="mb-0">{val.pName}</h3>
                                                    </div>
                                                    <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center w-100">
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
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default TeamSinglePage;