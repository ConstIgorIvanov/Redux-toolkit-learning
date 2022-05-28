import { deletePosts } from '../features/thunk/thunkSlice';
import { useDispatch } from 'react-redux';

interface PostItemProps {
  id: number;
  title: string;
}

const PostsItem: React.FC<PostItemProps> = ({ id, title }) => {
  const dispatch = useDispatch();

  return (
    <div className="item__container">
      <div>{id}</div>
      <div>{title}</div>
      <button onClick={() => dispatch(deletePosts(id))}>delete</button>
    </div>
  );
};

export default PostsItem;
