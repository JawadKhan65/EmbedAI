'use client'
import React from 'react'

import PropTypes from 'prop-types'

const CTA = (props) => {
  const handleScrollContact = () => {
    const contact = document.getElementsByClassName('contact-contact20')[0];
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="thq-section-padding">
        <div className="thq-section-max-width">
          <div className="cta-accent2-bg">
            <div className="cta-accent1-bg">
              <div className="cta-container2">
                <div className="cta-content">
                  <span className="thq-heading-2">{props.heading1}</span>
                  <p className="thq-body-large">{props.content1}</p>
                </div>
                <div className="cta-actions">
                  <button
                    onClick={handleScrollContact}
                    type="button"
                    className="thq-button-filled cta-button"
                  >
                    {props.action1}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
CTA.defaultProps = {
  heading1: 'Unlock 24/7 Customer Support with AI-Driven Chatbots',
  content1:
    'Deliver exceptional customer service around the clock with our state-of-the-art AI chatbot solutions. Reduce response times and enhance customer satisfaction with instant, automated assistance.',
  action1: 'Start Your Journey',
}


CTA.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA
