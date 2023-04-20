import React, { useState } from 'react';

export const UserContexts = React.createContext()

const UserContext = ({ children }) => {
    const [user, setUser] = useState()
    const data = { user, setUser }
    return (
        <UserContexts.Provider value={data}>
            {children}
        </UserContexts.Provider>
    )
}

export default UserContext