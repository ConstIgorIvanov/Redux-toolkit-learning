import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk(
  "thunk/getPosts",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(setPosts(res.data));
  }
);

export const deletePosts = createAsyncThunk(
    'thunk/removePost',
    async(id, {rejectWithValue, dispatch}) =>{
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        dispatch(deletePost(id));
    }
)

const thunkSlice = createSlice({
  name: "thunk",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: {
    [getPosts.pending]: () => console.log("getPosts: pending"),
    [getPosts.fulfilled]: () => console.log("getPosts: fulfilled"),
    [getPosts.rejected]: () => console.log("getPosts: rejected"),
    [deletePosts.pending]: () => console.log("removePost: pending"),
    [deletePosts.fulfilled]: () => console.log("removePost: fulfilled"),
    [deletePosts.rejected]: () => console.log("removePost: rejected"),
  },
});

export const { setPosts, deletePost } = thunkSlice.actions;
export default thunkSlice.reducer;