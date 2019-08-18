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
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({ monster : users }));
    }

    render() {
        const { monster, searchField } = this.state;
        const filteredMonsters = monster.filter(monst  => 
            monst.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className='App'>
                <SearchBox 
                    placeholder="Search Monsters" 
                    handleChange={ e => this.setState({ searchField: e.target.value })} />
                <CardList monster={ filteredMonsters } />
            </div>
        )
    }
}


export default Card;