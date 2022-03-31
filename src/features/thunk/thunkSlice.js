import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
//https://jsonplaceholder.typicode.com/posts

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk(
  'thunk/getPosts',
  async (_, {rejectWithValue, dispatch}) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    dispatch(setPosts(res.data));
  }
)

const thunkSlice = createSlice({
  name: "thunk",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: {
    [getPosts.pending]: () => console.log("pending"),
    [getPosts.fulfilled]: () => console.log("fulfilled"),
    [getPosts.rejected]: () => console.log("rejected"),
  },
});

export const { setPosts } = thunkSlice.actions;
export default thunkSlice.reducer;
