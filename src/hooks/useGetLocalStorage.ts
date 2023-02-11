import { useState } from 'react';

export default function useGetLocalStorage(
  key: string,
  initialValue: string | undefined = ''
) {
  const [storedValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? item : initialValue;

    } catch (error) {

      console.log(error);
      return initialValue;
    }
  });

  return storedValue;
}
