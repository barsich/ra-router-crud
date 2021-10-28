import { createContext, useEffect, useState } from 'react';
import useJsonFetch from '../hooks';

export const PostsStateContext = createContext();

export default function PostsStateProvider({ children }) {
  // const [posts, setPosts] = useState([]);
  // const [isLoading, setLoading] = useState(false);
  // const [hasError, setError] = useState(null);

  const [data, isLoading, hasError] = useJsonFetch(`${process.env.REACT_APP_HOST}/posts`);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`${process.env.REACT_APP_HOST}/posts`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Ошибка подключения, обновите страницу');
  //       }
  //       return response.json();
  //     })
  //     .then((result) => {
  //       setPosts(result);
  //     })
  //     .catch((error) => setError(error.message))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <PostsStateContext.Provider value={{ data, isLoading, hasError }}>
      {children}
    </PostsStateContext.Provider>
  );
}
