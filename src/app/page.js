'use client'
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Hero from '../../components/hero';

import Chatbox from '../../components/ChatBox';
import { Box, Button } from '@chakra-ui/react';
import { ChatIcon, CloseIcon } from '@chakra-ui/icons';
import embedai from '../../public/embed-ai.png';
import Image from 'next/image';
import Section2 from '../../components/Section2';
import Section3 from '../../components/Section3';
import Section4 from '../../components/Section4';
import Section5 from '../../components/Section5';
import Section6 from '../../components/Section6';
import Section7 from '../../components/Section7';
import Section8 from '../../components/Section8';
import Section9 from '../../components/Section9';
import ClientReviews from '../../components/ClientsReviews';
import Section10 from '../../components/Section10';

const Home = (props) => {
  const [isChatboxVisible, setChatboxVisible] = useState(false); // State for visibility
  const context = `
  "You are the support chatbot for EmbedAI, an AI services company. Your role is to assist users with information about EmbedAI's services and guide them to relevant solutions. You must answer queries related to our offerings in AI, automation, machine learning, and other advanced AI solutions in a professional and helpful manner.

When providing answers:

Be clear, concise, and friendly.
Only offer solutions or services related to EmbedAI.
If a question is beyond your scope, politely suggest contacting human support for further assistance.
Here are the key services offered by EmbedAI:

AI-powered customer support services
AI-powered automation
Intelligent data insights
Predictive analytics
Natural Language Processing (NLP)
AI-driven decision-making
Generative AI solutions
Advanced machine learning
Customer experience AI
AI workflow optimization
Business process automation
Custom AI models
AI as a Service (AIaaS)
Answer each query based on these services and offer additional details as needed. Ensure users have an excellent experience by providing accurate, easy-to-understand responses."
Our Contacts:
Email: embedai.io@gmail.com
Phone: +92-329-7833100   
`;

  const toggleChatbox = () => {
    setChatboxVisible((prev) => !prev);
  };





  return (
    <>
      <Head>
        <title>Embed AI</title>
      </Head>
      <div>
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <ClientReviews />
        <Section10 />

        {/* Toggle button for Chatbox at the end of the page */}
        <Box marginLeft={5} position="fixed" bottom={4} zIndex={1000}>
          <Button color={"black"} bg={"white"} _hover={{
            bg: "gray.200",
          }}
            border={"1px solid black"}
            borderRadius={"full"}
            onClick={toggleChatbox} >
            {isChatboxVisible ? <CloseIcon fontWeight={"bold"} fontSize={"smaller"} color={"blue"} /> : <>

              <ChatIcon />
            </>
            }
          </Button>
          {isChatboxVisible && <Chatbox context={context} />} {/* Show or hide the Chatbox */}
        </Box>
      </div>
      <style jsx>
        {`
          .home-container {
            min-width: 100vw;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            margin: 0;

            
          }
        `}
      </style>
    </>
  );
};

export default Home;
