import React, { useState, useEffect } from 'react';
import './BoardContent.scss';
import Column from 'components/Column/Column';
import { mapOder } from 'untilities/sort';
import { initialData } from 'actions/initialData';
import { isEmpty } from 'lodash';

const BoardContent = () => {
    const [boards, setBoard] = useState({});
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const boardFromDb = initialData.boards.find((board) => board.id === 'board-1');

        if (boardFromDb) {
            setBoard(boardFromDb);
            setColumns(mapOder(boardFromDb.columns, boardFromDb.columnOder, 'id'));
        }
    }, []);

    if (isEmpty(boards)) {
        return <div className="not__found">Board not found</div>;
    }

    return (
        <div className="board__content">
            {columns.map((column, index) => (
                <Column key={index} column={column} />
            ))}
        </div>
    );
};

export default BoardContent;
