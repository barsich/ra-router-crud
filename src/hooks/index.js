import { useEffect, useState } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url, opts)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка подключения, обновите страницу');
        }
        return response.json();
      })
      .then((result) => setData(result))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url, opts]);

  return [data, isLoading, hasError];
}
