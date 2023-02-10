import React from 'react';
import Column from 'components/Column/Column';
import './BoardContent.scss';

const BoardContent = () => {
    return (
        <div className="board__content">
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
        </div>
    );
};

export default BoardContent;
