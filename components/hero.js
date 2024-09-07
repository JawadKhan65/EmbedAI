'use client'
import React from 'react'
import banner1 from "../public/banners/banner1.png"
import banner2 from "../public/banners/banner2.png"
import banner3 from "../public/banners/banner3.png"
import banner4 from "../public/banners/banner4.png"
import banner5 from "../public/banners/banner5.png"
import banner6 from "../public/banners/banner6.png"
import banner7 from "../public/banners/banner7.png"
import banner8 from "../public/banners/banner8.png"
import banner9 from "../public/banners/banner9.png"
import banner10 from "../public/banners/banner10.png"
import banner11 from "../public/banners/banner11.png"

import Image from 'next/image'
import PropTypes from 'prop-types'

const Hero = (props) => {
  const handleScrollPricing = () => {
    const pricing = document.getElementsByClassName('pricing-pricing23')[0];
    if (pricing) {
      pricing.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="hero-header78">
        <div className="hero-column thq-section-padding thq-section-max-width">
          <div className="hero-content1">
            <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
            <p className="hero-text2 thq-body-large">{props.content1}</p>
          </div>
          <div className="hero-actions">
            <button className="thq-button-filled hero-button1">
              <span className="thq-body-small">{props.action1}</span>
            </button>
            <button onClick={handleScrollPricing} className="thq-button-outline hero-button2">
              <span className="thq-body-small">{props.action2}</span>
            </button>
          </div>
        </div>
        <div className="hero-content2">
          <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal">
              <Image
                height={250}
                width={550}
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero-placeholder-image10 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero-placeholder-image11 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero-placeholder-image12 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero-placeholder-image13 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero-placeholder-image14 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero-placeholder-image15 thq-Image-scale thq-Image-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <Image
                height={250}
                width={350}
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero-placeholder-image16 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero-placeholder-image17 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero-placeholder-image18 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero-placeholder-image19 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero-placeholder-image19 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero-placeholder-image20 thq-Image-scale thq-Image-ratio-1-1"
              />

            </div>
          </div>
          <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal-reverse">

              <Image
                height={250}
                width={350}
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero-placeholder-image23 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero-placeholder-image24 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero-placeholder-image25 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero-placeholder-image26 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero-placeholder-image27 thq-Image-scale thq-Image-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal-reverse">
              <Image
                height={250}
                width={350}
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero-placeholder-image28 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero-placeholder-image29 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero-placeholder-image30 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero-placeholder-image31 thq-Image-scale thq-Image-ratio-1-1"
              />
              <Image
                height={250}
                width={350}
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero-placeholder-image32 thq-Image-scale thq-Image-ratio-1-1"
              />

            </div>
          </div>
        </div>

      </div>

    </>
  )
}

Hero.defaultProps = {

  image1Src: banner1,
  image2Src: banner2,
  image3Src: banner3,
  image4Src: banner4,
  image5Src: banner5,
  image6Src: banner6,
  image7Src: banner7,
  image8Src: banner8,
  image9Src: banner9,
  image10Src: banner10,
  image11Src: banner11,


  image8Alt: 'Embed AI',
  image6Alt: 'Embed AI',
  image5Alt: 'Embed AI',
  image1Alt: 'Chatbot in action',
  image7Alt: 'Embed AI',
  image2Alt: 'Embed AI',
  image3Alt: 'Embed AI',
  image11Alt: 'Embed AI',
  action2: 'Pricing',
  action1: 'Get Started',
  image10Alt: 'Embed AI',
  image4Alt: 'Embed AI',
  heading1: 'Revolutionize Your Customer Service with AI Chatbots',
  content1:
    'Elevate your customer service experience with our cutting-edge chatbot solutions. Simplify interactions, deliver immediate responses, and boost customer satisfaction effortlessly.',

  image9Alt: 'Embed AI',
}

Hero.propTypes = {
  image3Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image12Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero
