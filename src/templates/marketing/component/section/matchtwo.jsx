import { Component } from "react";
import { Link } from "react-router-dom";
import SocialMedia from './socialmedia';

const subtitle = "Anywhere, Anytime";
const title = "All matches schedule";
const btnText = "Browse All Matches";


let MatchInfoListOne = [
    {
        imageone: '/assets/images/match/teamsm/teamsm-1.png',
        alt1: 'game list name',
        imagetwo: '/assets/images/match/teamsm/teamsm-2.png',
        alt2: 'game list name',
        title: 'Battlefield-4 tournament',
        matchdate: '30  April 2021',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3200',
        btntextTwo: 'Watch Now',
    },
    {
        imageone: '/assets/images/match/teamsm/teamsm-3.png',
        alt1: 'game list name',
        imagetwo: '/assets/images/match/teamsm/teamsm-4.png',
        alt2: 'game list name',
        title: 'Battlefield-4 tournament',
        matchdate: '30  April 2021',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3200',
        btntextTwo: 'Watch Now',
    },
    {
        imageone: '/assets/images/match/teamsm/teamsm-5.png',
        alt1: 'game list name',
        imagetwo: '/assets/images/match/teamsm/teamsm-6.png',
        alt2: 'game list name',
        title: 'Battlefield-4 tournament',
        matchdate: '30  April 2021',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3200',
        btntextTwo: 'Watch Now',
    },
    {
        imageone: '/assets/images/match/teamsm/teamsm-7.png',
        alt1: 'game list name',
        imagetwo: '/assets/images/match/teamsm/teamsm-8.png',
        alt2: 'game list name',
        title: 'Battlefield-4 tournament',
        matchdate: '30  April 2021',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3200',
        btntextTwo: 'Watch Now',
    },
    {
        imageone: '/assets/images/match/teamsm/teamsm-9.png',
        alt1: 'game list name',
        imagetwo: '/assets/images/match/teamsm/teamsm-10.png',
        alt2: 'game list name',
        title: 'Battlefield-4 tournament',
        matchdate: '30  April 2021',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3200',
        btntextTwo: 'Watch Now',
    },
]

class MatchSectionTwo extends Component {
    render() { 
        return (
            <section className="match-section padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/match/bg-2.jpg)"}}>
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4 mb-5">
                            {MatchInfoListOne.map((val, i) => (
                                <div className="col-12" key={i}>
                                    <div className="match-item item-layer">
                                        <div className="match-inner">
                                            <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                <p className="match-team-info">{val.groupcount} <span className="fw-bold">{val.playercount}</span></p>
                                                <p className="match-prize">{val.matchpname} <span className="fw-bold">{val.matchpamount}</span></p>
                                            </div>
                                            <div className="match-content bg-white">
                                                <div className="row gy-4 align-items-center justify-content-center">
                                                    <div className="col-xl-4 col-md-6 order-md-2">
                                                        <div className="match-game-team">
                                                            <ul className="match-team-list d-flex flex-wrap align-items-center justify-content-center">
                                                                <li className="match-team-thumb">
                                                                    <Link to="/team-single"><img src={val.imageone} alt={val.alt1} /></Link>
                                                                </li>
                                                                <li className="text-center">
                                                                    <img className="w-75 w-md-100" src="/assets/images/match/vs.png" alt="vs" />
                                                                </li>
                                                                <li className="match-team-thumb">
                                                                    <Link to="/team-single"><img src={val.imagetwo} alt={val.alt2} /></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-6 order-md-1">
                                                        <div className="match-game-info">
                                                            <h4><Link to="/team-single">{val.title}</Link></h4>
                                                            <p className="d-flex flex-wrap justify-content-center  justify-content-md-start">
                                                                <span className="match-date">{val.matchdate} </span>
                                                                <span className="match-time">{val.matchtime}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-6 order-md-3">
                                                        <div className="match-game-social">
                                                            <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">
                                                                <SocialMedia />
                                                                <li>
                                                                    <a href="#" className="default-button reverse-effect"><span>{val.btntextTwo} <i className="icofont-play-alt-1"></i></span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="button-wrapper text-center mt-5">
                            <Link to="/game-list" className="default-button"><span>{btnText} <i className="icofont-circled-right"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default MatchSectionTwo;