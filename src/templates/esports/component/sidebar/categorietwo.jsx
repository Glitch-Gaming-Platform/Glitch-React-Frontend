import { Component } from "react";
import Glitch from 'glitch-javascript-sdk';

const title = " Categories";

let CategorieList = [
    {
        name: 'Show all',
        count: '18',
    },
    {
        name: 'Business',
        count: '20',
    },
    {
        name: 'Creative',
        count: '25',
    },
    {
        name: 'Inspiation',
        count: '30',
    },
    {
        name: 'News',
        count: '25',
    },
    {
        name: 'Photography',
        count: '18',
    },
]


class CategorieTwo extends Component {
    render() { 
        return (
            <div className="widget widget-category">
                <div className="widget-header">
                    <h5>{Glitch.util.LabelManager.getPostLabel(false, true)} {title}</h5>
                </div>
                <ul className="lab-ul widget-wrapper list-bg-none">
                    {CategorieList.map((val, i) => (
                        <li key={i}>
                            <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="icofont-rounded-double-right"></i>{val.name}</span><span>{val.count}</span></a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
 
export default CategorieTwo;