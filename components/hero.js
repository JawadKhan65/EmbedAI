'use client'
import React from 'react'

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
          {/* <div className="hero-actions">
            <button className="thq-button-filled hero-button1">
              <span className="thq-body-small">{props.action1}</span>
            </button>
            <button onClick={handleScrollPricing} className="thq-button-outline hero-button2">
              <span className="thq-body-small">{props.action2}</span>
            </button>
          </div> */}
        </div>

      </div>
    </>
  )
}

Hero.defaultProps = {

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
