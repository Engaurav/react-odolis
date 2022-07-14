import React, { Component } from 'react'
import styles from '../styles/form.module.css';
import {connect} from 'react-redux';
import { deleteTask } from '../actions';
import {bindActionCreators} from 'redux';
import TaskEdit from './TaskEdit';

class Task extends Component {
    constructor(){
        super();
        this.state = {
            edit : false
        }
    }
    showEditForm = (sn,title) =>{

        if(this.state.edit){
            this.setState({
                edit:false,
            })
        }else{
            this.setState({
                edit:true,
            })
        }
    }

    handleDeleteTask = (id) => {

        // directecly deleting
        this.props.deleteTask(id);

        // delete is not sending any data and slow to get response {

            // fetch('https://jsonplaceholder.typicode.com/posts/1', {
            // method: 'DELETE',
            // }).then((data)=>this.props.deleteTask(id));
        //}

    }
    render() {
        const {  title } = this.props.task;
        return (
            <tr>
                <td>
                    {this.props.sn + 1}
                </td> 

                { !this.state.edit && <td> {title} </td> }

                
                { !this.state.edit && <td className={styles.tdCenter}>
                    <button onClick={()=>this.showEditForm(this.props.sn,title)}><img src='https://cdn-icons-png.flaticon.com/512/2921/2921222.png' alt='Update' width="30px"/></button>
                </td> }

                { !this.state.edit && <td className={styles.tdCenter}>
                    <button onClick={()=>this.handleDeleteTask(this.props.sn)}><img src='https://cdn-icons-png.flaticon.com/512/1632/1632602.png' alt='Delete' width="30px"/></button>
                </td> }

                { this.state.edit &&  <TaskEdit task={this.props.task} sn = {this.props.sn} handleShowEditForm= {this.showEditForm}/>}

                { this.state.edit && <td className={styles.tdCenter}>
                    <button onClick={()=>this.showEditForm(this.props.sn,title)}><img src='https://cdn-icons-png.flaticon.com/512/753/753345.png' alt='Update' width="30px"/></button>
                </td> }


            </tr>

        )
    }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteTask}, dispatch);
}
export default connect(()=>{return {}}, mapDispatchToProps)(Task);