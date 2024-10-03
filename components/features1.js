'use client'
import React, { useState } from 'react'
import automation from "../public/Content/Automation.png"
import PropTypes from 'prop-types'
import Image from "next/image"

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding about">
        <div className="features1-container2 thq-section-max-width">

          <div className="features1-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features1-tab-horizontal1"
            >
              <div className="features1-divider-container1">
                {activeTab === 0 && (
                  <div className="features1-container3"></div>
                )}
              </div>
              <div className="features1-content1">
                <h2 className="thq-heading-2">{props.feature1Title}</h2>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features1-tab-horizontal2"
            >
              <div className="features1-divider-container2">
                {activeTab === 1 && (
                  <div className="features1-container4"></div>
                )}
              </div>
              <div className="features1-content2">
                <h2 className="thq-heading-2">{props.feature2Title}</h2>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features1-tab-horizontal3"
            >
              <div className="features1-divider-container3">
                {activeTab === 2 && (
                  <div className="features1-container5"></div>
                )}
              </div>
              <div className="features1-content3">
                <h2 className="thq-heading-2">{props.feature3Title}</h2>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>

          {/* Summary of services offered by EmbedAI */}
          <div className="services-summary">
            <h2 className="thq-heading-2">Our AI-Powered Solutions</h2>
            <p className="thq-body-large">
              At EmbedAI, we provide advanced AI-driven solutions tailored to elevate your business processes:
            </p>
            <ul className="thq-body-medium">
              <li><strong>AI-Enhanced Chatbots</strong>: Automate customer support with intelligent, real-time responses.</li>
              <li><strong>24/7 Customer Assistance</strong>: Ensure your clients receive uninterrupted service anytime.</li>
              <li><strong>Seamless Integration</strong>: Easily incorporate AI into your current systems for enhanced performance.</li>
              <li><strong>Data-Driven Insights</strong>: Leverage AI to gain actionable insights from customer interactions.</li>
              <li><strong>Cost-Effective Automation</strong>: Reduce operational costs through AI-powered automation solutions.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

Features1.defaultProps = {
  feature1Title: 'AI-Enhanced Chatbot',
  feature1Description: 'Leverage cutting-edge AI to deliver prompt and precise responses, ensuring superior customer engagement and satisfaction.',
  feature1ImgSrc: automation,
  feature1ImgAlt: 'AI-Enhanced Customer Support Chatbot',

  feature2Title: 'Round-the-Clock Support',
  feature2Description: 'Guarantee uninterrupted service with 24/7 availability, providing your customers with the assistance they need at any time.',
  feature2ImgSrc: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzU2MDYxNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: '24/7 Customer Service Availability',

  feature3Title: 'Seamless System Integration',
  feature3Description: 'Effortlessly integrate our chatbot into your existing support infrastructure, streamlining processes and enhancing operational efficiency.',
  feature3ImgSrc: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzU2MDYxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'Integration with Existing Support Systems',
}

Features1.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
}

export default Features1
