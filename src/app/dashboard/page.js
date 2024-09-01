'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import RenderDashboard from '../../../components/Dashboard';
import Loading from '../loading';
import DashboardContent from '../../../components/DashboardContent';
import useUserAndSubscription from '../../../components/UserDetailsSubscription';

export default function Page() {
    const router = useRouter();
    const [authToken, setAuthToken] = useState(null);
    const [success, setSuccess] = useState(null);
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
    }, []);

    useEffect(() => {
        if (success === false) {
            router.push('/register');
        }
    }, [success, router]);

    // Ensure the hook is always called, even if authToken is null
    const [token, userDetails, email, first_name, last_name, id, img_link,
        // eslint-disable-next-line react-hooks/rules-of-hooks

        chats, length_chats, subscription, chatbots] = useUserAndSubscription();

    if (authToken === null) {
        return <Loading />;
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

    return (
        <div>
            <RenderDashboard>
                <DashboardContent props={data} />
            </RenderDashboard>
        </div>
    );
}
