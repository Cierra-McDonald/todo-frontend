import React, { Component } from 'react'
import '../App.css'
import { addATodo, completedToDo, getTodoList } from './apiUtils'

export default class TodoListPage extends Component {

    state = { 
        todoList: [],
        todo: ''
    }
    componentDidMount = async () => { 

       await this.getToDos();

    }

    //try to see if you can combine the getToDoList function and componentDidMount together...later

    getToDos = async () => { 
        console.log(this.props.user.token);
        const todoList = await getTodoList(this.props.user.token);
        console.log(todoList);
        this.setState({ 
            todoList:todoList
        });
    }

    handleInputChange = (e) => { 

        this.setState({ 
            todo: e.target.value
        })
    }

    handleSubmitChange =  async (e) => { 
        console.log(this.state);
        e.preventDefault()

        await addATodo(this.props.user.token, this.state.todo);

        await this.getToDos();

        this.setState({
            todo: ''
        })
        
    }

    handleCompletedTodo = async(todoId, todo) => { 

        await completedToDo(todoId, this.props.user.token, todo)

        this.getToDos();

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitChange}>
                    <label>To-Do:
                        <input
                        value={this.state.todo}
                        onChange={this.handleInputChange}/>
                    </label><br/>
                   <button>Add to List!</button>
                </form>
                {!this.state.todoList.length && <p>Look's like you've been productive!  You're all caught up!</p>}
                {this.state.todoList.map(singleTodo => <p
                key={`${singleTodo.todo}-${singleTodo.id}`}
                onClick={() => this.handleCompletedTodo(singleTodo.id, singleTodo.todo)}
                className={`todo ${singleTodo.completed ? 'completed' : ''}`}>
                    {singleTodo.todo}
                    </p>)}
            </div>
        )
    }
}
