import { Component, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";


let GameListData = [
    {
        id: 1,
        image: '/assets/images/game/01.png',
        alt: 'game list name',
        title: 'Witch Sports Team',
        icon: [
            {
                iconName: 'icofont-star',
            },
        ],
        catagory: 'collection-one',
    },
    {
        id: 2,
        image: '/assets/images/game/02.png',
        alt: 'game list name',
        title: 'Witch Sports Team',
        catagory: 'collection-two',
    },
    {
        id: 3,
        image: '/assets/images/game/03.png',
        alt: 'game list name',
        title: 'Witch Sports Team',
        catagory: 'collection-three',
    },
    {
        id: 4,
        image: '/assets/images/game/04.png',
        alt: 'game list name',
        title: 'Witch Sports Team',
        catagory: 'collection-one',
    },
    {
        id: 5,
        image: '/assets/images/game/05.png',
        alt: 'game list name',
        title: 'Witch Sports Team',
        catagory: 'collection-two',
    },
    {
        id: 6,
        image: '/assets/images/game/06.png',
        alt: 'game list name',
        title: 'Witch Sports Team',
        catagory: 'collection-three',
    },
    {
        id: 7,
        image: '/assets/images/game/07.png',
        alt: 'game list name',
        title: 'Witch Sports Team',
        catagory: 'collection-one',
    },
    {
        id: 8,
        image: '/assets/images/game/08.png',
        alt: 'game list name',
        title: 'Witch Sports Team',
        catagory: 'collection-three',
    },
]



const GameList = () => {

    const [items, setItems] = useState(GameListData);
    const filterItem = (categItem) => {
        const updateItems = GameListData.filter((curElem) => {
            return curElem.catagory === categItem;
        });
        setItems(updateItems);
    }
    return (
        <section className="collection-section padding-top padding-bottom">
            <div className="container">
                <div className="section-wrapper">
                    <ul className="collection-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">  
                        <li onClick={() => setItems(GameListData) }>All matches</li>
                        <li onClick={() => filterItem('collection-one') }>today’s matches</li>
                        <li onClick={() => filterItem('collection-two') }>upcoming matches</li>
                        <li onClick={() => filterItem('collection-three') }>matche results</li>
                    </ul>
                    <div className="row g-4 justify-content-center collection-grid GameListStyle">
                        {
                            items.map((elem) => {
                            const { id, image, title, alt } = elem;
                                return (
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={id}>
                                        <div className="game-item item-layer">
                                            <div className="game-item-inner">
                                                <div className="game-thumb">
                                                    <img src={image} alt={alt} />
                                                </div>
                                                <div className="game-overlay">
                                                    <h4><Link to="/team-single">{title}</Link> </h4>
                                                    <Rating />
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
 
export default GameList;

