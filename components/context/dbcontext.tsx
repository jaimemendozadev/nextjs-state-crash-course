// @ts-nocheck
'use client';

import { createContext, useState } from 'react';


export const DBContext = createContext({user: {}, userHandler: () => null});


export const DBWrapper = ({children}) => {

    const [currentUser, updateUser] = useState({});

    const userHandler = ({updates}) => {

        const updatedUser = {...currentUser, ...updates};

        updateUser(updatedUser)
    }


    return (
        <DBContext.Provider value={{user: currentUser, userHandler}}>
            {children}
        </DBContext.Provider>
    )
}