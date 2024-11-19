'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, SimpleGrid, Button, Heading, Text, VStack } from '@chakra-ui/react';
import embedai from '../public/embed-ai-full.png';
import Image from 'next/image';



const Features1 = ({ services }) => {
  // Set the first service as the default active service
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  return (
    <Box p={5} maxW="1200px" mx="auto">
      {/* Buttons for Services */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5} mb={8}>
        {services.map((service, index) => (
          <Button
            key={index}
            onClick={() => setActiveServiceIndex(index)}
            variant="outline"
            colorScheme={activeServiceIndex === index ? 'blue' : 'gray'}
            _hover={{ bg: 'cyan.100' }}
            fontWeight="bold"
            fontSize="medium"
          >
            {service.title}
          </Button>
        ))}
      </SimpleGrid>

      {/* Active Service Details */}
      <Box borderWidth="1px" borderRadius="lg" p={5} boxShadow="md">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          {/* Service Image */}
          <Box>
            <Image
              src={embedai}
              alt={services[activeServiceIndex].imageAlt}
              borderRadius="md"
              boxSize="100%"
              objectFit="cover"
            />
          </Box>

          {/* Service Content */}
          <VStack align="start" spacing={4}>
            <Heading size="lg">{services[activeServiceIndex].title}</Heading>
            <Text fontSize="md" color="gray.600">
              {services[activeServiceIndex].description}
            </Text>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

Features1.defaultProps = {
  services: [
    {
      title: 'AI-Powered Customer Support',
      description: 'Deliver unparalleled customer experiences with our 24/7 AI-driven chatbots. They seamlessly handle customer inquiries, provide real-time solutions, and significantly reduce response time, ensuring customer satisfaction and loyalty.',
      imageSrc: embedai,
      imageAlt: 'AI-Powered Customer Support',
    },
    {
      title: 'AI-Powered Automation',
      description: 'Revolutionize your operations by automating repetitive tasks such as data entry, invoicing, and scheduling. Our AI-powered automation solutions enhance productivity and allow your team to focus on strategic initiatives.',
      imageSrc: 'https://via.placeholder.com/600x400?text=Automation',
      imageAlt: 'AI-Powered Automation',
    },
    {
      title: 'Intelligent Data Insights',
      description: 'Turn your data into a goldmine of actionable insights. Leverage our AI algorithms to uncover patterns, trends, and predictions that drive smarter business decisions and higher ROI.',
      imageSrc: 'https://via.placeholder.com/600x400?text=Data+Insights',
      imageAlt: 'Intelligent Data Insights',
    },
    {
      title: 'Predictive Analytics',
      description: 'Anticipate future trends with AI-powered predictive analytics. From sales forecasting to risk management, gain a competitive edge by preparing for opportunities and challenges before they arise.',
      imageSrc: 'https://via.placeholder.com/600x400?text=Predictive+Analytics',
      imageAlt: 'Predictive Analytics',
    },
    {
      title: 'Natural Language Processing (NLP)',
      description: 'Enhance communication and data processing with NLP solutions. Whether it’s automating customer queries, analyzing sentiment, or extracting key insights from text, our NLP tools redefine efficiency and precision.',
      imageSrc: 'https://via.placeholder.com/600x400?text=NLP',
      imageAlt: 'Natural Language Processing',
    },
    {
      title: 'AI-Driven Decision-Making',
      description: 'Empower your leadership team with AI-driven tools that support strategic decisions. From optimizing supply chains to personalizing customer experiences, our solutions ensure every decision is backed by data.',
      imageSrc: 'https://via.placeholder.com/600x400?text=Decision+Making',
      imageAlt: 'AI-Driven Decision-Making',
    },
    {
      title: 'Generative AI Solutions',
      description: 'Unlock creativity with generative AI. Design personalized content, create stunning visuals, and develop innovative products effortlessly, setting your brand apart from the competition.',
      imageSrc: 'https://via.placeholder.com/600x400?text=Generative+AI',
      imageAlt: 'Generative AI Solutions',
    },
    {
      title: 'Advanced Machine Learning',
      description: 'Harness the power of cutting-edge machine learning models tailored to your business needs. Our models drive growth, optimize performance, and solve complex problems with unparalleled accuracy.',
      imageSrc: 'https://via.placeholder.com/600x400?text=Machine+Learning',
      imageAlt: 'Advanced Machine Learning',
    },
    {
      title: 'Customer Experience AI',
      description: 'Personalize every customer interaction with AI-driven solutions that analyze behavior, predict needs, and create unforgettable experiences. Drive engagement and build lasting relationships.',
      imageSrc: 'https://via.placeholder.com/600x400?text=Customer+Experience',
      imageAlt: 'Customer Experience AI',
    },
    {
      title: 'AI Workflow Optimization',
      description: 'Maximize efficiency and eliminate bottlenecks with AI-optimized workflows. Automate task assignments, streamline approvals, and boost productivity across all departments.',
      imageSrc: 'https://via.placeholder.com/600x400?text=Workflow+Optimization',
      imageAlt: 'AI Workflow Optimization',
    },
    {
      title: 'Business Process Automation',
      description: 'Automate complex business processes such as procurement, HR, and finance operations with tailored AI solutions. Save time, reduce costs, and enhance accuracy with our cutting-edge tools.',
      imageSrc: 'https://via.placeholder.com/600x400?text=Business+Automation',
      imageAlt: 'Business Process Automation',
    },
    {
      title: 'Custom AI Models',
      description: 'Develop AI models tailored to your unique challenges. From image recognition to natural language processing, our custom solutions align perfectly with your goals and operational needs.',
      imageSrc: 'https://via.placeholder.com/600x400?text=Custom+AI+Models',
      imageAlt: 'Custom AI Models',
    },
    {
      title: 'AI as a Service (AIaaS)',
      description: 'Access on-demand AI capabilities with our scalable AIaaS offerings. Whether it’s processing large datasets or deploying custom models, we provide flexible and cost-effective AI solutions.',
      imageSrc: 'https://via.placeholder.com/600x400?text=AIaaS',
      imageAlt: 'AI as a Service',
    },
    {
      title: 'AI for Marketing',
      description: 'Transform your marketing strategies with AI. From personalized emails and dynamic landing pages to predictive analytics and campaign optimization, we ensure every customer touchpoint is impactful and data-driven.',
      imageSrc: 'https://via.placeholder.com/600x400?text=AI+for+Marketing',
      imageAlt: 'AI for Marketing',
    },
    {
      title: 'Health Care (Predictive AI)',
      description: 'Revolutionize healthcare delivery with AI-powered predictive analytics. Identify patient risks, optimize treatment plans, and improve outcomes with innovative solutions tailored to the medical field.',
      imageSrc: 'https://via.placeholder.com/600x400?text=Healthcare+AI',
      imageAlt: 'Health Care Predictive AI',
    },
  ],
};

Features1.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
    })
  ),
};

export default Features1;
