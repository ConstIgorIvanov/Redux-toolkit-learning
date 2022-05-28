import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
  id: number;
  name: string;
  completed: boolean;
};
type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    sortTodoAZ: (state) => {
      state.todos.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    sortTodoZA: (state) => {
      state.todos.sort((a, b) => (a.name > b.name ? -1 : 1));
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, sortTodoAZ, sortTodoZA } = todoSlice.actions;
export default todoSlice.reducer;
