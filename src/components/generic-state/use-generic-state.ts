import { useState } from "react";

type UseGenericStateReturn<T> = [T, (newState: T | ((prevState: T) => T)) => void];

export const useGenericState = <T>(initialState: T): UseGenericStateReturn<T> => {
  const [state, setState] = useState<T>(initialState);

  const updateState = (newState: T | ((prevState: T) => T)): void => {
    if (typeof newState === "function") {
      setState((prevState) => (newState as (prevState: T) => T)(prevState));
      return;
    }

    setState(newState);
  };

  return [state, updateState];
};
