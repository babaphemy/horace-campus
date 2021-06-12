import React, { createContext, useReducer } from "react";
import { demoCourse } from "../util/mockData";
const initialState = {
  user: {},
  course: demoCourse,
};
const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "joro":
        break;

      default:
        return state;
    }
  }, initialState);
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
