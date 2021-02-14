import React, { createContext, Dispatch, FC, useReducer } from "react";
import { ICombinedActions } from "../interfaces/ICombinedActions";
import { ICombinedStates } from "../interfaces/ICombinedStates";
import { combinedReducer, combinedState } from "./reducers/combinedReducers";

export const StoreContext = createContext<{
  state: ICombinedStates;
  dispatch: Dispatch<ICombinedActions>;
}>({
  dispatch: () => {},
  state: combinedState,
});

export const Store: FC = ({ children }) => {
  const [state, dispatch] = useReducer(combinedReducer, combinedState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
