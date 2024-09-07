'use client'
import React, { useContext, useEffect, useState } from 'react';
import {
    Box, Flex, Text, SimpleGrid, Stat, StatLabel, StatNumber, VStack, Link, Icon, Button, Spacer,
    Divider, Menu, MenuItem, MenuButton, MenuList, useBreakpointValue
} from '@chakra-ui/react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FaHome, FaStore, FaGripVertical, FaComments, FaRobot, FaUsers, FaLink, FaFileAlt, FaTextHeight, FaQuestionCircle, FaVideo, FaCog, FaMagic, FaSignOutAlt } from 'react-icons/fa';
import { ChatIcon, AddIcon, InfoOutlineIcon, AttachmentIcon, ChevronDownIcon } from '@chakra-ui/icons';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import { usePathname } from 'next/navigation';
import { UserContext } from '../context/userdetails';
import FileUpload from './FileUpload';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';
import useUserAndSubscription from './UserDetailsSubscription';


const RenderDashboard = ({ children }) => {
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

    return (
        <Flex direction={{ base: 'column', md: 'row' }}>
            <Sidebar props={data} />
            <Box flex="1">
                <TopBar props={data} />
                {/* <FileUpload props={data} /> */}
                {children}
            </Box>
        </Flex>
    );
};

export default React.memo(RenderDashboard);
