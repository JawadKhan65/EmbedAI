import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";

const Section2 = (props) => {
    return (
        <>
            <Box
                bg={"black"}
                bgAttachment="scroll"
                bgImage="url(/images/RooN-Headphones-2.webp)"
                bgSize="cover"
                bgPosition="center"
                height={"100vh"}
                width={"100vw"}
                color={"white"}
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


                >

                    <Box
                        h={"100vh"}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        padding={{ base: "4", md: "8", lg: "12" }}
                    >
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            gap={{ base: 4, md: 6, lg: 8 }}
                            textAlign={"center"}
                        >
                            <Heading
                                width={{ base: "90%", md: "70%", lg: "50%" }}
                                textTransform={"uppercase"}
                                style={{ fontFamily: 'Epilogue, sans-serif' }}
                                fontWeight={"bold"}
                                fontSize={{ base: "1.5rem", md: "2.5rem", lg: "3rem" }} // Responsive font size
                                lineHeight={{ base: "1.3", md: "1.2" }} // Ensure no overlap
                            >
                                {props.heading1}
                            </Heading>
                            <Text
                                color={"gray.200"}
                                width={{ base: "85%", md: "70%", lg: "50%" }}
                                fontWeight={600}
                                fontSize={{ base: "0.9rem", md: "1.1rem", lg: "1.25rem" }} // Responsive font size
                                lineHeight={"1.6"} // Better readability
                            >
                                {props.content1}
                            </Text>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>
    );
};

Section2.defaultProps = {
    heading1: "Pioneering Sound Innovations",
    content1:
        "Intelligent Automation . Personalized Marketing Campaigns . Data-Driven Insights . AI-Powered Customer Segmentation . Process Optimization .",
};

export default Section2;
