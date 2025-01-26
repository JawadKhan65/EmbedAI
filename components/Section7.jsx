import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
const Section7 = () => {
    return (
        <>
            <Box
                height={"100vh"}
                bg={"#faf9f9"}



            >

                <Box
                    paddingX={"1rem"}
                    h={"100vh"}
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}

                >
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={6}
                        color={"black"}
                        width={"100%"}

                    >
                        <Heading
                            paddingX={"2rem"}
                            width={"50vw"}
                            textTransform={"uppercase"}
                            textAlign={"left"}
                            style={{ fontFamily: 'Epilogue, sans-serif' }}
                            fontWeight={"bold"}
                            fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
                            lineHeight={"1.2"}


                        >
                            From Strategy to Execution, We’re with You Every Step

                        </Heading>
                        <Text
                            paddingX={"2rem"}

                        >
                            EmbedAI drives your business forward with custom AI solutions, from concept to execution.
                        </Text>



                    </Box>
                    <Box
                        paddingRight={"1rem"}
                        height={"50vh"}
                        width={"100%"}
                        bgImage={"url(/images/pexels-goumbik-669621.jpg)"}
                        bgPosition={"center"}
                        bgAttachment={"scroll"}
                        bgSize={"cover"}
                        borderRadius={"md"}
                    >



                    </Box>


                </Box>



            </Box>

        </>
    )
};

export default Section7;
