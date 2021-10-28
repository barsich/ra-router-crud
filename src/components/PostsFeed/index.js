import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostsStateContext } from '../../context';
import useJsonFetch from '../../hooks';
import Post from './Post';

export default function PostsFeed() {
  const { posts, isLoading, hasError } = useContext(PostsStateContext);
  
  // const [data, isLoading, hasError] = useJsonFetch(`${process.env.REACT_APP_HOST}/posts`);

  // const handleOpenPost = () => {};
  // const handleEditPost = () => {};
  // const handleDeletePost = () => {};
  // const handleSavePost = () => {};
  // const handleCancelEdit = () => {};

  return (
    <>
      <Link to="/posts/new">
        <button className="create-post-button button">Создать пост</button>
      </Link>
      {isLoading && <p className="loading">Loading...</p>}
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
}
