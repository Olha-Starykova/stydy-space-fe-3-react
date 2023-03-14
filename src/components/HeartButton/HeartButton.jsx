import { useState } from "react";
import "./index.css"

function HeartButton({hasSale}) {

    const [clickedHeart, setClickedHeart] = useState(false);


    return (
        <div    
            className={`circle ${ (clickedHeart && hasSale) ? 'circleSaleRed'  :  clickedHeart ? 'circleRed' : hasSale ? 'circleSale'  : ''}`}
            onClick={() => setClickedHeart(!clickedHeart)}>
            <img className="svg-user" src="/icons/heart.png" alt="heart"></img>
        </div>
   
    )
     
};

export default HeartButton;