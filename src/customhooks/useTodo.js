import { useContext } from "react"
import {TodoContext} from "../contexts/TodoContext"

const useTodo = () =>{
    const {state,dispatch} = useContext(TodoContext)

    //ad a todo
    const addTodo = (todo)=>{
        return dispatch({
            type:'ADD_TODO',
            payload:{
                todo:todo
            }
        })
    }
    //get a todo
    const getTodos = ()=>{
        return dispatch({
            type:'GET_TODOS'
        })
    }
    const saveTodo = ()=>{
        return dispatch({
            type:'SAVE_TODO'
        })
    }
    const deleteTodo = (id)=>{
        return dispatch({
            type:'DELETE_TODO',
            payload:{
                id:id
            }
        })
    }
    const changeTodoState = (id)=>{
        return dispatch({
            type:'CHANGE_TODO_STATE',
            payload:{
                id:id
            }
        })
    }
    return{
        state,
        dispatch,
        addTodo,
        getTodos,
        deleteTodo,
        saveTodo,
        changeTodoState
    }
}
export default useTodo