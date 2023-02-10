import React from 'react';
import Task from 'components/Task/Task';
import './Column.scss';

const Column = () => {
    return (
        <div className="column">
            <header>title content</header>
            <ul className="task__list">
                <Task />
                <Task />
                <Task />
            </ul>
            <footer>Add another card</footer>
        </div>
    );
};

export default Column;
