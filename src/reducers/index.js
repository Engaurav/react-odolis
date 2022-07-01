import {combineReducers} from 'redux';
import { GET_TASKLIST, ADD_TASK } from '../actions';



const taskReducers = (state=[], action) => {
    switch(action.type){    
        case GET_TASKLIST:
            return action.payload;

        case ADD_TASK:
            state = state.concat(action.payload)
            break;
        default:
            return state;
    }
}

const reducers = combineReducers({
    tasks: taskReducers
});

export default reducers;