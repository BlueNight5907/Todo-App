import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todoReducer'

export const TodoContext = createContext()

const TodoProvider = ({children}) =>{
    const[state, dispatch] = useReducer(todoReducer,[])
    return (
        <TodoContext.Provider value={{state,dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoProvider