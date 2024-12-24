/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export default function AppProvider({children}){
    const name = 'SmsCompany';
    const [contacts, setContacts] = useState([]);

    return (
        <AppContext.Provider value={{contacts, setContacts, name}}>
            {children}
        </AppContext.Provider>
    )
}