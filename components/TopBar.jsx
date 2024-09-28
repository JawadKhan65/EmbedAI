import React from "react";

import { Box, Flex, Text, Spacer, Button } from "@chakra-ui/react";
const TopBar = ({ props }) => {


    return (
        <>
            <Flex justify="space-between" align="center" bg="white" p="4" boxShadow="sm">
                <Text fontSize="2xl" fontWeight="bold">Dashboard</Text>
                <Spacer />
                <Button color={'black'} bg={'#64edd9'} _hover={{ bg: '#64ede5' }}>
                    {'</>'} Integrate Chatbot
                </Button>

            </Flex >

            <Flex justify="space-between" align="center" bg="white" p="4" boxShadow="sm">
                <Text ml="4">Name: <b>{props?.first_name} {props?.last_name}</b></Text>
                <Text ml="4">Subscription: <b>{props.subscription?.type || "Free"}</b></Text>


            </Flex>

            <Flex justify="space-between" align="center" bg="white" p="4" boxShadow="sm">
                <Text ml="4">Chatbots Aloted: <b>{props.subscription?.no_of_chatbots || 0}</b></Text>
                <Text ml="4">Validity: <b>{props.subscription?.validity}</b></Text>


            </Flex>
        </>
    );
};

export default React.memo(TopBar);
