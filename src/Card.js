import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor () {
        super();

        this.state = {
            monster: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({ monster : users }));
    }

    render() {
        return (
            this.state.monster.map(monst => <h1 key={monst.id}> {monst.name} </h1>)
        )
    }

}


export default Card;