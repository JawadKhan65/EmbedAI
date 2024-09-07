import React, { useState, useRef, useEffect } from 'react';
import { Box, Flex, Text, Textarea, Button, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../public/embed-ai-full.png'
import { ArrowUpIcon } from '@chakra-ui/icons';


const Chatbox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const chatEndRef = useRef(null); // Ref for the bottom of the chat

    const handleSend = async () => {
        if (input.trim()) {
            // Add user message
            setMessages(prevMessages => [...prevMessages, { type: 'user', text: input }]);

            // Simulate support response after a delay
            setInput('');
            await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
            setMessages(prevMessages => [
                ...prevMessages,
                { type: 'support', text: 'This is a response from the support team.' }
            ]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { // Check if 'Enter' key is pressed without Shift
            e.preventDefault();
            handleSend();
        }
    }

    useEffect(() => {
        // Scroll to the bottom of the chat
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <VStack
            border={'2px'}
            borderRightColor={'#64ede5'}
            borderTopColor={'#64ede5'}
            borderLeftColor={'blue.300'}
            borderBottomColor={'blue.300'}

            bg={'gray.50'}
            spacing={4}
            align="stretch"
            w={'41vw'}
            borderRadius={'xl'}
            mx="auto"
            my={4}
            h="600px" // Fixed height for scrolling
        >
            <Box m={2} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
                <Box onClick={() => window.open(process.env.BASE_URL, '_blank')} cursor={'pointer'} display={'flex'}>
                    <Text textAlign={'unset'} mt={3} mr={2} fontSize={'sm'} fontWeight={800}>Powered By</Text>
                    <Image height={30} alt='EmbedAI' src={logo} />

                </Box>

                <Text m={1} fontSize="sm" color={'gray'} >Democratizing Human Machine Interaction</Text>
            </Box>
            <Box

                bg="gray.50"
                borderRadius="md"
                // boxShadow="md"
                p={4}
                flex={1}
                overflowY="auto"
                width={'39vw'}

            >

                {
                    messages.length === 0 ?
                        <Box height={'30vh'} width={'35vw'} display={'flex'} justifyContent={'center'} alignItems={'center'}>

                            <VStack>
                                <Text m={4} padding={8} textAlign={'center'} >

                                    Chat with  our AI-based Support Here
                                </Text>
                            </VStack>
                        </Box> : messages.map((msg, index) => (
                            <Flex
                                key={index}
                                direction={msg.type === 'user' ? 'row-reverse' : 'row'}
                                mb={4}
                                justify="flex-start"
                            >
                                <Box
                                    bg={msg.type === 'user' ? '#64edd9' : '#64ede5'}
                                    color={'black'}
                                    p={3}
                                    borderRadius="2xl"
                                    maxW="80%"
                                    border={'1px'}
                                    borderColor={'blue.200'}
                                    textAlign={msg.type === 'user' ? 'right' : 'left'}
                                >
                                    <Text>{msg.text}</Text>
                                </Box>
                            </Flex>
                        ))}
                <div ref={chatEndRef} /> {/* Empty div to scroll into view */}



            </Box>

            <Flex height={'10vh'} as="form" onKeyDown={handleKeyDown} onSubmit={(e) => { e.preventDefault(); handleSend(); }} align="center" p={2}>
                <Textarea
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    resize="none"
                    bg="white"

                    borderColor="blue.300"
                    borderRadius="xl" // Rounded corners
                    flex="1" // Full width
                    mr={2}
                    minH="40px" // Adjust height
                    _hover={{ border: '#64ede5', outline: '#64ede5', borderColor: '#64ede5', ring: '1px', ringColor: '#64ede5' }}
                    _focus={{ border: '#64ede5', outline: '#64ede5', borderColor: '#64ede5', ring: '1px', ringColor: '#64ede5' }}
                    _active={{ border: '#64ede5', outline: '#64ede5', borderColor: '#64ede5', ring: '1px', ringColor: '#64ede5' }}
                />
                <Button
                    border={'1px'}
                    borderColor={'blue.600'}
                    type="submit"
                    _hover={{ bg: '#64ede5', color: 'black' }}
                    bg="#64edd9"
                    height={10}
                    width={10}
                    color={'black'}
                    borderRadius="full" // Rounded button
                    disabled={!input.trim()}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"

                >
                    <ArrowUpIcon />
                </Button>
            </Flex>

        </VStack >
    );
};

export default Chatbox;
