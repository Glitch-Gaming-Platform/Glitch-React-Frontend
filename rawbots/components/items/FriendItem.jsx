
function FriendItem(props) {

    return (
        <li className="friend-requests-item">
            <div className="friend-requests-item__avatar"><img src="assets/img/user-list-5.png" alt="user" /></div>
            <div className="friend-requests-item__name">Fred Emil</div>
            <div className="friend-requests-item__action"><button className="confirm ico_tick-circle" type="button"></button><button className="reject ico_trash" type="button"></button></div>
        </li>
    );
}

export default FriendItem;