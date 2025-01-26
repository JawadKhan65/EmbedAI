'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
import { EmailIcon } from '@chakra-ui/icons';
import logo from '../public/embed-ai.png';

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      width={"100vw"}

      bg="black" color="white" py={6}>
      {/* Top Row: Logo, LinkedIn, and Email */}
      <Flex justifyContent="space-between" alignItems="center" px={8}>
        <Image src={logo} alt={props.logoAlt} width={50} height={50} />

        <Flex gap={6} alignItems="center">
          <FaLinkedin
            size={24}
            cursor="pointer"
            onClick={() => window.open('https://www.linkedin.com/company/105419355/', '_blank')}
          />
          <EmailIcon
            w={6}
            h={6}
            cursor="pointer"
            onClick={() => window.location.href = `mailto:${props.email1}`}
          />
        </Flex>
      </Flex>

      <Divider mt={6} borderColor="gray.700" />

      {/* Middle Row: Pages */}
      <Flex justifyContent="space-around" mt={6} px={8} flexWrap="wrap" gap={4}>
        <Text
          cursor="pointer"
          onClick={() => document.getElementsByClassName('pricing-pricing23')[0]?.scrollIntoView({ behavior: 'smooth' })}
        >
          {props.link1}
        </Text>
        <Text
          cursor="pointer"
          onClick={() => document.getElementsByClassName('contact-contact20')[0]?.scrollIntoView({ behavior: 'smooth' })}
        >
          {props.link2}
        </Text>
        <Text
          cursor="pointer"
          onClick={() => document.getElementsByClassName('steps-container1')[0]?.scrollIntoView({ behavior: 'smooth' })}
        >
          {props.link3}
        </Text>
        <Text
          cursor="pointer"
          onClick={() => document.getElementsByClassName('about')[0]?.scrollIntoView({ behavior: 'smooth' })}
        >
          {props.link4}
        </Text>
      </Flex>

      <Divider mt={6} borderColor="gray.700" />

      {/* Bottom Row: Copyright */}
      <Box textAlign="center" mt={6} px={8}>
        <Text fontSize="sm" fontWeight={300}>
          Designed by EmbedAI | Founded <b>2024</b> | &copy; {currentYear} {props.copyright}
        </Text>
      </Box>
    </Box>
  );
};

Footer.defaultProps = {
  logoAlt: 'EmbedAI Logo',
  link2: 'Contact',
  link3: 'Services',
  link4: 'About',
  email1: 'contact@embedai.com',
  copyright: 'All Rights Reserved.',
};

Footer.propTypes = {
  logoAlt: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  email1: PropTypes.string,
  copyright: PropTypes.string,
};

export default Footer;
