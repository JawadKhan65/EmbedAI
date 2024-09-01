'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import google_logo from '../../../public/download.webp';
import embed_ai_logo from '../../../public/embed-ai.png';

const OAuthPage = () => {
    const [authURL, setAuthURL] = useState('');
    const router = useRouter();

    // Fetch the authorization URL from the backend
    useEffect(() => {
        const fetchAuthURL = async () => {
            try {
                const response = await fetch('/api/oauth', {
                    method: 'POST',
                });
                const url = await response.text();
                setAuthURL(url);
            } catch (error) {
                console.error('Failed to fetch auth URL:', error);
            }
        };

        fetchAuthURL();
    }, []);

    const handleLogin = () => {
        if (authURL) {
            window.location.href = authURL;
        }
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        // Only handle OAuth callback if the 'code' parameter is present in the URL
        if (code) {
            const handleCallback = async () => {
                try {
                    const response = await fetch(`/api/oauth?code=${code}`, {
                        method: 'GET',
                    });

                    const result = await response.json();
                    console.log('OAuth2 callback result:', result);

                    if (result.redirectTo) {
                        router.push(result.redirectTo);
                    }
                } catch (error) {
                    console.error('OAuth2 callback handling failed:', error);
                }
            };

            handleCallback();
        }
    }, [router]);

    const handleLoginSimple = async (firstName, lastName, email, password) => {
        try {
            console.log('Logging in with email:', firstName, lastName, email, password);
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email, password }),
            });

            if (!response.ok) {
                throw new Error('Failed to authenticate');
            }

            const data = await response.json();

            if (data.success) {
                router.push('/dashboard');
            } else {
                console.error('Authentication failed:', data);
            }

        } catch (error) {
            console.error('Failed to login:', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50 pt-20">
            <div className="bg-white p-8 rounded-lg shadow-lg ring-1 w-full max-w-lg mx-4">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h1>
                <button
                    onClick={handleLogin}
                    disabled={!authURL}
                    className="w-full font-semibold flex items-center justify-center border border-gray-300 rounded-full py-2 px-4 mb-4 hover:bg-blue-100 transition duration-300"
                >
                    <Image src={google_logo} alt="Google Logo" width={24} height={24} className="mr-2" />
                    Google
                </button>
                <div className="flex items-center justify-between mb-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-4 text-gray-500">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <form>
                    <div className="mb-4">
                        <label htmlFor="f_name" className="block text-gray-700 font-medium mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="f_name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="l_name" className="block text-gray-700 font-medium mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="l_name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => handleLoginSimple(
                            document.getElementById('f_name').value,
                            document.getElementById('l_name').value,
                            document.getElementById('email').value,
                            document.getElementById('password').value
                        )}
                        className="w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
                    >
                        <div className='bg-white rounded-full h-6 w-6 mr-2 flex items-center justify-center'>
                            <Image src={embed_ai_logo} alt="Embed AI Logo" width={24} height={24} />
                        </div>
                        Login with Email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OAuthPage;
