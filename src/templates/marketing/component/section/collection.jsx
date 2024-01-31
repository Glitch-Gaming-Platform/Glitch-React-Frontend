import { Component } from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";


const subtitle = "today's";
const title = "Our Game Collection";
const btnText = "Browse All games";


let CollectionListContent = [
    {
        imgUrl: '/assets/images/game/01.png',
        imgAlt: 'collect thumb',
        title: 'Witch Sports Team',
    },
    {
        imgUrl: '/assets/images/game/02.png',
        imgAlt: 'collect thumb',
        title: 'Wolves Sports Team',
    },
    {
        imgUrl: '/assets/images/game/03.png',
        imgAlt: 'collect thumb',
        title: 'Robot Team',
    },
    {
        imgUrl: '/assets/images/game/04.png',
        imgAlt: 'collect thumb',
        title: 'Dragon Pro',
    },
]


class CollectionSection extends Component {
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
                            {CollectionListContent.map((val, i) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={i}>
                                    <div className="game-item item-layer">
                                        <div className="game-item-inner">
                                            <div className="game-thumb">
                                                <img 
                                                    src={`${val.imgUrl}`} 
                                                    alt={`${val.imgAlt}`} 
                                                />
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
 
export default CollectionSection;