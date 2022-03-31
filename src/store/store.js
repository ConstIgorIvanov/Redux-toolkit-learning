import {configureStore} from '@reduxjs/toolkit'

import stateSlice from '../features/state/stateSlice'
import todoSlice from '../features/todo/todoSlice'
import thunkSlice from '../features/thunk/thunkSlice'

export const store = configureStore({
  reducer: {
    state: stateSlice,
    todos: todoSlice,
    thunk: thunkSlice,
  },
});