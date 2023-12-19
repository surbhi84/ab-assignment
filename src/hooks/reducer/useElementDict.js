import { useReducer } from "react";
import { ADDELEMENT, EDITELEMENT, REMOVEELEMENT } from "./types";

export const useElementDict = () => {
  const initialElementDict = {};

  const getElementDict = (state, { type, payload }) => {
    switch (type) {
      case ADDELEMENT: {
        return { ...state, ...payload };
      }

      case EDITELEMENT: {
        return {
          ...state,
          [payload.id]: { ...state[payload.id], ...payload.details },
        };
      }

      case REMOVEELEMENT: {
        delete state[payload];
        return { ...state };
      }
    }
  };

  const [elementsDict, elementsDispatch] = useReducer(
    getElementDict,
    initialElementDict
  );

  return [elementsDict, elementsDispatch];
};
