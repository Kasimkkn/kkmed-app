import { useEffect, useState } from 'react';

// custome hook  for search with some delay to reduce no. of API calls
export const useDebounce = (value: string, milliseconds: number = 500) => {
  const [debounceValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, milliseconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliseconds]);

  return debounceValue;
};
