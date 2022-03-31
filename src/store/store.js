import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";
import stateSlice from "../features/state/stateSlice";
import thunkSlice from "../features/thunk/thunkSlice";
export const store = configureStore({
  reducer: { todos: todoSlice, state: stateSlice, thunk: thunkSlice },
});
