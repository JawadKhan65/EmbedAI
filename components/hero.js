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
import ImageGrid from './Carousel'
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

      </div>
    </>
  )
}

Hero.defaultProps = {
  action2: 'Explore Pricing',
  action1: 'Start Free Trial',
  heading1: 'Transform Your Business with AI-as-a-Service (AIaaS)',
  content1:
    'EmbedAI delivers advanced AI-as-a-Service (AIaaS) solutions tailored to streamline your operations. From automated customer interactions to data-driven decision making, our scalable AI tools empower your business to evolve and stay competitive in the digital era.',
  image9Alt: 'AI Automation',
}

Hero.propTypes = {
  action2: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero
