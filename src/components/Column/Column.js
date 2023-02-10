import React from 'react';
import './Column.scss';
import Card from 'components/Card/Card';
import { mapOder } from 'untilities/sort';

const Column = ({ column }) => {
    const cards = mapOder(column.cards, column.cardOder, 'id');
    return (
        <div className="column">
            <header>{column.title}</header>
            <ul className="card__list">
                {cards.map((card, index) => (
                    <Card key={index} card={card} />
                ))}
            </ul>
            <footer>Add another card</footer>
        </div>
    );
};

export default Column;
