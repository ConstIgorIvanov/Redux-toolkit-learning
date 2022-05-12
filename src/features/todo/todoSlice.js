import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    sortTodoAZ: (state) => {
      state.todos.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    sortTodoZA: (state) => {
      state.todos.sort((a, b) => (a.name > b.name ? -1 : 1));
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, sortTodoAZ, sortTodoZA } =
  todoSlice.actions;
export default todoSlice.reducer;
