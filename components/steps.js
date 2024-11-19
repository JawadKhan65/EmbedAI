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
                Unlock the Full Potential of Our Solutions
              </h2>
              <p className="thq-body-large">
                Leverage cutting-edge AI to optimize your operations, improve customer interactions, and drive growth.
              </p>
              <p className="thq-body-large">
                Our solutions are customizable, designed to meet the unique needs of your business and deliver measurable results.
              </p>
              <p className="thq-body-large">
                Whether you are improving efficiency or enhancing customer experiences, our tools are here to support your journey.
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
              {/* Additional Steps */}
              <div className="steps-container4 thq-card">
                <h2 className="thq-heading-2">{props.step5Title}</h2>
                <span className="steps-text26 thq-body-small">
                  {props.step5Description}
                </span>
                <label className="steps-text15 thq-heading-3">05</label>
              </div>
              <div className="steps-container5 thq-card">
                <h2 className="thq-heading-2">{props.step6Title}</h2>
                <span className="steps-text29 thq-body-small">
                  {props.step6Description}
                </span>
                <label className="steps-text18 thq-heading-3">06</label>
              </div>
              <div className="steps-container6 thq-card">
                <h2 className="thq-heading-2">{props.step7Title}</h2>
                <span className="steps-text32 thq-body-small">
                  {props.step7Description}
                </span>
                <label className="steps-text21 thq-heading-3">07</label>
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
    'Transform your customer interactions with AI-powered solutions that adapt to your specific needs. Engage with customers seamlessly, improve satisfaction, and boost loyalty.',
  step2Description:
    'Unlock valuable insights using advanced AI analytics. Our solutions help you understand customer behavior, optimize processes, and stay ahead in an ever-changing market.',
  step3Description:
    'Integrate AI into your existing systems effortlessly. Our tools are designed to work with your workflows, improving efficiency and enhancing productivity without disruption.',
  step4Description:
    'Measure success with data-driven metrics. Our AI continuously optimizes its performance to deliver consistent and impactful results for your business.',
  step5Description:
    'Automate routine tasks to increase operational efficiency. Our solutions reduce manual workloads, improve accuracy, and allow your team to focus on higher-value tasks.',
  step6Description:
    'Enhance decision-making with AI-powered predictive analytics. Anticipate future trends, optimize resources, and make informed decisions to stay ahead of the competition.',
  step7Description:
    'Ensure long-term success by continuously optimizing your AI solutions. Our platform learns from data and adapts to evolving business needs, delivering ongoing value.',
  step1Title: 'Enhance Engagement with AI',
  step2Title: 'Unlock Valuable Insights',
  step3Title: 'Effortless Integration',
  step4Title: 'Track and Optimize Performance',
  step5Title: 'Automate Routine Tasks',
  step6Title: 'Empower Data-Driven Decisions',
  step7Title: 'Continuous Optimization for Success',
}

Steps.propTypes = {
  step1Description: PropTypes.string,
  step2Description: PropTypes.string,
  step3Description: PropTypes.string,
  step4Description: PropTypes.string,
  step5Description: PropTypes.string,
  step6Description: PropTypes.string,
  step7Description: PropTypes.string,
  step1Title: PropTypes.string,
  step2Title: PropTypes.string,
  step3Title: PropTypes.string,
  step4Title: PropTypes.string,
  step5Title: PropTypes.string,
  step6Title: PropTypes.string,
  step7Title: PropTypes.string,
}

export default Steps
