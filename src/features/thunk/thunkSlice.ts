import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type Posts = {
  id: number;
  title: string;
};
type PostsState = {
  posts: Posts[];
};

const initialState: PostsState = {
  posts: [],
};

export const getPosts = createAsyncThunk(
  'thunk/getPosts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPosts(res.data));
  },
);

export const deletePosts = createAsyncThunk(
  'thunk/removePost',
  async (id: number, { rejectWithValue, dispatch }) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch(deletePost(id));
  },
);

const thunkSlice = createSlice({
  name: 'thunk',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Posts[]>) => {
      state.posts = action.payload;
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { setPosts, deletePost } = thunkSlice.actions;
export default thunkSlice.reducer;
