/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export default function AppProvider({children}){
    
    const name = 'SmsCompany';
    const [contacts, setContacts] = useState([]);

    const [token, setToken] = useState('');
    const [campaign, setCampaign] = useState({
        title: '',
        message: '',
        status:'',
        to: []
    });


    const [campaigns, setCampaings] = useState([]);

    const getCampaigns = async () => {
        try {
            const response = await fetch('/api/campaign');
            const data = await response.json();
            setCampaings(data.campaigns);            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCampaigns();
    }, []);


    return (
        <AppContext.Provider value={{contacts, setContacts, name, campaigns, token, setToken, campaign, setCampaign}}>
            {children}
        </AppContext.Provider>
    )
}