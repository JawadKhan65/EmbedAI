import React, { useState } from "react";
import { Box, Divider, Heading, Text, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const Section9 = () => {
    // State to toggle dropdown sections
    const [isAIVisible, setAIVisible] = useState(false);
    const [isIntegrationVisible, setIntegrationVisible] = useState(false);
    const [isArchitectureVisible, setArchitectureVisible] = useState(false);
    const [isAnalyticsVisible, setAnalyticsVisible] = useState(false);

    return (
        <Box height={"100vh"} bg={"#ebeeee"}>
            <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "row" }}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                gap={{ base: 8, md: 20 }}
                padding={{ base: "20px", md: "40px", lg: "60px" }}
            >
                <Box>
                    <Heading
                        textTransform={"uppercase"}
                        fontWeight={700}
                        fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
                    >
                        TECH SPECS
                    </Heading>
                </Box>

                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    textAlign={"center"}
                    width={"100%"}
                    maxWidth={"600px"}
                    padding={{ base: 4, md: 10 }}
                >
                    {/* AI Algorithms Section */}
                    <Box width={"100%"}>
                        <Divider width={"100%"} borderColor="black" my={2} />
                        <Heading
                            padding={4}
                            display={"flex"}
                            alignItems={"center"}
                            gap={2}
                            cursor={"pointer"}
                            fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}
                            onClick={() => setAIVisible(!isAIVisible)}
                        >
                            Advanced AI Algorithms
                            <IconButton
                                icon={isAIVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                aria-label="Toggle Dropdown"
                                size="sm"
                                variant="link"
                            />
                        </Heading>
                        {isAIVisible && (
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                gap={4}
                                textAlign={"left"}
                                paddingX={{ base: 4, md: 10 }}
                            >
                                <Text>State-of-the-art machine learning and deep learning models.</Text>
                                <Text>Custom solutions for your unique challenges.</Text>
                                <Text>High accuracy and performance for optimal results.</Text>
                            </Box>
                        )}
                    </Box>

                    {/* Seamless Integration Section */}
                    <Box width={"100%"}>
                        <Divider width={"100%"} borderColor="black" my={2} />
                        <Heading
                            padding={4}
                            display={"flex"}
                            alignItems={"center"}
                            gap={2}
                            cursor={"pointer"}
                            fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}
                            onClick={() => setIntegrationVisible(!isIntegrationVisible)}
                        >
                            Seamless Integration
                            <IconButton
                                icon={isIntegrationVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                aria-label="Toggle Dropdown"
                                size="sm"
                                variant="link"
                            />
                        </Heading>
                        {isIntegrationVisible && (
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                gap={4}
                                textAlign={"left"}
                                paddingX={{ base: 4, md: 10 }}
                            >
                                <Text>Easy integration with existing infrastructure.</Text>
                                <Text>Minimal disruption during implementation.</Text>
                                <Text>Fast deployment for immediate value.</Text>
                            </Box>
                        )}
                    </Box>

                    {/* Scalable Architecture Section */}
                    <Box width={"100%"}>
                        <Divider width={"100%"} borderColor="black" my={2} />
                        <Heading
                            padding={4}
                            display={"flex"}
                            alignItems={"center"}
                            gap={2}
                            cursor={"pointer"}
                            fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}
                            onClick={() => setArchitectureVisible(!isArchitectureVisible)}
                        >
                            Scalable Architecture
                            <IconButton
                                icon={isArchitectureVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                aria-label="Toggle Dropdown"
                                size="sm"
                                variant="link"
                            />
                        </Heading>
                        {isArchitectureVisible && (
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                gap={4}
                                textAlign={"left"}
                                paddingX={{ base: 4, md: 10 }}
                            >
                                <Text>Flexible solutions that grow with your business.</Text>
                                <Text>Easily adaptable to evolving needs.</Text>
                                <Text>Protection of sensitive data at all times.</Text>
                            </Box>
                        )}
                    </Box>

                    {/* Real-Time Analytics Section */}
                    <Box width={"100%"}>
                        <Divider borderColor="black" my={2} />
                        <Heading
                            padding={4}
                            display={"flex"}
                            alignItems={"center"}
                            gap={2}
                            cursor={"pointer"}
                            fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}
                            onClick={() => setAnalyticsVisible(!isAnalyticsVisible)}
                        >
                            Real-Time Analytics
                            <IconButton
                                icon={isAnalyticsVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                aria-label="Toggle Dropdown"
                                size="sm"
                                variant="link"
                            />
                        </Heading>
                        {isAnalyticsVisible && (
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                gap={4}
                                textAlign={"left"}
                                paddingX={{ base: 4, md: 10 }}
                            >
                                <Text>Instant insights from real-time data processing.</Text>
                                <Text>Enables faster, informed decision-making.</Text>
                                <Text>Improves operational efficiency and responsiveness.</Text>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Section9;
