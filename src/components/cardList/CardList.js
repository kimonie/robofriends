import React from 'react';

import { Card } from '../card/Card';

import './CardList.css';

export const CardList = (props) => {
    return (
    <div className='cardList'>
        { props.monster.map(monst => <Card key={ monst.id } monster={ monst } />) }
    </div>);
}

export default CardList;