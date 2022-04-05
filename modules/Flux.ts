import React from 'react';

const storage: any = {};
let event: Event | null = null;

export function useFlux<T = any>(key: string, defaultValue?: T): [T | null, (value: T) => void] {
  const [value, setValue] = React.useState<T | null>(
    defaultValue != undefined ? defaultValue : storage[key]
  );

  function setter(newValue: T) {
    storage[key] = newValue;
    setValue(newValue);
    if (event) document.dispatchEvent(event);
  }

  React.useEffect(() => {
    event = new Event('flux-updated');
    if (defaultValue != undefined) {
      setter(defaultValue);
    }
    const listener = () => {
      setValue(storage[key]);
    };
    document.addEventListener('flux-updated', listener);
    return () => {
      document.removeEventListener('flux-updated', listener);
    };
  }, []);

  return [value, setter];
}
