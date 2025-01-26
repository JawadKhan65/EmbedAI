import React, { useState } from "react";
import { Box, Text, Heading, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const Section8 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Carousel data
    const carouselItems = [
        {
            title: "Increased Profitability",
            description:
                "With our AI solutions, you'll streamline operations, optimize workflows, and boost efficiency and profits.",
        },
        {
            title: "Boosted Marketing Impact",
            description:
                "Our AI-powered tools help you reach the right audience, improve engagement, and maximize your marketing ROI.",
        },
        {
            title: "Improved Patient Outcomes",
            description:
                "In healthcare, our AI services improve patient care, minimize errors, reduce costs, and increase profitability.",
        },
        {
            title: "Scalable Solutions for Growth",
            description:
                "Our AI services scale with your business, providing ongoing enhancements for sustained success and profitability.",
        },
    ];

    // Navigate to the previous slide
    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
        );
    };

    // Navigate to the next slide
    const handleNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Box
            height={"100vh"}
            bg={"#ebeeee"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            paddingY={10}
        >
            {/* Header Section */}
            <Box
                display={
                    "flex"
                }
                flexDirection={"row"}
                justifyContent={"spsace-between"}
                alignItems={"center"}

                textAlign={"center"} marginBottom={8} px={4}>
                <Heading
                    fontWeight={700}
                    fontSize={{ base: "1.5rem", md: "2rem", lg: "3rem" }}
                    marginBottom={4}
                >
                    Ready to Scale Your Business with AI?
                </Heading>
                <Text
                    color={"gray.600"}
                    fontWeight={400}
                    fontSize={{ base: "1rem", md: "1.25rem", lg: "1.5rem" }}
                    lineHeight={"1.6"}
                >
                    Reach out today to discover how EmbedAI can unlock AI’s potential,
                    streamline processes, and drive your success.
                </Text>
            </Box>

            {/* Carousel Section */}
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                position={"relative"}
                width={"100%"}
                overflow={"hidden"}
                px={4}
            >
                <Box
                    display={"flex"}
                    gap={4}
                    transform={`translateX(-${activeIndex * 100}%)`}
                    transition={"transform 0.5s ease-in-out"}
                    width={`${carouselItems.length * 100}%`}
                >
                    {carouselItems.map((item, index) => (
                        <Box
                            height={"50vh"}
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                            alignItems={"center"}

                            key={index}
                            flexShrink={0}
                            width={{ base: "100%", md: "70%", lg: "40%" }}
                            bg={"white"}
                            borderRadius={"20px"}
                            boxShadow={"md"}
                            textAlign={"center"}
                            padding={6}
                            mx={"auto"}
                        >
                            <Box
                                width={"50%"}
                            >
                                <Heading fontSize={{ base: "1.5rem", lg: "2rem" }} marginBottom={4}>
                                    {item.title}
                                </Heading>
                                <Text
                                    color={"gray.600"}
                                    fontSize={{ base: "1rem", md: "1.25rem" }}
                                    lineHeight={"1.6"}
                                >
                                    {item.description}
                                </Text>
                            </Box>

                        </Box>
                    ))}
                </Box>

                {/* Navigation Buttons */}
                <IconButton
                    icon={<ArrowBackIcon />}
                    position={"absolute"}
                    top={"50%"}
                    left={2}
                    transform={"translateY(-50%)"}
                    zIndex={10}
                    onClick={handlePrev}
                    bg={"white"}
                    boxShadow={"md"}
                    borderRadius={"full"}
                    _hover={{ bg: "gray.100" }}
                    aria-label="Previous Slide"
                />
                <IconButton
                    icon={<ArrowForwardIcon />}
                    position={"absolute"}
                    top={"50%"}
                    right={2}
                    borderRadius={"full"}

                    transform={"translateY(-50%)"}
                    zIndex={10}
                    onClick={handleNext}
                    bg={"white"}
                    boxShadow={"md"}
                    _hover={{ bg: "gray.100" }}
                    aria-label="Next Slide"
                />
            </Box>
        </Box>
    );
};

export default Section8;
