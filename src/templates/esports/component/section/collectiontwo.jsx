import { Component } from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";


const title = "Our Game Collection";
const subtitle = "today's";
const btnText = "Browse All games";

let CollectionListContentTwo = [
    {
        imgUrlOne: 'assets/images/match/teamsm/teamsm-1.png',
        imgAltOne: 'team thumb',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-2.png',
        imgAltTwo: 'team thumb',
        title: 'Witch Sports Team',
    },
    {
        imgUrlOne: 'assets/images/match/teamsm/teamsm-3.png',
        imgAltOne: 'team thumb',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-4.png',
        imgAltTwo: 'team thumb',
        title: 'Witch Sports Team',
    },
    {
        imgUrlOne: 'assets/images/match/teamsm/teamsm-5.png',
        imgAltOne: 'team thumb',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-6.png',
        imgAltTwo: 'team thumb',
        title: 'Witch Sports Team',
    },
]

class CollectionSectionTwo extends Component {
    render() { 
        return (
            <section className="collection-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center CollectionStyle">
                            {CollectionListContentTwo.map((val, i) => (
                                <div className="col-lg-4 col-sm-6 col-12" key={i}>
                                    <div className="game-item item-layer">
                                        <div className="game-item-inner">
                                            <div className="game-thumb">
                                                <ul className="match-team-list d-flex flex-wrap align-items-center justify-content-center">
                                                    <li className="match-team-thumb">
                                                        <Link to="/team-single">
                                                            <img 
                                                                src={`${val.imgUrlOne}`} 
                                                                alt={`${val.imgAltOne}`} 
                                                            />
                                                        </Link>
                                                    </li>
                                                    <li className="text-center">
                                                        <img className="w-75 w-md-100" src="/assets/images/match/vs.png" alt="vs" />
                                                    </li>
                                                    <li className="match-team-thumb">
                                                        <Link to="/team-single">
                                                            <img 
                                                                src={`${val.imgUrlTwo}`} 
                                                                alt={`${val.imgAltTwo}`} 
                                                            />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="game-overlay">
                                                <h4><Link to="/team-single">{val.title}</Link> </h4>
                                                <Rating />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="button-wrapper text-center mt-5">
                            <Link to="/game-list" className="default-button"><span>{btnText} <i className="icofont-circled-right"></i></span> </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default CollectionSectionTwo;