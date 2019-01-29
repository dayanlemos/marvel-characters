import React from 'react';
import Card from '../Card/Card';

const CardList = (props) => {

    const { cards } = props;

    return (
        <div className="card-columns">
            { cards.map((card, key) => <Card card={card} key={key} /> ) }
        </div>
    )
}

export default CardList;