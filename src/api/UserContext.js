import React, { useState } from 'react';
import { userData } from './testData';

export const UserContexts = React.createContext()

const UserContext = ({ children }) => {
    const [user, setuser] = useState(userData)
    const data = { user, setuser }
    return (
        <UserContexts.Provider value={data}>
            {children}
        </UserContexts.Provider>
    )
}

export default UserContext