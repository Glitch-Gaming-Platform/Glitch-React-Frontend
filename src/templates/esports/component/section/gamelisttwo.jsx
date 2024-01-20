import { Component, useState } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./socialmedia";


let GameListTwoData = [
    {
        id: 1,
        imageone: 'assets/images/match/teamsm/teamsm-1.png',
        alt1: 'game list name',
        imagetwo: 'assets/images/match/teamsm/teamsm-2.png',
        alt2: 'game list name',
        title: 'Battlefield-4 tournament',
        matchdate: '30  April 2021',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3200',
        btntext: 'Watch Now',
        catagory: 'match-two',
    },
    {
        id: 2,
        imageone: 'assets/images/match/teamsm/teamsm-3.png',
        alt1: 'game list name',
        imagetwo: 'assets/images/match/teamsm/teamsm-4.png',
        alt2: 'game list name',
        title: 'Battlefield-4 tournament',
        matchdate: '30  April 2021',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3200',
        btntext: 'Watch Now',
        catagory: 'match-one',
    },
    {
        id: 3,
        imageone: 'assets/images/match/teamsm/teamsm-5.png',
        alt1: 'game list name',
        imagetwo: 'assets/images/match/teamsm/teamsm-6.png',
        alt2: 'game list name',
        title: 'Battlefield-4 tournament',
        matchdate: '30  April 2021',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3200',
        btntext: 'Watch Now',
        catagory: 'match-one',
    },
    {
        id: 4,
        imageone: 'assets/images/match/teamsm/teamsm-7.png',
        alt1: 'game list name',
        imagetwo: 'assets/images/match/teamsm/teamsm-8.png',
        alt2: 'game list name',
        title: 'Battlefield-4 tournament',
        matchdate: '30  April 2021',
        matchtime: 'Time: 08:30PM',
        groupcount: '2 group',
        playercount: '32 Players',
        matchpname: 'Prize Pool',
        matchpamount: '$3200',
        btntext: 'Watch Now',
        catagory: 'match-two',
    },
]



const GameListTwo = () => {

    const [items, setItems] = useState(GameListTwoData);
    const filterItem = (categItem) => {
        const updateItems = GameListTwoData.filter((curElem) => {
            return curElem.catagory === categItem;
        });
        setItems(updateItems);
    }
    return (
        <section className="match-section padding-top padding-bottom">
            <div className="container">
                <div className="section-wrapper">
                    <ul className="match-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">  
                        <li onClick={() => setItems(GameListTwoData) }>All matches</li>
                        <li onClick={() => filterItem('match-one') }>today’s matches</li>
                        <li onClick={() => filterItem('match-two') }>upcoming matches</li>
                    </ul>
                    <div className="row g-4 match-grid GameListStyleTwo">

                        {
                            items.map((elem) => {
                                const { id, imageone, imagetwo, title, alt1, alt2, matchdate, matchtime, groupcount, playercount, matchpname, matchpamount, btntext } = elem;
                                return (
                                    <div className="col-12" key={id}>
                                        <div className="match-item item-layer">
                                            <div className="match-inner">
                                                <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                    <p className="match-team-info">{groupcount} <span className="fw-bold">{playercount}</span></p>
                                                    <p className="match-prize">{matchpname} <span className="fw-bold">{matchpamount}</span></p>
                                                </div>
                                                <div className="match-content">
                                                    <div className="row gy-4 align-items-center justify-content-center">
                                                        <div className="col-xl-4 col-md-6 order-md-2">
                                                            <div className="match-game-team">
                                                                <ul className="match-team-list d-flex flex-wrap align-items-center justify-content-center">
                                                                    <li className="match-team-thumb">
                                                                        <Link to="/team-single"><img src={imageone} alt={alt1} /></Link>
                                                                    </li>
                                                                    <li className="text-center"><img className="w-75 w-md-100" src="/assets/images/match/vs.png" alt="vs" /></li>
                                                                    <li className="match-team-thumb">
                                                                        <Link to="/team-single"><img src={imagetwo} alt={alt2} /></Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 col-md-6 order-md-1">
                                                            <div className="match-game-info">
                                                                <h4><Link to="/team-single">{title}</Link> </h4>
                                                                <p className="d-flex flex-wrap justify-content-center  justify-content-md-start">
                                                                    <span className="match-date">{matchdate} </span><span  className="match-time">{matchtime}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 col-md-6 order-md-3">
                                                            <div className="match-game-social">
                                                                <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">
                                                                    <SocialMedia />
                                                                    <li><a href="#" className="default-button reverse-effect"><span>{btntext}<i className="icofont-play-alt-1"></i></span> </a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default GameListTwo;

