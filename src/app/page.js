'use client'
import React, { useState } from 'react';
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

const Home = (props) => {
  const [isChatboxVisible, setChatboxVisible] = useState(true); // State for visibility
  const context = `
            Note: You are a support agent for EmbedAI.Provide Clear Cut Answer to the User, No Useless Information.
            About EmbedAI:
            "At EmbedAI, we provide comprehensive AI solutions tailored to meet the diverse needs of any industry. Our expertise spans across various domains, offering cutting-edge technologies for customer support, industrial automation, and more. Whether you're looking to enhance customer engagement, streamline operations, or innovate within your sector, EmbedAI has the right tools and solutions to help you succeed. From predictive analytics to natural language processing, we empower businesses to leverage AI for transformative results, ensuring every client finds the perfect solution for their unique challenges."
        `;

  const toggleChatbox = () => {
    setChatboxVisible((prev) => !prev);
  };
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
        <Features2 />
        <Pricing />
        <Steps />
        <Testimonial />
        <Contact />
        <Footer />
        {/* Toggle button for Chatbox at the end of the page */}
        <Box position="fixed" bottom={4} right={4} zIndex={10}>
          <Button color={"white"} colorScheme={"cyan"} onClick={toggleChatbox} >
            {isChatboxVisible ? 'Close' : <><ChatIcon /> <p className='ml-2'>Chat with Us</p></>}
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
