import React, { useState, useCallback } from 'react';

import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = useCallback(
    (text: string) => setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text }]),
    []
  );
  const todoDeleteHandler = useCallback(
    (todoId: string) => setTodos(prevTodos => prevTodos.filter(({ id }) => id !== todoId)),
    []
  );


  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
