import { Component } from "react";

const title = "02 Comment";

let CommentsList = [
    {
        imgUrl: '/assets/images/blog/author/02.jpg',
        imgAlt: 'author thumb',
        Name: 'Umme Nishat',
        Date: 'May 15, 2022 at 12:41 pm',
        Massage: 'The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth',
    },
    {
        imgUrl: '/assets/images/blog/author/03.jpg',
        imgAlt: 'author thumb',
        Name: 'Rajib Raj',
        Date: 'May 15, 2022 at 12:41 pm',
        Massage: 'The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth',
    },
]

class Comments extends Component {
    render() { 
        return (
            <div id="comments" className="comments">
                <h6 className="comment-title h7">{title}</h6>
                <ul className="lab-ul comment-list">
                    {CommentsList.map((val, i) => (
                        <li className="comment" key={i}>
                            <div className="com-item">
                                <div className="com-thumb">
                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                </div>
                                <div className="com-content">
                                    <div className="com-title">
                                        <div className="com-title-meta">
                                            <a href="#" rel="external nofollow" className="h7">{val.Name}</a>
                                            <span> {val.Date} </span>
                                        </div>
                                        <span className="reply">
                                            <a className="comment-reply-link" href="#"><i className="icofont-reply-all"></i>Reply</a>
                                        </span>
                                    </div>
                                    <p>{val.Massage}</p>
                                    <div className="reply-btn"></div>
                                </div>
                            </div>
                        </li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}
 
export default Comments;