import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Section4 = () => {
    return (
        <>
            <Box
                height={"100vh"}
                width={"100vw"}
                bg={"#faf9f9"}
            >
                <Box
                    h={"100vh"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    paddingX={{ base: "4", md: "8", lg: "12" }} // Responsive horizontal padding
                >
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                        gap={{ base: 4, md: 6, lg: 8 }} // Responsive gap
                        paddingY={{ base: "4rem", md: "6rem", lg: "8rem" }} // Responsive vertical padding
                    >
                        <Heading
                            width={{ base: "90%", md: "70%", lg: "50%" }} // Responsive width
                            textTransform={"uppercase"}
                            textAlign={"center"}
                            style={{ fontFamily: 'Epilogue, sans-serif' }}
                            fontWeight={"bold"}
                            fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }} // Responsive font size
                            lineHeight={{ base: "1.3", md: "1.2" }}
                        >
                            Revolutionize your marketing with AI
                        </Heading>

                        <Text
                            color={"gray.500"}
                            width={{ base: "85%", md: "70%", lg: "50%" }} // Responsive width
                            fontWeight={400}
                            fontSize={{ base: "0.9rem", md: "1rem", lg: "1.25rem" }} // Responsive font size
                            textAlign={"center"}
                            lineHeight={"1.6"} // Better readability
                        >
                            Elevate your marketing with EmbedAI&apos;s AI. Customize experiences, refine targeting, and drive higher ROI through segmentation and predictive analytics.
                        </Text>

                        <Box
                            display={"flex"}
                            flexDirection={{ base: "column", md: "row" }} // Stack cards on mobile
                            justifyContent={"center"}
                            alignItems={"center"}
                            paddingY={{ base: "2rem", md: "3rem" }}
                            gap={{ base: 4, md: 6 }} // Responsive gap between cards
                            width={"100%"}
                        >
                            <Box
                                width={{ base: "80%", md: "40%" }} // Responsive width
                                height={"10rem"}
                                bg={"white"}
                                borderRadius={"10px"}
                                bgImage={"url(/images/emails.jpg)"}
                                bgPosition={"center"}
                                bgSize={"cover"}
                                bgAttachment={"scroll"}
                            >
                                <Box
                                    display={"flex"}
                                    flexDirection={"column"}
                                    justifyContent={"flex-end"}
                                    alignItems={"center"}
                                    color={"#F5F5DC"}
                                    paddingBottom={"4px"}
                                    height={"100%"}
                                >
                                    <Heading
                                        fontSize={{ base: "sm", md: "md" }} // Responsive font size
                                        fontWeight={400}
                                        textAlign={"center"}
                                    >
                                        Email Marketing
                                    </Heading>
                                </Box>
                            </Box>

                            <Box
                                width={{ base: "80%", md: "40%" }} // Responsive width
                                height={"10rem"}
                                bg={"white"}
                                borderRadius={"10px"}
                                bgImage={"url(/images/pexels-weekendplayer-186461.jpg)"}
                                bgPosition={"center"}
                                bgSize={"cover"}
                                bgAttachment={"scroll"}
                            >
                                <Box
                                    display={"flex"}
                                    flexDirection={"column"}
                                    justifyContent={"flex-end"}
                                    alignItems={"center"}
                                    color={"white"}
                                    paddingBottom={"4px"}
                                    height={"100%"}
                                >
                                    <Heading
                                        fontSize={{ base: "sm", md: "md" }} // Responsive font size
                                        fontWeight={400}
                                        textAlign={"center"}
                                    >
                                        Risk Analysis and Predictive Analytics
                                    </Heading>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Section4;
