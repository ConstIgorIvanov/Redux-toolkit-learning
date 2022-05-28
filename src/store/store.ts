import { configureStore } from '@reduxjs/toolkit';

import todoSlice from '../features/todo/todoSlice';
import stateSlice from '../features/state/stateSlice';
import thunkSlice from '../features/thunk/thunkSlice';

const store = configureStore({
  reducer: { todos: todoSlice, state: stateSlice, thunk: thunkSlice },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
