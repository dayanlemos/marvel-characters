import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {

    const { card } = props;

    return (
        <Link to={`/character/${card.id}`} className="card">

            <img className="card-img-top" src={`${card.thumbnail.path}/portrait_xlarge.${card.thumbnail.extension}`} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
            </div>

        </Link>




    )
};

export default Card;