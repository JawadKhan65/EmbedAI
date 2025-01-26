import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";

const Section3 = (props) => {
    return (
        <>
            <Box
                bg={"black"}
                bgAttachment="scroll"
                bgImage="url(/images/kimi-lee-E1FhsKwRIT0-unsplash.jpg)"
                bgSize="cover"
                bgPosition="center"
                height={"100vh"}
                width={"100%"}
                color={"white"}
                position={"relative"}
                _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
            >
                <Box
                    h={"100vh"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Box
                        padding={{ base: "5", md: "10", lg: "16" }}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                        gap={{ base: "4", md: "6" }}
                        zIndex={1}
                        textAlign={"left"}
                    >
                        <Heading
                            textTransform={"uppercase"}
                            style={{ fontFamily: 'Epilogue, sans-serif' }}
                            fontWeight={"bold"}
                            fontSize={{ base: "2rem", md: "3.5rem", lg: "5rem" }} // Responsive font sizes
                            lineHeight={{ base: "1.3", lg: "1.2" }} // Ensure no overlap
                            width={{ base: "90%", md: "80%", lg: "70%" }}
                        >
                            {props.heading1}
                        </Heading>
                        <Text
                            color={"gray.100"}
                            fontWeight={200}
                            fontSize={{ base: "0.9rem", md: "1.1rem", lg: "1.25rem" }}
                            lineHeight={"1.6"}
                            width={{ base: "100%", md: "80%", lg: "50%" }} // Responsive width
                        >
                            {props.content1}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

Section3.defaultProps = {
    heading1: "Unleash the Power of AI to Drive Business Growth",
    content1:
        "Our services help companies seamlessly integrate AI, improving decision-making, streamlining processes, and boosting productivity. Tailored to your needs, our AI solutions enable efficient growth and a competitive edge.",
};

export default Section3;
