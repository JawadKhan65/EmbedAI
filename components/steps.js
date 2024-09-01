'use client'

import React from 'react'

import PropTypes from 'prop-types'

const Steps = (props) => {
  return (
    <>
      <div className="steps-container1 thq-section-padding">
        <div className="steps-max-width thq-section-max-width">
          <div className="steps-container2 thq-grid-2">
            <div className="steps-section-header">
              <h2 className="thq-heading-2">
                Discover the Power of Our Products
              </h2>
              <p className="thq-body-large">
                Enhance your customer support with our AI-driven chatbots that you can easily train on your unique data.
              </p>
              <p className="thq-body-large">
                Our solutions are designed to streamline customer interactions, reduce response times, and increase satisfaction.
              </p>
              <p className="thq-body-large">
                Whether you need support for sales, troubleshooting, or general inquiries, our customizable chatbots are here to help.
              </p>
              <div className="steps-actions">
                <button className="thq-button-animated thq-button-filled steps-button">
                  <span className="thq-body-small">Main action</span>
                </button>
              </div>
            </div>
            <div className="steps-container3">
              <div className="steps-container4 thq-card">
                <h2 className="thq-heading-2">{props.step1Title}</h2>
                <span className="steps-text14 thq-body-small">
                  {props.step1Description}
                </span>
                <label className="steps-text15 thq-heading-3">01</label>
              </div>
              <div className="steps-container5 thq-card">
                <h2 className="thq-heading-2">{props.step2Title}</h2>
                <span className="steps-text17 thq-body-small">
                  {props.step2Description}
                </span>
                <label className="steps-text18 thq-heading-3">02</label>
              </div>
              <div className="steps-container6 thq-card">
                <h2 className="thq-heading-2">{props.step3Title}</h2>
                <span className="steps-text20 thq-body-small">
                  {props.step3Description}
                </span>
                <label className="steps-text21 thq-heading-3">03</label>
              </div>
              <div className="steps-container7 thq-card">
                <h2 className="thq-heading-2">{props.step4Title}</h2>
                <span className="steps-text23 thq-body-small">
                  {props.step4Description}
                </span>
                <label className="steps-text24 thq-heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

Steps.defaultProps = {
  step1Description:
    'Create an account with us to get started with our customer support services chatbot.',
  step3Description:
    'Easily integrate the chatbot with your website.',
  step2Title: 'Customize Your Chatbot',
  step2Description:
    'Tailor the chatbot to suit your brand and customer support needs.',
  step1Title: 'Sign Up for Our Services',
  step3Title: 'Integrate with Your Platforms',
  step4Description:
    'Deploy the chatbot to start assisting your customers and track its performance.',
  step4Title: 'Launch and Monitor Performance',
}

Steps.propTypes = {
  step1Description: PropTypes.string,
  step3Description: PropTypes.string,
  step2Title: PropTypes.string,
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
  step3Title: PropTypes.string,
  step4Description: PropTypes.string,
  step4Title: PropTypes.string,
}

export default Steps
