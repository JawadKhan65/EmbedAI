'use client'
import React from 'react'
import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'

const Contact = (props) => {
  return (
    <>
      <Box fontStyle={"Epilogue"} py={16} >
        <div className="contact-max-width thq-section-max-width">
          <div className="contact-section-title">
            <span className="thq-body-small">{props.content2}</span>
            <div className="contact-content1">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <p className="contact-text3 thq-body-large">{props.content1}</p>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-content2">

              <div className="contact-contact-info1">
                <div className="contact-content3">
                  <a href='mailto:${props.email1}' target='_blank'>

                    <h3 className="contact-text4 thq-heading-3"><EmailIcon /> Email</h3>
                  </a>

                </div>

              </div>
            </div>
            <div className="contact-content4">

              <div className="contact-contact-info2">
                <div className="contact-content5">
                  <h3 className="contact-text6 thq-heading-3"><PhoneIcon /> Phone</h3>

                </div>
                <span className="contact-phone thq-body-small">
                  {props.phone1}
                </span>
              </div>
            </div>
            <div className="contact-content6">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact-contact-info3">
                <div className="contact-content7">
                  <h3 className="contact-text8 thq-heading-3"> Office</h3>

                </div>
                <span className="contact-address thq-body-small">
                  {props.address1}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Box>

    </>
  )
}

Contact.defaultProps = {
  heading1: 'Contact Us - 24/7 Customer Support',
  content1: 'Have a question or need support with our AI-powered chatbots? Reach out to us!',
  content2: 'Our expert support team is available 24/7 to assist you with any inquiries.',
  email1: 'embedai.io@gmail.com',
  phone1: '+92-329-7833100',
  address1: 'Pakistan',
  content3: 'For general inquiries or specific support needs, feel free to email or call us anytime.',
  content4: 'Visit our office during business hours for in-person assistance with our products and services.',
  content5: 'Follow us on social media for the latest updates, tips, and best practices for using our chatbots.',
}


Contact.propTypes = {
  content2: PropTypes.string,
  email1: PropTypes.string,
  address1: PropTypes.string,
  content3: PropTypes.string,
  content1: PropTypes.string,
  content4: PropTypes.string,
  heading1: PropTypes.string,
  content5: PropTypes.string,
  phone1: PropTypes.string,
}

export default Contact
