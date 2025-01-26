import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Section6 = () => {
    return (
        <Box
            height={{ base: "auto", lg: "100vh" }} // Auto height for smaller devices
            width={"auto"}
            bg={"#faf9f9"}
        >
            <Box
                paddingX={"1rem"}
                h={{ base: "auto", lg: "100vh" }} // Adjust height for responsiveness
                display={"flex"}
                flexDirection={{ base: "column", lg: "row" }} // Stack for small screens
                justifyContent={"center"}
                alignItems={"center"}
                gap={6}
            >
                {/* Images Section */}
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={4} // Add space between images
                    color={"black"}
                    width={{ base: "100%", lg: "50%" }} // Full width on small screens
                    paddingLeft={{ base: "0", lg: "1rem" }} // Adjust padding for smaller screens
                >
                    <Box
                        height={"30vh"}
                        width={"100%"}
                        bgImage={"url(/images/mo-0146_1_What-is-an-example-of-automation-and-AI-working-together.webp)"}
                        bgPosition={"center"}
                        bgAttachment={"scroll"}
                        bgSize={"cover"}
                        borderRadius={"sm"}
                    />
                    <Box
                        height={"30vh"}
                        width={"100%"}
                        bgImage={"url(/images/mo-0146_3_What-Are-the-Benefits-of-AI-Automation.webp)"}
                        bgPosition={"center"}
                        bgAttachment={"scroll"}
                        bgSize={"cover"}
                        borderRadius={"sm"}
                    />
                </Box>

                {/* Text Section */}
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={{ base: "center", lg: "flex-start" }} // Center on smaller devices
                    gap={6}
                    color={"black"}
                    width={{ base: "100%", lg: "50%" }} // Full width on small screens
                >
                    <Heading
                        paddingX={{ base: "1rem", lg: "2rem" }}
                        width={{ base: "100%", lg: "50vw" }} // Adjust width for smaller screens
                        textTransform={"uppercase"}
                        textAlign={{ base: "center", lg: "left" }} // Center text on small screens
                        style={{ fontFamily: 'Epilogue, sans-serif' }}
                        fontWeight={"bold"}
                        fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
                        lineHeight={"1.2"}
                    >
                        Automate & Optimize Your Operations with AI
                    </Heading>
                    <Text
                        paddingX={{ base: "1rem", lg: "2rem" }}
                        textAlign={{ base: "center", lg: "left" }} // Center text on small screens
                    >
                        Let AI handle the grind, automating tasks, cutting errors, and giving your team the freedom to drive real growth.
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default Section6;
