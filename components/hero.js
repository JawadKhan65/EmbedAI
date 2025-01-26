'use client';
import React from 'react';
import 'typeface-epilogue';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from '@chakra-ui/react';

const Hero = (props) => {
  return (
    <>
      <Box
        bg={"black"}
        height={"100vh"}
        width={"100vw"}
        bgAttachment="scroll"
        bgImage="url(/images/visax-1D3jIz2oWUM-unsplash.jpg)"
        bgSize="cover"

        bgPosition="center"
        color="white"
        className="hero-header78"
      >
        <Box

          h={"100vh"}
          className="hero-column thq-section-max-width"
        >
          <Box
            display={"flex"}
            paddingTop={16}
            paddingLeft={10}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            className="hero-content1"
            gap={6} // Add space between Heading and Text
          >
            <Heading
              width={"70vw"}
              textTransform={"uppercase"}
              textAlign={"left"}
              style={{ fontFamily: 'Epilogue, sans-serif' }}
              fontWeight={"bold"}
              fontSize={{ base: "2.5rem", md: "4rem", lg: "5rem" }} // Responsive font size
              lineHeight={"1.2"} // Ensure no overlap
            >
              {props.heading1}
            </Heading>
            <Text
              color={"gray.200"}
              width={{ base: "90vw", md: "70vw", lg: "55vw" }} // Responsive width
              fontWeight={600}
              fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }} // Responsive font size
              textAlign={"left"}
              className="hero-text2 thq-body-large"
              lineHeight={"1.6"} // Better readability
            >
              {props.content1}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

Hero.defaultProps = {
  heading1: 'Streamline. Scale. Thrive with EmbedAI',
  content1:
    'Your business deserves more than simply technology. EmbedAI offers end-to-end AI services that improve workflows, increase productivity, and unlock growth - all while providing the support you need to succeed.',
  image9Alt: 'AI Solutions for Business',
};

Hero.propTypes = {
  action2: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
};

export default Hero;
