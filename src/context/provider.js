import React, { createContext, useReducer } from 'react';
import authInitialState from './initialsStates/authState';
import profileInitialState from './initialsStates/profileInitialState';
import auth from './reducers/auth';
import Profile from './reducers/Profile';


export const GlobalContext = createContext({});


const GlobalProvider = ({ childen }) => {

    const [authState, authDispatch] = useReducer(auth, authInitialState);
    const [ProfileState, ProfileDispatch] = useReducer(Profile, profileInitialState);

    return (
        <GlobalContext.Provider
            value={{ authState, ProfileState, authDispatch, ProfileDispatch }}>
            {childen}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;