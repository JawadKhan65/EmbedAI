import React from "react";
import { Box, Text, Heading, Image, Stack, Icon, Divider } from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { StarIcon } from "@chakra-ui/icons";
const ClientReviews = () => {
    // Sample client data
    const clients = [
        { id: 1, name: "WordFinder PR", logo: "/images/wordfinder.jpeg" },
        { id: 2, name: "Motion Visuals", logo: "/images/motion-visual.png" },
        { id: 3, name: "Client C", logo: "/images/Upchatwebp.webp" },
        { id: 4, name: "Client D", logo: "/images/1xz.png" },
        { id: 5, name: "Client E", logo: "/images/claude.png" },
        // Add more client logos here
    ];

    const reviews = [
        { id: 1, client: "Dann.A", review: "The communication from Embedai.io was top-notch, all deadlines were met, and their skills were reasonably strong. At one point, I requested an additional milestone, and the team was very forthcoming in acknowledging that the additional work was outside their area of expertise. They even helped me find additional freelancers to support the work. I enjoyed working with Embedai.io and will likely engage them for future projects." },
        { id: 3, client: "Mellisa", review: "Very professional. understood everything i needed with out explanation. completed faster than expected & delivered what was requested." },
        {
            id: 4, client: "Havre de Grace", review: "Embedai.io has talented professionals, but this project wasn't the best fit for both sides. Initially, the endpoints retrieved were said to include schedulers, but upon closing the contract, it was discovered that not all of them had schedulers. However, the team took responsibility, completed the scrapers, and handed off their work to the internal team taking over the project.While greater availability and more focused attention from the team could have enhanced the project, I understand they have other responsibilities—such is life.That said, they demonstrated impressive speed in collecting endpoints, which was very much appreciated."
        },
        { id: 5, client: "Lily", review: "Professional and efficient team. Great experience!" },
        // Add more reviews here
    ];

    // Slick carousel settings for clients' logos
    const clientCarouselSettings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: <ChevronRightIcon />,
        prevArrow: <ChevronLeftIcon />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box py={10} bg="#f9f9f9">
            {/* Client Logos Carousel */}
            <Box mb={8}>
                <Heading textAlign="center" fontSize="2xl" mb={4}>
                    Our Trusted Clients
                </Heading>
                <Slider {...clientCarouselSettings}>
                    {clients.map((client) => (
                        <Box key={client.id} display="flex" justifyContent="center" alignItems="center">
                            <Image src={client.logo} alt={client.name} boxSize="120px" objectFit="contain" />
                        </Box>
                    ))}
                </Slider>
            </Box>

            {/* Client Reviews */}
            <Box py={10} bg="#f9f9f9">
                <Box textAlign="center" mb={8}>
                    <Heading
                        textTransform="uppercase"
                        fontWeight="bold"
                        fontSize={{ base: "1.5rem", md: "2rem" }}
                        mb={4}
                    >
                        What the Experts Are Saying
                    </Heading>
                    {reviews.map((review) => (
                        <Box
                            key={review.id}
                            bg="transparent"
                            borderRadius="lg"
                            padding={6}
                            maxW="600px"
                            mx="auto"
                            mb={8}
                            textAlign="center"
                            transition="all 0.3s ease"
                            _hover={{ boxShadow: "sm", transform: "scale(1.02)" }}
                        >
                            <Divider borderColor={"gray.300"} mb={4} />
                            <Box mb={4}>
                                {[...Array(5)].map((_, index) => (
                                    <Icon as={StarIcon} key={index} color="red.500" boxSize={5} />
                                ))}
                            </Box>
                            <Text fontSize="lg" fontStyle="italic" mb={4}>
                                &quot;{review.review}&quot;
                            </Text>
                            <Text mt={4} fontWeight="bold" fontSize="lg">
                                - {review.client}
                            </Text>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ClientReviews;
