import React from 'react'
import './App.css';

export default function PokemonList({pokemon}) {
    return (
        <div className="pokemon">
            {pokemon.map(pokemon => (

            <div key={pokemon}>{pokemon}</div>

            ))}
        </div>
    )
}
