import React, { useState, useRef, useEffect } from 'react';
import { Box, Flex, Text, Textarea, Button, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../public/embed-ai-full.png';
import { ArrowUpIcon } from '@chakra-ui/icons';
import ReactMarkdown from 'react-markdown';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbox = ({ context }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const chatEndRef = useRef(null);
    const [response, setResponse] = useState('');

    const handleSend = async () => {
        if (input.trim()) {
            setMessages(prevMessages => [...prevMessages, { type: 'user', text: input }]);
            setInput('');
            await run(); // Ensure that run() is awaited before proceeding
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };

    const run = async () => {
        const chatSession = model.startChat({
            generationConfig,
            history: [
                {
                    role: 'user',
                    parts: [
                        { text: context },
                    ],
                },
            ],
        });

        const result = await chatSession.sendMessage(input);
        setResponse(result.response.text()); // Store response
        setMessages(prevMessages => [
            ...prevMessages,
            { type: 'support', text: result.response.text() }
        ]);
    };

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
            w={{ base: '90vw', md: '41vw', lg: "21vw" }} // Responsive width
            borderRadius={'xl'}
            mx="auto"
            my={4}
            h={{ base: '80vh', md: '600px' }} // Responsive height
            maxH="80vh" // Maximum height for larger screens
        >
            <Box m={2} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Box onClick={() => window.open(process.env.BASE_URL, '_blank')} cursor={'pointer'} display={'flex'}>
                    <Text textAlign={'unset'} mt={3} mr={2} fontSize={{ base: 'md', md: 'sm' }} fontWeight={800}>Powered By</Text>
                    <Image height={30} alt='EmbedAI' src={logo} />
                </Box>
                <Text m={1} fontSize="sm" color={'gray'}>Democratizing Human-Machine Interaction</Text>
            </Box>
            <Box
                bg="gray.50"
                borderRadius="md"
                p={4}
                flex={1}
                overflowY="auto"
                width={'full'} // Full width for responsiveness
            >
                {messages.length === 0 ? (
                    <Box height={'30vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <VStack>
                            <Text m={4} padding={8} textAlign={'center'}>
                                Chat with our AI-based Support Here
                            </Text>
                        </VStack>
                    </Box>
                ) : messages.map((msg, index) => (
                    <Flex key={index} direction={msg.type === 'user' ? 'row-reverse' : 'row'} mb={4} justify="flex-start">
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
                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </Box>
                    </Flex>
                ))}
                <div ref={chatEndRef} />
            </Box>
            <Flex height={{ base: '12vh', md: '10vh' }} as="form" onKeyDown={handleKeyDown} onSubmit={(e) => { e.preventDefault(); handleSend(); }} align="center" p={2}>
                <Textarea
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    resize="none"
                    bg="white"
                    borderColor="blue.300"
                    borderRadius="xl"
                    flex="1"
                    mr={2}
                    minH="40px"
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
                    borderRadius="full"
                    disabled={!input.trim()}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <ArrowUpIcon />
                </Button>
            </Flex>
        </VStack>
    );
};

export default Chatbox;
