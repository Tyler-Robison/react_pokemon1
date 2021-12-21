import React from "react";
import './Pokedex.css'
import PokeCard from "./PokeCard";


const Pokedex = ({ pokemon, h2Text, totalExp }) => {

    return (
        <div className="Pokedex">
            <h2>{h2Text}</h2>
            <h3>Total Experience: {totalExp}</h3>
            <div className="Pokedex-player">
                {pokemon.map(poke => (
                    <PokeCard
                        key={poke.id}
                        name={poke.name}
                        type={poke.type}
                        exp={poke.base_experience}
                        img={poke.img}
                    />
                ))

                }

            </div>
        </div>
    )
}


export default Pokedex;