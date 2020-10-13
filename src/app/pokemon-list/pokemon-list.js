import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import Pokemon from '../pokemon/pokemon.js';
import PopUp from '../popup/popup';

//The PokemonList component shows nothing when it mounts for the first time.
//But right before it mounts on to the DOM, it makes an
//API call to fetch the first 151 pokemon from the api and
//then displays them using the Pokemon Component
export default class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            species: [],
            fetched: false,
            loading: false,
            popupSeen: false,
            popupValues: {},
        };
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        fetch('../src/assets/data/complete_data.json').then(res => res.json())
            .then(response => {
                this.setState({
                    species: response,
                    loading: true,
                    fetched: true
                });
            });
    }

    pokemonDetails = (id) => {
        this.setState({
            popupSeen: !this.state.popupSeen
        });
        for (const pokemon in this.state.species) {
            if (this.state.species[pokemon].id === id) {
                this.setState({
                    popupValues: this.state.species[pokemon]
                })
            }
        }
    }

    togglePop = () => {
        this.setState({
            popupSeen: !this.state.popupSeen
        });
    };

    render() {
        const { fetched, loading, species, popupSeen, popupValues } = this.state;
        let content;
        if (fetched) {
            content = (<div className="pokemon-species-list">
                {species.map((pokemon, index) =>
                    <Pokemon key={pokemon.id} id={pokemon.id} pokemon={pokemon} pokemonDetails={this.pokemonDetails} />
                )}
            </div>);
        } else if (loading && !fetched) {
            content = <p> Loading ...</p>;
        } else {
            content = <div />;
        }
        return (
            <div>
                {popupSeen ? <PopUp toggle={this.togglePop} popupValues= {popupValues} /> : null}
                <div>{content}</div>
            </div>
        )
    }
}