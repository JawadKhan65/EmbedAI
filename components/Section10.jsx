import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";

const Section10 = () => {
    return (
        <Box
            height={"100vh"}
            bgImage={"url('/images/pexels-googledeepmind-18069211.jpg')"}
            bgAttachment={{ base: "scroll", md: "scroll" }}
            bgPosition={"center"}
            bgSize={"cover"}
            position={"relative"}
        >
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                width={"100%"}
                position={"absolute"}
                bg={"rgba(0,0,0,0.6)"}
                flexDirection={"column"}
                px={4} // Add padding for smaller screens
            >
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"flex-end"}
                    color={"white"}
                    p={4}
                    height={"80%"}
                    paddingBottom={10}
                >
                    <Heading
                        textTransform={"uppercase"}
                        fontSize={{ base: "2rem", sm: "2.5rem", md: "3.5rem", lg: "4rem" }}
                        width={{ base: "90vw", md: "70vw" }}
                        textAlign={"center"}
                    >
                        Redefine your journey
                    </Heading>
                </Box>

                <Button
                    color={"gray.500"}
                    fontWeight={300}
                    borderRadius={"full"}
                    border={"1px solid black"}
                    cursor={"pointer"}
                    _hover={{
                        bg: "gray.200",
                    }}
                    px={{ base: 6, md: 10 }}
                    py={{ base: 4, md: 6 }}
                    fontSize={{ base: "sm", md: "md" }}
                    onClick={() => window.location.href = `mailto:embedai.io@gmail.com`}
                >
                    Connect with us
                </Button>
            </Box>
        </Box>
    );
};

export default Section10;
