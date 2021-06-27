import React, { createContext, ReactElement, useReducer } from "react";
import { demoCourse } from "../util/mockData";
import { COURSE_ADD, USER_ADD } from "./Actions";
const initialState: any = {
  user: {},
  course: demoCourse, // load user's draft
};
interface Props {
  children: ReactElement;
}
const UserContext = createContext(initialState);

const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case USER_ADD: {
        return {
          ...state,
          user: action.data,
        };
      }
      case COURSE_ADD: {
        return {
          ...state,
          course: action.data,
        };
      }

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
