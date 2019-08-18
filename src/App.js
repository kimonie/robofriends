import React, { Component } from 'react';
import { CardList } from './components/cardList/CardList';
import { SearchBox } from './components/searchBox/SearchBox';

import './App.css';

class Card extends Component {
    constructor () {
        super();

        this.state = {
            monster: [],
            searchField: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({ monster : users }));
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value });   
    }

    render() {
        const { monster, searchField } = this.state;
        const filteredMonsters = monster.filter(monst  => 
            monst.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className='App'>
                <h1>ROBOFRIENDS</h1>
                <SearchBox 
                    placeholder="Search Monsters" 
                    handleChange={ this.handleChange } />
                <CardList monster={ filteredMonsters } />
            </div>
        )
    }
}

export default Card;