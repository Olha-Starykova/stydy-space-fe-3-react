import React from "react";
import "./index.css"
import Sale  from "../Sale/Sale";
import Button from "../Button/Button";

function Card({ imageSrc, title, description, price, hasSale, canBuy, priceSale }){
    
    return (
        <>
            {hasSale ? <Sale></Sale> : ''}
            <img src={imageSrc} alt={title} width="370" height={400} />
            <h3 className="title" >{title}</h3>
            <h2 className="description" >{description}</h2>

            {hasSale ?
                <div>
                    <span className="price" >${price}</span> <span className="priceSale" >${priceSale}</span> 
                </div>
                : <span className="price" >${price}</span>}

            
            {canBuy ?
                <div className='wrapperBtn' >            
                     <Button >LEARN MORE</Button>
                     <Button isLight="black">BUY NOW</Button> 
              </div> 
                :  <Button >LEARN MORE</Button> }
        </>
    )
};

export default Card;