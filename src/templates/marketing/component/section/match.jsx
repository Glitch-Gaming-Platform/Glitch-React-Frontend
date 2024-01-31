import { Component } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./socialmedia";

const title = "All matches schedule";
const subtitle = "Anywhere, Anytime";
const btnText = "Browse All Matches";
const Upcomingtitle = "Upcoming Matches";
const Previoutitle = "Previous Matches";

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
]
let MatchInfoListTwo = [
    {
        imageone: '/assets/images/match/teamsm/teamsm-1.png',
        alt1: 'game list name',
        imagetwo: '/assets/images/match/teamsm/teamsm-2.png',
        alt2: 'game list name',
        title: 'call of duty TOURNAMENT',
        matchdate: '15  May 2022',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3200',
    },
    {
        imageone: '/assets/images/match/teamsm/teamsm-3.png',
        alt1: 'game list name',
        imagetwo: '/assets/images/match/teamsm/teamsm-4.png',
        alt2: 'game list name',
        title: 'LEAGUE BATTLE tournament',
        matchdate: '15  May 2022',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3600',
    },
    {
        imageone: '/assets/images/match/teamsm/teamsm-5.png',
        alt1: 'game list name',
        imagetwo: '/assets/images/match/teamsm/teamsm-6.png',
        alt2: 'game list name',
        title: 'pubg classic tournament',
        matchdate: '15  May 2022',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3400',
    },
]

let MatchInfoListThree = [
    {
        imageone: '/assets/images/match/teamsm/teamsm-7.png',
        alt1: 'game list name',
        imagetwo: '/assets/images/match/teamsm/teamsm-8.png',
        alt2: 'game list name',
        result: '4 - 2',
        matchdate: '15  May 2022',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3200',
    },
    {
        imageone: '/assets/images/match/teamsm/teamsm-9.png',
        alt1: 'game list name',
        imagetwo: '/assets/images/match/teamsm/teamsm-10.png',
        alt2: 'game list name',
        result: '3 - 1',
        matchdate: '15  May 2022',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3600',
    },
    {
        imageone: '/assets/images/match/teamsm/teamsm-11.png',
        alt1: 'game list name',
        imagetwo: '/assets/images/match/teamsm/teamsm-12.png',
        alt2: 'game list name',
        result: '0 - 0',
        matchdate: '15  May 2022',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3400',
    },
]


class MatchSection extends Component {
    render() { 
        return (
            <section className="match-section padding-top padding-bottom" style= {{backgroundImage: "url(/assets/images/match/bg.jpg)"}}>
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row mb-5">
                            {MatchInfoListOne.map((val, i) => (
                                <div className="col-12" key={i}>
                                    <div className="match-item item-layer">
                                        <div className="match-inner">
                                            <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                <p className="match-team-info">{val.groupcount} <span className="fw-bold">{val.playercount}</span></p>
                                                <p className="match-prize">{val.matchpname} <span className="fw-bold">{val.matchpamount}</span></p>
                                            </div>
                                            <div className="match-content gradient-bg-yellow">
                                                <div className="row gy-4 align-items-center justify-content-center">
                                                    <div className="col-xl-4 col-md-6 order-md-2">
                                                        <div className="match-game-team">
                                                            <ul className="match-team-list d-flex flex-wrap align-items-center justify-content-center">
                                                                <li className="match-team-thumb">
                                                                    <a href="/team-single"><img src={val.imageone} alt={val.alt1} /></a>
                                                                </li>
                                                                <li className="text-center">
                                                                    <img className="w-75 w-md-100" src="/assets/images/match/vs.png" alt="vs" />
                                                                </li>
                                                                <li className="match-team-thumb">
                                                                    <a href="/team-single"><img src={val.imagetwo} alt={val.alt2} /></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-6 order-md-1">
                                                        <div className="match-game-info">
                                                            <h4><a href="/team-single">{val.title}</a></h4>
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

                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="upcome-matches">
                                    <h3 className="upcome-match-header">{Upcomingtitle}</h3>
                                    <div className="row g-3 MatchStyleOne">
                                        {MatchInfoListTwo.map((val, i) => (
                                            <div className="col-12" key={i}>
                                                <div className="match-item-2 item-layer">
                                                    <div className="match-inner">
                                                        <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                            <p className="match-team-info">{val.groupcount} <span className="fw-bold">{val.playercount}</span></p>
                                                            <p className="match-prize">{val.matchpname} <span className="fw-bold">{val.matchpamount}</span></p>
                                                        </div>
                                                        <div className="match-content">
                                                            <div className="row align-items-center justify-content-center">
                                                                <div className="col-md-2 col-5 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single" className="text-center"><img src={val.imageone} alt={val.alt1} /></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-2 d-md-none">
                                                                    <img src="/assets/images/match/vs.png" alt="vs" />
                                                                </div>
                                                                <div className="col-md-2 col-5 order-md-3 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single"><img src={val.imagetwo} alt={val.alt2} /></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 order-md-2 mt-4 mt-md-0">
                                                                    <div className="match-game-info text-center">
                                                                        <h4><Link to="/team-single">{val.title}</Link>
                                                                        </h4>
                                                                        <p className="d-flex flex-wrap justify-content-center">
                                                                            <span className="match-date">{val.matchdate} </span>
                                                                            <span className="match-time">{val.matchtime}</span>
                                                                        </p>
                                                                        <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center">
                                                                            <SocialMedia />
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
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="upcome-matches">
                                    <h3 className="upcome-match-header">{Previoutitle}</h3>
                                    <div className="row g-3 MatchStyleTwo">
                                        {MatchInfoListThree.map((val, i) => (
                                            <div className="col-12" key={i}>
                                                <div className="match-item-2 item-layer">
                                                    <div className="match-inner">
                                                        <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                            <p className="match-team-info">{val.groupcount} <span className="fw-bold">{val.playercount}</span></p>
                                                            <p className="match-prize">{val.matchpname} <span className="fw-bold">{val.matchpamount}</span></p>
                                                        </div>
                                                        <div className="match-content">
                                                            <div className="row align-items-center justify-content-center">
                                                                <div className="col-md-2 col-5 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single" className="text-center">
                                                                            <img src={val.imageone} alt={val.alt1} />
                                                                        </Link>
                                                                    </div>

                                                                </div>
                                                                <div className="col-2 d-md-none">
                                                                    <img src="/assets/images/match/vs.png" alt="vs" />
                                                                </div>
                                                                <div className="col-md-2 col-5 order-md-3 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single">
                                                                            <img src={val.imagetwo} alt={val.alt2} />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 order-md-2 mt-4 mt-md-0">
                                                                    <div className="match-game-info text-center">
                                                                        <h4><Link to="/team-single">{val.result}</Link></h4>
                                                                        <p className="d-flex flex-wrap justify-content-center">
                                                                            <span className="match-date">{val.matchdate} </span>
                                                                            <span className="match-time">{val.matchtime}</span>
                                                                        </p>
                                                                        <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center">
                                                                            <SocialMedia />
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
                                </div>
                            </div>
                        </div>

                        <div className="button-wrapper text-center mt-5">
                            <Link to="/game-list" className="default-button"><span>{btnText} <i className="icofont-circled-right"></i></span></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default MatchSection;