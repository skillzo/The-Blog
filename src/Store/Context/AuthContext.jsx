import { useReducer } from "react";
import { useContext, useState } from "react";
import { createContext } from "react";

const NewsContext = createContext();

const InitialState = {
  comment: [],
  commentViews: 0,
};
export const ACTIONS = {
  ADD_COMMENT: "add-comment",
  REMOVE_COMMENT: "remove-comment",
};
const reducer = (InitialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_COMMENT:
      return {
        ...InitialState,
        comment: [...InitialState.comment, payload.value],
      };
    case ACTIONS.REMOVE_COMMENT:
      return {
        ...InitialState,
        comment: InitialState.comment.filter((comments) => {
          return comments.id !== payload.id;
        }),
      };
    default:
      console.log(`${type} was not defined here`);
  }
};

export const NewsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const value = {
    input,
    inputHandler,
    state,
    dispatch,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export const useNews = () => {
  return useContext(NewsContext);
};
