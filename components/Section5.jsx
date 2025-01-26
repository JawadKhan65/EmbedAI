import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Section5 = () => {
    return (
        <Box
            height={"100vh"}
            width={"auto"}
            bg={"#faf9f9"}
        >
            <Box
                paddingX={"1rem"}
                h={{ base: "auto", lg: "100vh" }} // Adjust height for smaller screens
                display={"flex"}
                flexDirection={{ base: "column", lg: "row" }} // Stack for small screens, row for large screens
                justifyContent={"center"}
                alignItems={"center"}
                gap={6}
            >
                {/* Content Box */}
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={{ base: "center", lg: "flex-start" }} // Centered on smaller screens
                    gap={6}
                    color={"black"}
                    width={{ base: "100%", lg: "50%" }} // Full width for small screens
                >
                    <Heading
                        paddingX={{ base: "1rem", lg: "0" }}
                        width={{ base: "90%", lg: "50vw" }} // Adjust heading width
                        textTransform={"uppercase"}
                        textAlign={{ base: "center", lg: "left" }} // Centered for small screens
                        style={{ fontFamily: 'Epilogue, sans-serif' }}
                        fontWeight={"bold"}
                        fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
                        lineHeight={"1.2"}
                    >
                        AI Solutions for a Healthier Future
                    </Heading>
                    <Text
                        paddingX={{ base: "1rem", lg: "0" }}
                        textAlign={{ base: "center", lg: "left" }} // Centered for small screens
                    >
                        Reimagine healthcare with AI tools that elevate patient care, simplify workflows, and unlock powerful insights. From advanced medical imaging to smarter diagnostics and treatment predictions.
                    </Text>
                </Box>

                {/* Image Box */}
                <Box
                    padding={{ base: "1rem", lg: "0" }}
                    height={{ base: "40vh", lg: "50vh" }} // Adjust height for smaller screens
                    width={{ base: "100%", lg: "50%" }} // Full width for small screens
                    bgImage={"url(/images/pexels-googledeepmind-17483868.jpg)"}
                    bgPosition={"center"}
                    bgAttachment={"scroll"}
                    bgSize={"cover"}
                    borderRadius={"md"}
                />
            </Box>
        </Box>
    );
};

export default Section5;
