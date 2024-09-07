'use client';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userdetails';

const useUserAndSubscription = () => {
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
    } = useContext(UserContext);

    console.log("user hook");

    return {
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
};

export default useUserAndSubscription;
