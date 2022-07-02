import React, { Component } from 'react'

class Task extends Component {
  render() {
    const { id, title } = this.props.task;
    return (
        <tr>
            <td>
                {id}
            </td>
            <td>
                {title}
            </td>
            <td>
                <button ><img src='https://cdn-icons-png.flaticon.com/512/1632/1632602.png' alt='Delete' width="30px"/></button>
            </td>
        </tr>
    )
  }
}

export default Task;