import { Component } from "react";


const title = "Instagram";

let InstagramList = [
    {
        imgUrl: '/assets/images/instragram/01.jpg',
        imgAlt: 'Instragrm thumb',
    },
    {
        imgUrl: '/assets/images/instragram/02.jpg',
        imgAlt: 'Instragrm thumb',
    },
    {
        imgUrl: '/assets/images/instragram/03.jpg',
        imgAlt: 'Instragrm thumb',
    },
    {
        imgUrl: '/assets/images/instragram/04.jpg',
        imgAlt: 'Instragrm thumb',
    },
    {
        imgUrl: '/assets/images/instragram/05.jpg',
        imgAlt: 'Instragrm thumb',
    },
    {
        imgUrl: '/assets/images/instragram/06.jpg',
        imgAlt: 'Instragrm thumb',
    },
    {
        imgUrl: '/assets/images/instragram/07.jpg',
        imgAlt: 'Instragrm thumb',
    },
    {
        imgUrl: '/assets/images/instragram/08.jpg',
        imgAlt: 'Instragrm thumb',
    },
    {
        imgUrl: '/assets/images/instragram/09.jpg',
        imgAlt: 'Instragrm thumb',
    },
]

class Instagram extends Component {
    render() { 
        return (
            <div className="widget widget-instagram">
                <div className="widget-header">
                    <h5>{title}</h5>
                </div>
                <ul className="lab-ul widget-wrapper d-flex flex-wrap justify-content-center">
                    {InstagramList.map((val, i) => (
                        <li key={i}><a href={`${val.imgUrl}`} target="_blank"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></a></li>
                    ))}
                </ul>
            </div>
        );
    }
}
 
export default Instagram;