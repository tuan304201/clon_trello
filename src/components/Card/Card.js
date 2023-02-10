import React from 'react';
import './Card.scss';

const Card = ({ card }) => {
    return (
        <li className="card__item">
            {card.cover && <img src={card.cover} className="card__cover" alt="" />}
            {card.title}
        </li>
    );
};

export default Card;
