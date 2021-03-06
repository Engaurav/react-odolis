import {combineReducers} from 'redux';
import { GET_TASKLIST, ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../actions';




const taskReducers = (state=[], action) => {
    switch(action.type){    
        case GET_TASKLIST:

            return action.payload;

        case ADD_TASK:
            console.log('Reducer',state)
            return state = [action.payload,...state];
        case DELETE_TASK:
            // console.log("Delete",action.payload)
            state = state.filter((val,index)=>{
                return index !== action.payload;
            })
            return state;
        case UPDATE_TASK :
            // console.log("REDucer SN", action.payload.sn , "Task" ,action.payload.task)
            state[action.payload.sn] = action.payload.task;
            return [...state];
        default:
            return state;
    }
}

const reducers = combineReducers({
    tasks: taskReducers
});

export default reducers;