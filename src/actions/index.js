export const GET_TASKLIST = "GET_TASKLIST";
export const ADD_TASK = "ADD_TASK";



export const getTaskList = () => {
    console.log("get task called")
    const tasks = [
        {
            name: "Gaurav"
        },
        {
            name: "Aman"
        }
    ]
    return{
        type: GET_TASKLIST,
        payload: tasks
    }
}


export const addTask = (task) => {
    return{
        type: ADD_TASK,
        payload: task
    }
}