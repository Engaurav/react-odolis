import React, { Component } from 'react';
import styles from '../styles/input.module.css';
import {connect} from 'react-redux';
import { updateTask } from '../actions';
import {bindActionCreators} from 'redux';


class TaskEdit extends Component {


  handleFormSubmit=(e)=>{
    e.preventDefault();
    const Task = this.refs.task.value;


    const updateTaskAPI = (Task) =>{
      fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.task.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: this.props.task.id,
        title: Task,
        userId: this.props.task.userId,
        }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      })
        .then((response) => response.json())
        .then((json) => {
          this.props.updateTask(this.props.sn,json);
          this.props.handleShowEditForm();
        });
    }

    if(Task !== this.props.task){
      updateTaskAPI(Task);
    }

  }
  render() {
    return (
            <td colSpan="2">
                <b>Edit Task</b>
            
                <form onSubmit={this.handleFormSubmit}>
                    <input className={styles.forminput} type='text' ref='task' defaultValue={this.props.task.title} />
                    <button><img src='https://cdn-icons-png.flaticon.com/512/4301/4301577.png' alt="Add Task" width="30px"/></button>
                </form>
            </td>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({updateTask}, dispatch);
}
export default connect(()=>{return {}}, mapDispatchToProps)(TaskEdit);
