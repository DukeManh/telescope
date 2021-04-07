import { useState } from 'react';
import useSWR from 'swr';

const UseSWRWithTimeout = <T,>(
  url: string | null,
  timeout: number
): { data: T | undefined; error: Error | undefined } => {
  const [interval, setInterval] = useState(setTimeout(() => {}, 0));

  const { data, error } = useSWR(url, (u) => {
    clearTimeout(interval);
    return new Promise<T>((resolve, reject) => {
      setInterval(
        setTimeout(async () => {
          try {
            const response = await fetch(u);
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            const res = await response.json();
            resolve(res);
          } catch (err) {
            reject(err);
          }
        }, timeout)
      );
    });
  });

  return {
    data,
    error,
  };
};

export default UseSWRWithTimeout;
