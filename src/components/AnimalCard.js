import React, { Component } from 'react'

//import picture from './img/paris.jpg'

import './AnimalCard.css'

class AnimalCard extends Component {

    render() {

        const {name, sexe, pict, description} = this.props

        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>

                <div className="card-image">
                    <img alt="animal" src={ pict }/>
                </div>


                <div className="card-stacked">
                    <div className="card-content">
                        <p1>{ name } </p1>
                        <em>{ sexe }</em>
                        <p> { description } </p>
                    </div>
                    <div className="card-action center-align">
                    </div>
                </div>

            </div>
        )
    }

}

export default AnimalCard