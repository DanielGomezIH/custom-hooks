import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || '[]');
};

const useTodos = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: newTodo,
    };

    dispatchTodo(action);
  };

  const handleDeleteTodo = (todo) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: todo,
    };

    dispatchTodo(action);
  };

  const handleToggleTodo = (todo) => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: todo,
    };

    dispatchTodo(action);
  };

  return {
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todos,
    todosCount: todos.length,
    todosPendingCount: todos.filter((todo) => !todo.done).length,
  };
};

export default useTodos;
