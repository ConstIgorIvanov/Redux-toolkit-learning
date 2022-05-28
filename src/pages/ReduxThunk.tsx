import PostsItem from '../components/Postsitem';
import { useAppDispatch, useAppSelector } from '../hook';
import { getPosts } from '../features/thunk/thunkSlice';

const ReduxThunk: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.thunk.posts);

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
