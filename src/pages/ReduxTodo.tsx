import React from 'react';
import { useAppSelector, useAppDispatch } from '../hook';
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  sortTodoAZ,
  sortTodoZA,
} from '../features/todo/todoSlice';

const ReduxTodo: React.FC = () => {
  const [value, setValue] = React.useState('');
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.todos.todos);

  const addTodoHandler = () => {
    if (value !== '') {
      dispatch(addTodo({ id: list.length + 1, name: value, completed: false }));
      setValue('');
    }
  };
  return (
    <div>
      <h1 className="title">Redux Toolkit Todo App</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={() => addTodoHandler()}>ADD</button>
      <button onClick={() => dispatch(sortTodoAZ())}> SORT A - Z </button>
      <button onClick={() => dispatch(sortTodoZA())}> SORT Z - A </button>
      <div>
        {list.map((i) => {
          return (
            <li key={i.id} className={i.completed ? 'completed' : ''}>
              <div>{i.name}</div>
              <button onClick={() => dispatch(toggleTodo(i.id))}>
                {i.completed ? 'uncompleted' : 'completed'}
              </button>
              <button onClick={() => dispatch(deleteTodo(i.id))}>delete</button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default ReduxTodo;
