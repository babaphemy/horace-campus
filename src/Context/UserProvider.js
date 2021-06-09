import React, { createContext, useReducer } from "react";
const initialState = {
  user: {},
  course: {
    course: "",
    target: {},
    curriculum: [
      {
        section: [
          {
            title: "",
            description: "",
            lecture: [{ title: "", video: "", slide: "", brief: "" }],
            quiz: {
              title: "",
              question: "",
              answers: [],
              correct: "",
              relatedToSection: "",
            },
            note: { title: "", note: "" },
          },
        ],
      },
    ],
  },
};
const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "joro":
        break;

      default:
        break;
    }
  }, initialState);
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
