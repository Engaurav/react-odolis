import React, { Component } from "react";
import { connect } from "react-redux";
import Task from "./Task";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

class TodoList extends Component {
  render() {
    const tasks = this.props.tasks;
    return (
      <div>
        <h1>TasksList</h1>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Tasks</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {(tasks.length === 0) && <div>No Data</div>}
              {tasks.map((task, index) => {
                return <Task task={task} key={index} />;
              })}
              
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}
export default connect(mapStateToProps)(TodoList);
