export const GET_TASKLIST = "GET_TASKLIST";
export const ADD_TASK = "ADD_TASK";






export const getTaskList =  (tasks=[]) => {
    return{
        type: GET_TASKLIST,
        payload : tasks
    }
}


export const addTask = (task) => {
    return{
        type: ADD_TASK,
        payload: task
    }
}