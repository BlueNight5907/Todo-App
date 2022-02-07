const todoReducer = (state, action)=>{
    const {type, payload} = action
    switch(type){
        case 'GET_TODOS':
            console.log('getting todos')
            const todos = localStorage.getItem('todoList')
            if(todos) state = JSON.parse(todos)
            return state
        case 'SAVE_TODO':
            console.log('saving todos')
            localStorage.setItem('todoList',JSON.stringify(state))
            return state
        case 'ADD_TODO':
            console.log('add todo')
            return [...state,payload.todo]
        case 'DELETE_TODO':
            console.log('delete todo')
            return state.filter(todo => todo.id !== payload.id)
        case 'CHANGE_TODO_STATE':
            console.log('change todo state')
            return state.map(todo => todo.id===payload.id?{
                ...todo,
                status:!todo.status
            }: todo)
        default:
            return state
    }
}
export default todoReducer