import {combineReducers} from 'redux';
import { GET_TASKLIST, ADD_TASK, DELETE_TASK } from '../actions';




const taskReducers = (state=[], action) => {
    switch(action.type){    
        case GET_TASKLIST:
            return action.payload;

        case ADD_TASK:
            return state = [action.payload,...state];
        case DELETE_TASK:
            // console.log("Delete",action.payload)
            state = state.filter((val,index)=>{
                return index !== action.payload;
            })
            return state;
        default:
            return state;
    }
}

const reducers = combineReducers({
    tasks: taskReducers
});

export default reducers;