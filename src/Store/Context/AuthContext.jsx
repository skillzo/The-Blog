import { useReducer } from "react";
import { useContext, useState } from "react";
import { createContext } from "react";

const NewsContext = createContext();
const keyword = [
  "news",
  "sport",
  "tech",
  "world",
  "finance",
  "politics",
  " business",
  "economics",
  "entertainment",
  "elon musk",
  "joe biden",
  "fashion",
  "education",
  "housing",
  "employment",
  "liverpool",
  "epl",
  "la liga",
  "football",
  "dior",
  "psg",
  "chelsea",
  "manchesther united",
  "manchesther city",
  "sterling",
  "army",
  "war",
  "trade",
  "commerce",
  "nigeria",
  "election",
  "breaking new",
  "drake",
  "music",
  "culture",
  "movies",
];
const randomNumber = Math.floor(Math.random() * keyword.length);

const InitialState = {
  comment: [],
  commentViews: 0,
  bookmarks: [],
};
export const ACTIONS = {
  ADD_COMMENT: "add-comment",
  REMOVE_COMMENT: "remove-comment",
  ADD_BOOKMARKS: "add-bookmarks",
  REMOVE_BOOKMARKS: "remove-bookmarks",
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
    case ACTIONS.ADD_BOOKMARKS:
      return {
        ...InitialState,
        comment: [
          ...InitialState.bookmarks,
          { ...payload.value, id: Math.random() },
        ],
      };
    case ACTIONS.REMOVE_BOOKMARKS:
      return {
        ...InitialState,
        comment: InitialState.bookmarks.filter((bookmarks) => {
          return bookmarks.id !== payload.currItem;
        }),
      };
    default:
      console.log(`${type} was not defined here`);
  }
};

export const NewsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const [input, setInput] = useState(`${keyword[randomNumber]}`);
  const [isClicked, setIsClicked] = useState(true);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const value = {
    input,
    setInput,
    inputHandler,
    state,
    dispatch,
    isClicked,
    setIsClicked,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export const useNews = () => {
  return useContext(NewsContext);
};
