import PostsItem from "../components/Postsitem";
import {useDispatch, useSelector} from 'react-redux'
import {getPosts} from '../features/thunk/thunkSlice'

const ReduxThunk = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.thunk.posts)
  return (
    <div>
      <h1 className="title">Redux Toolkit Async Thunk</h1>
      <button onClick={() => dispatch(getPosts())}>Get Post</button>
      {posts?.map((posts) => (
        <PostsItem key={posts.id} id={posts.id} title={posts.title}></PostsItem>
      ))}
    </div>
  );
};

export default ReduxThunk;
