import React, { Component } from 'react'
import '../App.css';
import { getTaskList } from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TodoList from './TodoList';

class App extends Component {
  async componentDidMount(){
    this.props.getTaskList();
  }
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList/>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch){
  return bindActionCreators({getTaskList}, dispatch);
}
export default connect(()=>{return {}}, mapDispatchToProps)(App);