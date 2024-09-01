'use client'
import { useEffect, createContext, useState } from "react";
import { decodeToken } from "../lib/utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [userDetails, setUserDetails] = useState({});
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [id, setId] = useState('');
    const [img_link, setImgLink] = useState('');
    const [chats, setChats] = useState([]);
    const [length_chats, setLengthChats] = useState(0);
    const [subscription, setSubscription] = useState({});
    const [chatbots, setChatbots] = useState([]);
    const fetchToken = async () => {
        try {
            const response = await fetch('/api/validate');
            const data = await response.json();
            if (response.ok && data.success) {
                setToken(data);
            } else {
                setToken("ERROR");
            }
        } catch (err) {
            console.error('Error fetching auth token:', err);
        }
    };
    const fetchUserDetails = async () => {
        try {
            const response = await decodeToken(token.response);
            setUserDetails(response);
            setEmail(response?.email);
            setFirstName(response?.first_name);
            setLastName(response?.last_name);
            setId(response?.id);
            setImgLink(response?.img_link);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };


    const fetchChats = async () => {
        try {
            const response = await fetch('/api/dashboard/chats');
            const data = await response.json();
            if (response.ok && data.success) {
                setChats(data.response);
                setLengthChats(data.response.length);
            } else {
                console.log("Error fetching chats");
                setChats([]);
                setLengthChats(0);
            }
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };
    const fetchSubscriptionDetails = async () => {
        try {
            const response = await fetch(`/api/dashboard/user-details?userid=${id}`);
            const data = await response.json();
            if (response.ok && data.success) {
                setSubscription(data.response.response.subscription);
                setChatbots(data.response.response.chatbot);
            } else {
                console.log("Error fetching subscription details");
            }
        } catch (error) {
            console.error('Error getting user dashboard details:', error);
        }
    };




    useEffect(() => {
        const initializeUser = async () => {
            await fetchToken();  // Ensure token is fetched first
        };

        initializeUser();
    }, []);

    useEffect(() => {
        if (token && token !== 'ERROR') {
            fetchUserDetails();
            fetchChats();
        }
    }, [token]);

    useEffect(() => {
        if (id) {
            fetchSubscriptionDetails();
        }
    }, [id]);




    return (
        <UserContext.Provider value={[
            token, userDetails, email, first_name, last_name, id, img_link,
            chats, length_chats, subscription, chatbots
        ]}>
            {children}
        </UserContext.Provider>
    );
};
