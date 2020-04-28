import React from 'react';
import TodoAppHeader from "./TodoAppHeader";
import TodoAppList from "./TodoAppList";

class TodoApp extends React.Component{
    constructor(props){
        super(props);

        // herseyi kapsadigi cin statei burda olusturuyorum
        this.state = {
            todos: []
        }
    }

    addTodo = (content)=>{
        const newTodo = {
            id: Math.random(),
            completed: false,
            content
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    toggleTodo = (id) => {
        // eger toggle edilmek istenen todo degilse oldugu gibi don
        // eger toggle edilmek istenen todo ise completed propunu terse cevirip don.
        this.setState({
            todos: this.state.todos.map((todo) => {
                if(todo.id === id){
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            })
        })
    }

    render(){
        // Eklemeyeci yapacagi icin hedera addTodo geciliyor
        // Gostermeyi ve toggle yapacagi icin todiappliste de todos ve toggle todo prop olarak geciriliyor
        return (
            <div>
                <TodoAppHeader addTodo={this.addTodo}/>
                <TodoAppList todos={this.state.todos} toggleTodo={this.toggleTodo}/>
            </div>
        );
    }
}

export default TodoApp;