import { useEffect, useState } from "react";

export const useDebounce = (value: string) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => clearTimeout(id);
  }, [value]);

  return [debouncedValue];
};
