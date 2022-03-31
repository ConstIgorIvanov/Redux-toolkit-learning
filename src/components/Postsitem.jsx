import { deletePosts } from "../features/thunk/thunkSlice";
import {useDispatch} from 'react-redux'

const PostsItem = ({id, title}) =>{
const dispatch = useDispatch();

return (
  <div className="item__container">
    <div>{id}</div>
    <div>{title}</div>
    <button onClick={() => dispatch(deletePosts(id))}>delete</button>
  </div>
);
}

export default PostsItem;