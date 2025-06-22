import * as React from "react";

export function useDebounce<TValue = unknown>(
  value: TValue,
  delay = 500,
): TValue {
  const [debouncedValue, setDebouncedValue] = React.useState<TValue>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
