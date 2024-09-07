'use client'
import React from 'react';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import RenderDashboard from '../../../../components/Dashboard';
import Loading from '@/app/loading';
import DashboardContent from '../../../../components/DashboardContent';
import useUserAndSubscription from '../../../../components/UserDetailsSubscription';
import FileUpload from '../../../../components/FileUpload';
import Chatbox from '../../../../components/ChatBox';

const Page = () => {
    const router = useRouter();
    const [authToken, setAuthToken] = useState(null); // Use null to represent no token initially
    const [success, setSuccess] = useState(null); // Use null to represent no success status initially
    const [error, setError] = useState('');
    const fetchAuthToken = async () => {
        try {
            const response = await fetch('/api/validate');
            const data = await response.json();

            if (response.ok) {
                if (data.success) {
                    setSuccess(data.success);
                    setAuthToken(data.response);
                } else {
                    setError('Invalid response format');
                }
            } else {
                setError(data.response || 'Failed to fetch auth token');
                setSuccess(false);
                setAuthToken(null);
            }
        } catch (err) {
            console.error('Error fetching auth token:', err);
            setError('Error fetching auth token');
            setSuccess(false);
            setAuthToken(null);
        }
    };

    useEffect(() => {
        fetchAuthToken();
        console.log('fetchAuthToken')
    }, []); // Fetch token only on component mount

    useEffect(() => {
        if (success === false) {
            router.push('/register');
        }
    }, [success, router]);

    if (authToken === null) {
        return <Loading />; // Show a loading state while fetching the token

    }

    const { token, userDetails, ... } = useUserAndSubscription();
    /* eslint-enable react-hooks/rules-of-hooks */
    const {
        token,
        userDetails,
        email,
        first_name,
        last_name,
        id,
        img_link,
        chats,
        length_chats,
        subscription,
        chatbots
    } = useUserAndSubscription();
    const { token, userDetails, ... } = useUserAndSubscription();
    /* eslint-enable react-hooks/rules-of-hooks */
    const data = {
        token: token,
        userDetails: userDetails,
        email: email,
        first_name: first_name,
        last_name: last_name,
        id: id,
        img_link: img_link,
        chats: chats,
        length_chats: length_chats,
        subscription: subscription,
        chatbots: chatbots

    }
    console.log('render')


    return (
        <div>
            <RenderDashboard >
                <Chatbox props={data} />

            </RenderDashboard>

        </div>
    );
}

export default React.memo(Page)