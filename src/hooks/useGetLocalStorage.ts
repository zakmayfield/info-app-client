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
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  return storedValue;
}
