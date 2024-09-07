'use client'
import React, { useContext, useEffect, useState } from 'react';
import {
    Box, Flex, Text, SimpleGrid, Stat, StatLabel, StatNumber, VStack, Link, Icon, Button, Spacer,
    Divider, Menu, MenuItem, MenuButton, MenuList, useBreakpointValue
} from '@chakra-ui/react';

import { FaHome, FaStore, FaGripVertical, FaComments, FaRobot, FaUsers, FaLink, FaFileAlt, FaTextHeight, FaQuestionCircle, FaVideo, FaCog, FaMagic, FaSignOutAlt } from 'react-icons/fa';
import { ChatIcon, AddIcon, InfoOutlineIcon, AttachmentIcon, ChevronDownIcon } from '@chakra-ui/icons';

import { usePathname, useRouter } from 'next/navigation';

const Sidebar = ({ props }) => {
    const pathname = usePathname()
    const router = useRouter()


    const handleMenuItemClick = (id) => {
        const currentParams = new URLSearchParams(window.location.search);
        const currentId = currentParams.get("chatbotid");

        if (currentId !== id) {
            router.push(`${pathname}?chatbotid=${id}`);
        }
    };

    useEffect(() => {
        if (props.chatbots.length > 0) {
            handleMenuItemClick(props.chatbots[0]._id);
        }
    }, [props.chatbots]);



    const handleLogout = async () => {
        try {
            const response = await fetch('/api/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.ok) {



                router.push('/register');


            } else {
                console.error('HTTP Error:', data.response || 'Failed to logout');
            }
        } catch (err) {
            console.error('Error during logout:', err);
            // Optionally show an error message to the user
        }
    };

    // console.log(chatbots)
    return (
        <Box
            className='border rounded-lg font-thin'
            bg="linear-gradient(230deg,#64edab,#64edd9,#74bffc)"
            color="#26051b"
            // w={{ base: "250px", md: "250px" }}
            // h={{ base: "full", md: "full" }}
            p="4"
        >
            <VStack p={6} align="start" spacing="6">
                <Link href='/' className='underline' fontSize="2xl" mb="4" fontWeight="bold" display="flex" alignItems="center" w="full">

                    <Icon


                        as={FaHome} mr="3" />
                    <Text>EmbedAI</Text>


                </Link>

                <Menu>
                    <MenuButton bg={'cadetblue'} color={'#FAF9F6'} _hover={{ bg: '#46797a' }} _active={{ bg: '#46797a' }}

                        as={Button} rightIcon={<ChevronDownIcon />}>
                        Create Chatbot
                    </MenuButton>
                    <MenuList>
                        {
                            props.chatbots?.map((chatbot, index) => {
                                return (
                                    <MenuItem onClick={() => handleMenuItemClick(chatbot?._id)} key={chatbot?._id}>{chatbot?.chatbot_name}</MenuItem>

                                )

                            })
                        }
                        <MenuItem
                            isDisabled={
                                props.subscription?.type === 'Free' ? true :
                                    props.subscription?.type === 'Basic' && props.chatbots.length >= 3 ? true :
                                        props.subscription?.type === 'Pro' && props.chatbots.length >= 5 ? true :
                                            props.subscription?.type === 'Enterprise' && props.chatbots.length >= 7 ? true :
                                                false
                            }
                            disabled={{
                                cursor: 'not-allowed'
                            }}
                        >
                            <AddIcon mr={2} />
                            <span className='text-gray-500'>Create New</span>
                        </MenuItem>

                    </MenuList>
                </Menu>

                <VStack fontWeight={600} align="start" spacing="4" w="full">
                    <Link href="/dashboard" display="flex" alignItems="center" w="full">
                        <Icon
                            as={FaGripVertical} mr="3" color={pathname === '/dashboard' ? '#FAF9F6' : 'black'} />
                        <Text color={pathname === '/dashboard' ? '#FAF9F6' : 'black'}>Dashboard</Text>
                    </Link>
                    <Link href="/dashboard/conversations" display="flex" alignItems="center" w="full">
                        <Icon
                            color={pathname === '/dashboard/conversations' ? '#FAF9F6' : 'black'}

                            as={ChatIcon} mr="3" />
                        <Text
                            color={pathname === '/dashboard/conversations' ? '#FAF9F6' : 'black'}
                        >Conversations</Text>
                    </Link>
                    <Link href="/dashboard/test" display="flex" alignItems="center" w="full">
                        <Icon
                            color={pathname === '/dashboard/test' ? '#FAF9F6' : 'black'}

                            as={FaRobot} mr="3" />
                        <Text
                            color={pathname === '/dashboard/test' ? '#FAF9F6' : 'black'}
                        >Test my chatbot</Text>
                    </Link>
                    <Link href="/dashboard/leads" display="flex" alignItems="center" w="full">
                        <Icon
                            color={pathname === '/dashboard/leads' ? '#FAF9F6' : 'black'}

                            as={FaUsers} mr="3" />
                        <Text
                            color={pathname === '/dashboard/leads' ? '#FAF9F6' : 'black'}
                        >Leads</Text>
                    </Link>



                </VStack>

                <Divider borderColor="gray.600" />
                <Link fontWeight={600} href="/dashboard/subscriptions" display="flex" alignItems="center" w="full">
                    <Icon
                        color={pathname === '/dashboard/subscriptions' ? '#FAF9F6' : 'black'}

                        as={FaStore} mr="3" />
                    <Text
                        color={pathname === '/dashboard/subscriptions' ? '#FAF9F6' : 'black'}
                    >Subscription</Text>
                </Link>

                <Divider borderColor="gray.600" />

                <Text fontSize="lg" mt="4">Training</Text>
                <VStack fontWeight={600} align="start" spacing="4" w="full">
                    <Link href="/dashboard/train-data" display="flex" alignItems="center" w="full">
                        <Icon
                            color={pathname === '/dashboard/train-data' ? '#FAF9F6' : 'black'}

                            as={AttachmentIcon} mr="3" />
                        <Text
                            color={pathname === '/dashboard/train-data' ? '#FAF9F6' : 'black'}
                        >Train/Add Data</Text>
                    </Link>


                    <Link href="qa" display="flex" alignItems="center" w="full">
                        <Icon
                            color={pathname === '/dashboard/qa' ? '#FAF9F6' : 'black'}

                            as={InfoOutlineIcon} mr="3" />
                        <Text
                            color={pathname === '/dashboard/qa' ? '#FAF9F6' : 'black'}

                        >Q&A</Text>
                    </Link>
                    <Link href="demos" display="flex" alignItems="center" w="full">
                        <Icon
                            color={pathname === '/dashboard/demos' ? '#FAF9F6' : 'black'}

                            as={FaVideo} mr="3" />
                        <Text
                            color={pathname === '/dashboard/demos' ? '#FAF9F6' : 'black'}

                        >Videos</Text>
                    </Link>
                </VStack>

                <Divider borderColor="gray.600" />

                <Text fontSize="lg" mt="4">Customization</Text>
                <VStack align="start" spacing="4" w="full">
                    <Link href="/dashboard/quick-prompts" display="flex" alignItems="center" w="full">
                        <Icon as={FaMagic} mr="3" />
                        <Text>Quick Prompts</Text>
                    </Link>

                    <Link href="/dashboard/integrate" display="flex" alignItems="center" w="full">
                        <Text>{'</>'} Integrations</Text>
                    </Link>
                    <Link href="/dashboard/settings" display="flex" alignItems="center" w="full">
                        <Icon as={FaCog} mr="3" />
                        <Text>Settings</Text>
                    </Link>
                    <Link onClick={() => handleLogout()} cursor={'pointer'} display="flex" alignItems="center" w="full">
                        <Icon as={FaSignOutAlt} mr="3" />
                        <Text>Logout</Text>
                    </Link>

                </VStack>
            </VStack>
        </Box >
    );
};


export default React.memo(Sidebar);
