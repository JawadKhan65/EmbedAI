import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

import banner1 from "../public/banners/banner1.png";
import banner2 from "../public/banners/banner2.png";
import banner3 from "../public/banners/banner3.png";
import banner4 from "../public/banners/banner4.png";
import banner5 from "../public/banners/banner5.png";
import banner6 from "../public/banners/banner6.png";
import banner7 from "../public/banners/banner7.png";
import banner8 from "../public/banners/banner8.png";
import banner9 from "../public/banners/banner9.png";
import banner10 from "../public/banners/banner10.png";
import banner11 from "../public/banners/banner11.png";
import Image from 'next/image';

const ImageCarousel = () => {
    // Array of image sources
    const imageSources = [
        banner1,
        banner2,
        banner3,
        banner4,
        banner5,
        banner6,
        banner7,
        banner8,
        banner9,
        banner10,
        banner11
    ];

    return (
        <Box p={4}
            className='carousel-container'
            bg={'linear-gradient(200deg,#090a0f 50% , #3734eb ,#34ebeb);'} width={"100vw"}>
            <Text textAlign={"center"} fontSize="xl" color={"white"} mb={4}>
                Our Services
            </Text>
            <Carousel
                className='p-8'
                showArrows={true}
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={3000}
                transitionTime={500}
            >
                {imageSources.map((src, index) => (
                    <div key={index}>
                        <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            width={600} // Set a width for proper optimization
                            height={400} // Set a height for proper optimization
                            style={{
                                objectFit: 'contain', // Keeps aspect ratio while fitting the image in its container
                            }}
                        />
                    </div>
                ))}
            </Carousel>
        </Box>
    );
};

export default ImageCarousel;
