'use client'
import React, { useState } from 'react'

import PropTypes from 'prop-types'
import Image from 'next/image'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features2-container2 thq-section-max-width">
          <div className="features2-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features2-tab-horizontal1"
            >
              <div className="features2-divider-container1">
                {activeTab === 0 && (
                  <div className="features2-container3"></div>
                )}
              </div>
              <div className="features2-content1">
                <h2 className="thq-heading-2">{props.feature1Title}</h2>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features2-tab-horizontal2"
            >
              <div className="features2-divider-container2">
                {activeTab === 1 && (
                  <div className="features2-container4"></div>
                )}
              </div>
              <div className="features2-content2">
                <h2 className="thq-heading-2">{props.feature2Title}</h2>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features2-tab-horizontal3"
            >
              <div className="features2-divider-container3">
                {activeTab === 2 && (
                  <div className="features2-container5"></div>
                )}
              </div>
              <div className="features2-content3">
                <h2 className="thq-heading-2">{props.feature3Title}</h2>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
          <div className="features2-image-container">
            {activeTab === 0 && (
              <Image
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features2-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <Image
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features2-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <Image
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features2-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>

    </>
  )
}

Features2.defaultProps = {
  feature1Title: 'Advanced Customizable Chatbots',
  feature1Description: 'Empower your business with our highly adaptable chatbots, tailored to meet your specific needs. Integrate seamlessly with your data files, PDF documents, and graph queries to enhance user interactions and operational efficiency.',
  feature1ImgSrc: 'https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzU2MDYxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Advanced Customizable Chatbots',

  feature2Title: 'Seamless System Integration',
  feature2Description: 'Effortlessly integrate our chatbots with your existing systems to optimize functionality. Our solutions support a wide range of data sources, including PDFs and graph queries, to streamline your workflows and improve data accessibility.',
  feature2ImgSrc: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzU2MDYxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Seamless System Integration',

  feature3Title: 'Generate More Leads',
  feature3Description: 'Maximize customer satisfaction and generate quality leads with our 24/7 chatbot support. Utilize our advanced recommendation systems to offer personalized interactions and insights, driving engagement and boosting your business growth.',
  feature3ImgSrc: 'https://images.unsplash.com/photo-1553895501-af9e282e7fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzU2MDYxNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: '24/7 Chatbot Support & Lead Generation',
}


Features2.propTypes = {
  feature3Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features2
