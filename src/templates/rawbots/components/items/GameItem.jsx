
function GameItem(props) {

    return (
        <li class="my-game-item">
            <div class="my-game-item__letter" style={{background: "#4398E8"}}>S</div>
            <div class="my-game-item__title">Strategy Games</div>
            <div class="my-game-item__more"><a href="05_favourites.html"><i class="ico_more"></i></a></div>
        </li>
    );
}

export default GameItem;