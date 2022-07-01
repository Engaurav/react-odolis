import React, { Component } from 'react';
import {connect} from 'react-redux';


class TodoList extends Component {
  render() {
    console.log("TodoLists ? ",this.props.tasks)
    return (
      <div>TodoList</div>
    )
  }
}



function mapStateToProps(state){
  return {
      tasks : state.tasks
  }
}
export default connect(mapStateToProps)(TodoList);