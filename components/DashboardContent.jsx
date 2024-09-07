
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
import { usePathname, useSearchParams } from 'next/navigation';
import { UserContext } from '../context/userdetails';
import FileUpload from './FileUpload';
import TopBar from './TopBar';



const DashboardContent = ({ props }) => {
    const searchparams = useSearchParams()

    const chatbotid = searchparams.get('chatbotid')

    const [trainingData, setTrainingData] = useState([]);



    useEffect(() => {
        const fetchTrainingData = async () => {
            try {
                console.log(props.chatbots)
                const response = await fetch(`/api/dashboard/data?userid=${props.id}&chatbot_id=${chatbotid}`);
                const data = await response.json();

                if (response.ok && data.success) {
                    setTrainingData(data.response);
                } else {
                    throw new Error('Failed to fetch training data.');
                }
            } catch (error) {
                console.error('Error fetching training data:', error);
            }
        };
        fetchTrainingData();
    }, [chatbotid]);


    // Chart Data
    const chartData = {
        labels: ['Previous Day', 'Today', 'Previous Week', 'This Month'],
        datasets: [
            {
                label: 'Prompts Utilized',
                data: [10, 15, 50, 200],
                fill: false,
                backgroundColor: '#64edab',
                borderColor: '#64edab',
            },
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <Box p="6" flex="1" bg="gray.50" >
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
                <Stat boxShadow="sm" p="4" borderRadius="md" bg="white">
                    <StatLabel>Total Messages</StatLabel>
                    <StatNumber>{props.length_chats}</StatNumber>
                </Stat>
                <Stat boxShadow="sm" p="4" borderRadius="md" bg="white">
                    <StatLabel>Total Conversations</StatLabel>
                    <StatNumber>{props.length_chats}</StatNumber>
                </Stat>
                <Stat boxShadow="sm" p="4" borderRadius="md" bg="white">
                    <StatLabel>Total Training Items</StatLabel>
                    <StatNumber>{trainingData.length}</StatNumber>
                </Stat>
            </SimpleGrid>

            {/* Custom Chart */}
            <Box mt="6" boxShadow="sm" p="6" bg="white" borderRadius="md">
                <Text fontSize="lg" fontWeight="bold" mb="4">Chat History</Text>
                <Box>
                    <Bar data={chartData} options={chartOptions} />
                </Box>
            </Box>
        </Box>
    );
};
export default React.memo(DashboardContent)