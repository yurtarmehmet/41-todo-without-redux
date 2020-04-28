import React from 'react';
import TodoAppListItem from "./TodoAppListItem";

const TodoAppList = (props) => {
    return (
        <div>
            {
                props.todos.map((todo) => {
                    return <TodoAppListItem {...todo} toggleTodo={props.toggleTodo}/>
                })
            }
        </div>
    );
};

export default TodoAppList;