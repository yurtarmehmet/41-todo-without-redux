import React from 'react';

const TodoAppListItem = ({content, id, completed, toggleTodo}) => {
    return (
        <div style={{
            textDecoration: completed ? "line-through" : "initial"
        }} onClick={() => toggleTodo(id)}>
            {content}
        </div>
    );
};

export default TodoAppListItem;