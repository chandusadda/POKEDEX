import React, { Component } from 'react';

import PokemonList from './pokemon-list/pokemon-list.js';

//This is the root component
class PokeApp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="pokeapp">
                <h1> The POKEDEX App! </h1>
                <PokemonList />
            </div>
        )
    }
}

export default PokeApp;