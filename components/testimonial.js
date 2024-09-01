'use client'

import React from 'react'

import PropTypes from 'prop-types'
import Image from 'next/image'

const Testimonial = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial-max-width thq-section-max-width">
          <div className="testimonial-container10">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="testimonial-text11 thq-body-small">
              {props.content1}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card1"
                >
                  <div className="testimonial-container12">
                    <Image
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial-image1"
                    />
                    <div className="testimonial-container13">
                      <strong className="thq-body-large">
                        {props.author1Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author1Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text14 thq-body-small">
                    {props.review1}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card2"
                >
                  <div className="testimonial-container14">
                    <Image
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial-image2"
                    />
                    <div className="testimonial-container15">
                      <strong className="thq-body-large">
                        {props.author2Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author2Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text17 thq-body-small">
                    {props.review2}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card3"
                >
                  <div className="testimonial-container16">
                    <Image
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial-image3"
                    />
                    <div className="testimonial-container17">
                      <strong className="thq-body-large">
                        {props.author3Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author3Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text20 thq-body-small">
                    {props.review3}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card4"
                >
                  <div className="testimonial-container18">
                    <Image
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial-image4"
                    />
                    <div className="testimonial-container19">
                      <strong className="thq-body-large">
                        {props.author4Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author4Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text23 thq-body-small">
                    {props.review4}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

Testimonial.defaultProps = {
  author2Position: 'COO, Company XYZ',
  author1Position: 'CEO, Company ABC',
  author3Alt: 'Image of David Johnson',
  author1Name: 'John Doe',
  author1Src:
    'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzU2MDYxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'David Johnson',
  review2:
    'We implemented the chatbot solution from Customer Support Services and saw a noticeable decrease in support tickets and an increase in customer engagement.',
  author2Name: 'Jane Smith',
  author4Position: 'CMO, Company ABCD',
  author4Name: 'Sarah Lee',
  author4Src:
    'https://images.unsplash.com/photo-1496813146940-1601b02f81a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzU2MDYxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe',
  author2Src:
    'https://images.unsplash.com/photo-1492462543947-040389c4a66c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzU2MDYxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1584891800774-6f8c93265d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzU2MDYxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  author4Alt: 'Image of Sarah Lee',
  content1:
    'See what our customers have to say about our customer support services chatbot.',
  author3Position: 'CTO, Company 123',
  review1:
    'The chatbot provided by Customer Support Services has significantly improved our customer response time and satisfaction. Highly recommended!',
  heading1: 'Testimonials',
  review3:
    'The chatbot technology provided by Customer Support Services is top-notch. It has streamlined our support process and saved us valuable time.',
  review4:
    "Customer Support Services' chatbot has been a game-changer for our marketing team. It has allowed us to provide instant assistance to our clients round the clock.",
}

Testimonial.propTypes = {
  author2Position: PropTypes.string,
  author1Position: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author1Src: PropTypes.string,
  author3Name: PropTypes.string,
  review2: PropTypes.string,
  author2Name: PropTypes.string,
  author4Position: PropTypes.string,
  author4Name: PropTypes.string,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  content1: PropTypes.string,
  author3Position: PropTypes.string,
  review1: PropTypes.string,
  heading1: PropTypes.string,
  review3: PropTypes.string,
  review4: PropTypes.string,
}

export default Testimonial
