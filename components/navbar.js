'use client';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter, usePathname } from 'next/navigation';
import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../public/embed-ai.png';

const Navbar = (props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [showReg, setShowReg] = useState(true);
  const [isLogged, setLogged] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleScroll = (className) => {
    const element = document.getElementsByClassName(className)[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setShowReg(pathname !== '/register');
  }, [pathname]);

  return (
    <Box height={"4rem"}
      width={"100vw"}


      opacity={0.92}
      bg={"black"} color={"white"} border={"none"} px={4} py={3} position="sticky" top="0" zIndex="1000" >
      <Flex justifyContent="space-between" alignItems="center">
        {/* Logo */}
        <Flex onClick={() => router.push('/')} cursor="pointer">
          <Image src={logo.src} alt={props.logoAlt} boxSize="50px" />

        </Flex>

        {/* Desktop Menu */}
        {showReg && (
          <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
            <Text
              mx={4}
              cursor="pointer"
              onClick={() => pathname !== '/' && router.push('/')}
            >
              {props.link1}
            </Text>
            <Text mx={4} cursor="pointer" onClick={() => handleScroll('about')}>
              {props.link2}
            </Text>
            <Text mx={4} cursor="pointer" onClick={() => handleScroll('carousel-container')}>
              {props.link3}
            </Text>
            <Text

              mx={4} cursor="pointer"
              onClick={() => window.location.href = `mailto:embedai.io@gmail.com`}

            >
              {props.link4}
            </Text>

          </Flex>
        )}

        {/* Hamburger Menu for Mobile */}
        {showReg && (
          <IconButton
            bg={"transparent"}
            color={"white"}
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            borderRadius={"full"}
            _hover={{ bg: 'cyan.800' }}
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            position={"relative"}
          />
        )}
      </Flex>

      {/* Drawer for Mobile Menu */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={"black"} color={"white"}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex alignItems="center">
              <Image src={logo.src} alt={props.logoAlt} boxSize="50px" />

            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="start">
              <Text
                _hover={{
                  color: "cyan.800",
                  transform: "scale(1.1)",
                  transition: "all 0.3s transform",

                }}
                cursor="pointer"
                onClick={() => {
                  router.push('/');
                  onClose();
                }}
              >
                {props.link1}
              </Text>
              <Text _hover={{
                color: "cyan.800",
                transform: "scale(1.1)",
                transition: "all 0.3s transform",

              }} cursor="pointer" onClick={() => handleScroll('about')}>
                {props.link2}
              </Text>
              <Text _hover={{
                color: "cyan.800",
                transform: "scale(1.1)",
                transition: "all 0.3s transform",

              }} cursor="pointer" onClick={() => handleScroll('carousel-container')}>
                {props.link3}
              </Text>
              <Text _hover={{
                color: "cyan.800",
                transform: "scale(1.1)",
                transition: "all 0.3s transform",

              }} cursor="pointer"
                onClick={() => window.location.href = `mailto:embedai.io@gmail.com`}>
                {props.link4}

              </Text>
              {isLogged && (
                <Text cursor="pointer" onClick={() => router.push('/dashboard')}>
                  Dashboard
                </Text>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

Navbar.defaultProps = {
  logoAlt: 'logo',
  link1: 'Home',
  link2: 'About',
  link3: 'Services',
  link4: 'Contact',
};

Navbar.propTypes = {
  logoAlt: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
};

export default Navbar;
