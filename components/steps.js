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
    'Unlock unprecedented customer engagement by leveraging our intelligent chatbot solutions tailored to your unique business needs. Experience seamless interactions that enhance satisfaction and build loyalty.',
  step2Description:
    'Empower your team with actionable insights derived from our advanced analytics. Our AI not only learns but also adapts, ensuring you stay ahead in understanding customer preferences.',
  step3Description:
    'Streamline operations and enhance efficiency by integrating our AI solutions into your existing workflows. Our easy-to-use tools ensure a smooth transition that maximizes productivity.',
  step4Description:
    'Witness measurable results with our AI-driven support system. We provide continuous monitoring and optimization to ensure your chatbot delivers the best possible service to your customers.',
  step1Title: 'Enhance Customer Engagement',
  step2Title: 'Gain Actionable Insights',
  step3Title: 'Integrate Seamlessly',
  step4Title: 'Measure Success',
}

Steps.propTypes = {
  step1Description: PropTypes.string,
  step2Description: PropTypes.string,
  step3Description: PropTypes.string,
  step4Description: PropTypes.string,
  step1Title: PropTypes.string,
  step2Title: PropTypes.string,
  step3Title: PropTypes.string,
  step4Title: PropTypes.string,
}

export default Steps
