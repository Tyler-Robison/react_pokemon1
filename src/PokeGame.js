import React from "react";
import './PokeGame.css'
import Pokedex from "./Pokedex";
import {determineExp, divideHands} from "./helpers";


const PokeGame = ({ pokemon }) => {

    const hands = divideHands(pokemon)
    const p1Hand = hands.p1;
    const p2Hand = hands.p2;

    // totals exp of all pokemon in hand
    const p1Exp = determineExp(p1Hand)
    const p2Exp = determineExp(p2Hand)
    let winner;
    p1Exp > p2Exp ? winner = 'Player 1' : winner = 'Player 2'

    return (
        <div className="PokeGame">
            <h2>{winner} wins!!!</h2>
            <div className="PokeGame-left">
                <Pokedex
                    pokemon={p1Hand}
                    h2Text = 'Player 1'
                    totalExp={p1Exp}
                />
            </div>
            <div className="PokeGame-right">
                <Pokedex
                    pokemon={p2Hand}
                    h2Text = 'Player 2'
                    totalExp={p2Exp}
                />
            </div>
        </div>
    )
}


export default PokeGame;