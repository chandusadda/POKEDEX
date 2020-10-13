import React, { Component } from "react";

//The PopUp component won't be rendered, when it mounts for the first time.
//on click of any pokemon, then displays Pokemon details in a popup
export default class PopUp extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        this.props.toggle();
    };

    generateElement = (key,value) => {
        if(Number.isNaN(parseInt(key)) ) {
            return (
                <div key={key} className="row">
                  <div className="pokemon-species-name">{key}: {value} </div>
                </div>
              );
        } else {
            return (
                <div key={key} className="row">
                  <div className="pokemon-species-name">Type: {value} </div>
                </div>
              );
        }
      }
      
      generateData = (data) => {
        const newData = Object.keys(data).reduce((result, currentKey) => {
            const elementToPush = this.generateElement(currentKey, data[currentKey]);
            result.push(elementToPush);
            return result;
        }, []);
        return newData; 
      }

    render() {
        const { popupValues } = this.props;
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <div className="modal-body">
                        <div className="pokemon-species-name"> Name: {popupValues.name.english} </div>
                        {this.generateData(popupValues.base)}
                        {this.generateData(popupValues.type)}
                    </div>
                </div>
            </div>
        );
    }
}