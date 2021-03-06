import React, { Component } from 'react'
import '../App.css';
import { getTaskList } from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class App extends Component {
  async componentDidMount(){
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.props.getTaskList(json)
      });
  }

  render() {
    return (
      <div className='App'>


        <h1 className='h1-color'> Todo App</h1>
        
        <TodoInput/>


        <div className='Todolist'>
          <TodoList/>
        </div>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch){
  return bindActionCreators({getTaskList}, dispatch);
}
export default connect(()=>{return {}}, mapDispatchToProps)(App);