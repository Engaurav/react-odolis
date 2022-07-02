import React, { Component } from 'react';
import styles from '../styles/input.module.css'
import {connect} from 'react-redux';
import { addTask } from '../actions';
import {bindActionCreators} from 'redux';

class TodoInput extends Component {

  handleFormSubmit=(e)=>{
    e.preventDefault();
    const newTask = this.refs.task.value;
    const addTaskAPI = (newTask) =>{
      fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: newTask,
        userId: 1,
        }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      })
        .then((response) => response.json())
        .then((json) => this.props.addTask(json));
    }
    if(newTask.length > 0){
      addTaskAPI(newTask);
    }
    this.refs.task.value = '';
  }
  render() {

 

    return (
      <div className={styles.formcontainer}>
        <h4>Add Task</h4>
            <form onSubmit={this.handleFormSubmit}>
              <input className={styles.forminput} type='text' ref='task' placeholder='Add New Task'/>
              <button><img src='https://cdn-icons-png.flaticon.com/512/2921/2921226.png' alt="Add Task" width="30px"/></button>
            </form>
      </div>
    )
  }
}




function mapDispatchToProps(dispatch){
  return bindActionCreators({addTask}, dispatch);
}
export default connect(()=>{return {}}, mapDispatchToProps)(TodoInput);