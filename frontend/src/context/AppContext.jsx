/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export default function AppProvider({children}){
    
    const name = 'SmsCompany';
    const [contacts, setContacts] = useState([]);

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const [connects, setConnects] = useState(null);

    async function getUser(){

        const res = await fetch('/api/user',{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });

        if (res.ok) {
            const data = await res.json();
            setUser(data.user);
            setConnects(data.connects);
            console.log(data);
        } else {
            console.error('Failed to fetch user:', res.statusText);
        }
        
    }

    useEffect(() => {
        if(token){
            getUser();
        }
    }, [token]);

    const [campaign, setCampaign] = useState({
        title: '',
        message: '',
        status:'',
        to: []
    });


    const [campaigns, setCampaings] = useState([]);

    const getCampaigns = async () => {
        try {
            const response = await fetch('/api/campaign', {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            const data = await response.json();
            setCampaings(data.campaigns);   
            console.log(data);
                     
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        console.log(campaigns);
        
        getCampaigns();
    }, []);


    return (
        <AppContext.Provider value={{contacts, setContacts, name, user, setUser, connects, campaigns, token, setToken, campaign, setCampaign}}>
            {children}
        </AppContext.Provider>
    )
}