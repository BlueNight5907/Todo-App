
import './App.css';
import { Fragment } from 'react';
import TodoHeader from './components/TodoHeader'
import Todo from './components/Todo'
import TodoProvider from './contexts/TodoContext';


function App() {
  return (
    <Fragment>
    <TodoHeader></TodoHeader>
    <TodoProvider>
      <Todo></Todo>
    </TodoProvider>
    
    </Fragment>
  );
}

export default App;
