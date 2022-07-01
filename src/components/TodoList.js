import React, { Component } from "react";
import { connect } from "react-redux";
import Task from "./Task";

class TodoList extends Component {

  render() {
    const tasks = this.props.tasks;
    return <div>
      <h1>TasksList</h1>
      <div className='table'>
        <table>
            <thead>
                <tr>
                    <th>
                        S.No
                    </th>
                    <th>
                        Tasks
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
            <tfoot>
                {
                 tasks.map((task,index)=>{
                  return <Task task = {task} key={index} />
                 }) 
                }
            </tfoot>
        </table>
      </div>
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}
export default connect(mapStateToProps)(TodoList);
