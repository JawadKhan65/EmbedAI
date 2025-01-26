"use client"
import React, { useState } from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, Image, HStack } from '@chakra-ui/react';
import CTA from '../../../components/cta';
import Steps from '../../../components/steps';

const ServicesPage = () => {
    const [activeServiceIndex, setActiveServiceIndex] = useState(0);

    const services = [
        {
            title: 'AI-Powered Customer Support',
            description:
                'Our AI-driven chatbots offer 24/7 support, handling customer inquiries and providing real-time solutions to enhance customer satisfaction and loyalty.',
            imageSrc: '/banners/banner1.png',
            imageAlt: 'AI-Powered Customer Support',
        },
        {
            title: 'AI-Powered Automation',
            description:
                'We automate repetitive tasks like data entry, invoicing, and scheduling, freeing up your team to focus on high-value projects and improving operational efficiency.',
            imageSrc: '/banners/banner2.png',
            imageAlt: 'AI-Powered Automation',
        },
        {
            title: 'Intelligent Data Insights',
            description:
                'Unlock actionable insights from your data using AI algorithms that analyze trends, patterns, and predictions, helping you make smarter business decisions.',
            imageSrc: '/banners/banner3.png',
            imageAlt: 'Intelligent Data Insights',
        },
        {
            title: 'Predictive Analytics',
            description:
                'Our predictive analytics solutions allow you to forecast sales, customer behavior, and other key metrics to stay ahead of the competition.',
            imageSrc: '/banners/banner4.png',
            imageAlt: 'Predictive Analytics',
        },
        {
            title: 'Custom AI Solutions',
            description:
                'We provide tailor-made AI solutions designed specifically to meet the needs of your business, from concept to deployment.',
            imageSrc: '/banners/banner5.png',
            imageAlt: 'Custom AI Solutions',
        },
        {
            title: 'Computer Vision Applications',
            description:
                'Integrate cutting-edge computer vision applications like facial recognition, object detection, and image analysis into your business workflows.',
            imageSrc: '/banners/banner6.png',
            imageAlt: 'Computer Vision Applications',
        },
        {
            title: 'Natural Language Processing',
            description:
                'Our NLP solutions enable your business to process and analyze text, improve customer interactions, and optimize sentiment analysis for better engagement.',
            imageSrc: '/banners/banner7.png',
            imageAlt: 'Natural Language Processing',
        },
        {
            title: 'AI-Driven Marketing',
            description:
                'Leverage AI to optimize marketing campaigns, personalize customer experiences, and enhance your ROI with data-driven strategies.',
            imageSrc: '/banners/banner8.png',
            imageAlt: 'AI-Driven Marketing',
        },
    ];

    return (
        <Box bgGradient="linear(-290deg, #2bf0c2,blue,#2d3748, #1a202c,cyan.400)" color="white" py={16} px={8}>
            <VStack align="center" spacing={8}>
                {/* Heading and description about services */}
                <Heading textAlign="center" fontSize="4xl" fontWeight="bold" letterSpacing="wider">
                    Our Expertise in AI Solutions
                </Heading>
                <Text fontSize="xl" textAlign="center" maxW="800px">
                    We specialize in providing cutting-edge AI solutions that revolutionize industries.
                    Our services are designed to automate tasks, enhance customer experience, and provide
                    actionable insights. Explore our diverse range of offerings below.
                </Text>
            </VStack>

            {/* Service Selector (Service Names) */}
            <Box mt={16} bg="gray.800" borderRadius="lg" p={6}>
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
                    {services.map((service, index) => (
                        <Box
                            key={index}
                            bg={activeServiceIndex === index ? 'blue.600' : 'gray.700'}
                            p={4}
                            borderRadius="md"
                            cursor="pointer"
                            transition="all 0.3s"
                            _hover={{ bg: 'blue.500', transform: 'scale(1.01)', shadow: 'lg' }}
                            onClick={() => setActiveServiceIndex(index)}
                        >
                            <Heading size="sm" textAlign="center" fontWeight="semibold">
                                {service.title}
                            </Heading>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>

            {/* Active Service Details */}
            <Box mt={16} p={8} bg="gray.900" borderRadius="2xl" shadow="2xl" minH="400px">
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Image
                            src={services[activeServiceIndex].imageSrc}
                            alt={services[activeServiceIndex].imageAlt}
                            objectFit="contain"
                            maxH="300px"
                            borderRadius="lg"
                            boxShadow="lg"
                            transition="all 0.3s ease-in-out"
                            _hover={{ transform: 'scale(1.05)' }}
                        />
                    </Box>
                    <VStack align="start" spacing={4}>
                        <Heading size="lg" fontWeight="bold">
                            {services[activeServiceIndex].title}
                        </Heading>
                        <Text fontSize="md" lineHeight="taller" opacity={0.85}>
                            {services[activeServiceIndex].description}
                        </Text>
                    </VStack>
                </SimpleGrid>
            </Box>
            <Steps />
        </Box>
    );
};

export default ServicesPage;
