import { Component } from "react";
import { Link } from "react-router-dom";


const subtitle = "WE OUR PARTNERS";
const title = "BECOME A PARTNER of bigamer";
const btnText = "BECOME A PARTNER";


let SponsorListContent = [
    {
        imgUrl: '/assets/images/sponsor/01.png',
        imgAlt: 'Sponsor Thumb',
    },
    {
        imgUrl: '/assets/images/sponsor/02.png',
        imgAlt: 'Sponsor Thumb',
    },
    {
        imgUrl: '/assets/images/sponsor/03.png',
        imgAlt: 'Sponsor Thumb',
    },
    {
        imgUrl: '/assets/images/sponsor/04.png',
        imgAlt: 'Sponsor Thumb',
    },
    {
        imgUrl: '/assets/images/sponsor/05.png',
        imgAlt: 'Sponsor Thumb',
    },
    {
        imgUrl: '/assets/images/sponsor/06.png',
        imgAlt: 'Sponsor Thumb',
    },
    {
        imgUrl: '/assets/images/sponsor/07.png',
        imgAlt: 'Sponsor Thumb',
    },
    {
        imgUrl: '/assets/images/sponsor/08.png',
        imgAlt: 'Sponsor Thumb',
    },
]



class SponsorSection extends Component {
    render() { 
        return (
            <div className="sponsor-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-5 justify-content-center row-cols-xl-5 row-cols-md-3 row-cols-2">
                            {SponsorListContent.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="sponsor-item">
                                        <div className="sponsor-inner">
                                            <div className="sponsor-thumb text-center">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-5">
                            <Link to="/partners" className="default-button"><span>{btnText} <i className="icofont-circled-right"></i></span> </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SponsorSection;