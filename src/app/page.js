'use client'
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import Features1 from '../../components/features1';
import CTA from '../../components/cta';
import Features2 from '../../components/features2';
import Pricing from '../../components/pricing';
import Steps from '../../components/steps';
import Testimonial from '../../components/testimonial';
import Contact from '../../components/contact';
import Footer from '../../components/footer';
import RenderDashboard from '../../components/Dashboard';
import Chatbox from '../../components/ChatBox';
import { Box, Button } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import ImageGrid from '../../components/Carousel';
import embedai from '../../public/embed-ai.png';
import Image from 'next/image';
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


  //google translate
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, 'google_translate_element');

    }
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  })
  return (
    <>
      <Head>
        <title>Embed AI</title>
      </Head>
      <div className="home-container">
        {/* <Navbar /> */}
        <Hero />
        <Features1 />
        <CTA />
        <ImageGrid />

        <Pricing />
        <Steps />
        <Testimonial />
        <Contact />
        <Footer />
        {/* Toggle button for Chatbox at the end of the page */}
        <Box position="fixed" bottom={4} right={4} zIndex={10}>
          <Button color={"white"} colorScheme={"cyan"} _hover={{
            bg: "#6690d8",
          }} onClick={toggleChatbox} >
            {isChatboxVisible ? 'Close' : <>
              <ChatIcon />


              <p className='ml-2'>
                Chat with </p>
              <div className=' ml-2 bg-white rounded-full h-6 w-6 mr-2 flex items-center justify-center'>
                <Image src={embedai} alt="Embed AI Logo" width={24} height={24} />
              </div>
            </>
            }
          </Button>
          {isChatboxVisible && <Chatbox context={context} />} {/* Show or hide the Chatbox */}
        </Box>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  );
};

export default Home;
