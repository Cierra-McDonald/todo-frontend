import React, { Component } from 'react'
import request from 'superagent'
import { getTodoList } from './apiUtils'

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
        // this.setState({ 
        //     todoList
        // });
    }


    render() {
        return (
            <div>
                Your todo list here!
            </div>
        )
    }
}
