import React, { Component } from 'react';

//The Pokemon component will show an individual pokemon monster
// It shows an image of the pokemon and
// shows the name of it as well.
export default class Pokemon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { pokemon, id } = this.props;
        return (
            <div id={`${id}`} className="pokemon-species" onClick={()=>this.props.pokemonDetails(id)}>
                <div className="pokemon-species-container">
                    <div className="pokemon-species-sprite">
                        <img src={`/src/assets/sprites/${id}.png`} />
                    </div>
                    <div className="pokemon-species-name"> {pokemon.name.english} </div>
                </div>
            </div>
        )
    }
}