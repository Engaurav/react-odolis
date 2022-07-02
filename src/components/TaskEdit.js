import React, { Component } from 'react';
import styles from '../styles/input.module.css';


class TaskEdit extends Component {
  render() {
    return (
            <td colSpan="2">
                <b>Edit Task</b>
            
                <form onSubmit={this.handleFormSubmit}>
                    <input className={styles.forminput} type='text' ref='task' defaultValue={this.props.task} />
                    <button><img src='https://cdn-icons-png.flaticon.com/512/4301/4301577.png' alt="Add Task" width="30px"/></button>
                </form>
            </td>
    )
  }
}


export default TaskEdit;
