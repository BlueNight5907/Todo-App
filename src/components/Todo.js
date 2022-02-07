import React, { useEffect} from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import useTodo from '../customhooks/useTodo'
const  Todo = () =>{
    //const {todoList} = useContext(TopContext)
    const {
        state,
        getTodos,
        saveTodo
    } = useTodo();

    

    useEffect(() => {
        getTodos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(()=>{
        saveTodo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state])

    console.log(state)



    return(
        <div className="main-content todo">
            <ul className="todo-item-container row">
                {state.map((todo,id)=>{
                    return(
                        <TodoItem todo = {todo} id = {todo.id} key = {todo.id}></TodoItem>
                    )
                })}
            </ul>
            <AddTodo></AddTodo>
        </div>
    
    )
}
export default Todo