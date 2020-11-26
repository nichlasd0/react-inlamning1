import React, { useState, createContext } from 'react'
const value:any = false;
export const UserContext = createContext(value)

export const UserProvider = (props:any) => {
    const [authenticatedUser, setAuthenticatedUser] = useState()
    return (
        <UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
            {props.children}
        </UserContext.Provider>
    )
}