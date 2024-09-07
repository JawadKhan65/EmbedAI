'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import RenderDashboard from '../../../../components/Dashboard';
import Loading from '@/app/loading';
import useUserAndSubscription from '../../../../components/UserDetailsSubscription';
import FileUpload from '../../../../components/FileUpload';

const Page = () => {
    const router = useRouter();
    const [authToken, setAuthToken] = useState(null); // Use null to represent no token initially
    const [success, setSuccess] = useState(null); // Use null to represent no success status initially
    const [error, setError] = useState('');

    // Fetch auth token
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
                    setSuccess(false);
                    setAuthToken(null);
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
    }, []); // Fetch token only on component mount

    useEffect(() => {
        if (success === false) {
            router.push('/register');
        }
    }, [success, router]);

    // Call the hook unconditionally
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
    } = useUserAndSubscription() || {};

    // Show a loading state while fetching the token
    if (authToken === null) {
        return <Loading />;
    }

    // Show an error message if there was an error
    if (error) {
        return <div>Error: {error}</div>;
    }

    const data = {
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
    };

    console.log('render');

    return (
        <div>
            <RenderDashboard>
                <FileUpload props={data} />
            </RenderDashboard>
        </div>
    );
};

export default React.memo(Page);
