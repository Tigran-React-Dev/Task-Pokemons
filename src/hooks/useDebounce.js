import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const hendler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(hendler);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
