import React from "react";
import './PokeCard.css'

const PokeCard = ({ name, type, exp, img }) => {

    return (
        <div className="PokeCard">
            <p className="PokeCard-name">{name}</p>
            <img className="PokeCard-img" src={img} alt=""></img>
            <p className="PokeCard-type">Type: {type}</p>
            <p className="PokeCard-exp">EXP: {exp}</p>
        </div>
    )
}


export default PokeCard;