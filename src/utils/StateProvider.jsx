import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children, initialState, reducer }) => {
    <StateContext.Provider>
        {children}
    </StateContext.Provider>
};
