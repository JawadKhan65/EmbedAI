'use client'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useUserAndSubscription from './UserDetailsSubscription';
import Link from 'next/link';
const Pricing = (props) => {
  const [isMonthly, setIsMonthly] = useState(true);
  const { token, userDetails, email, first_name, last_name, id, img_link,
    chats, length_chats, subscription, chatbots } = useUserAndSubscription()

  // Use the plans based on the current selection
  const plans = isMonthly ? props.monthlyPlans : props.yearlyPlans;

  return (
    <>
      <div className="pricing-pricing23 thq-section-padding">
        <div className="pricing-max-width thq-section-max-width">
          <div className="pricing-section-title">
            <h1 className="font-bold text-lg thq-heading-2">{props.heading2}</h1>
            <span className="pricing-text10 thq-body-small font-semibold">
              {props.content1}
            </span>
            <div className="pricing-content">
              <h2 className="pricing-text11 thq-heading-2">{props.heading1}</h2>
              <p className="pricing-text12 thq-body-large">{props.content2}</p>
            </div>
          </div>

          {/* Toggle Buttons */}
          <div className="pricing-tabs">
            <button
              onClick={() => setIsMonthly(true)}
              className={`pricing-button10 thq-button-animated ${isMonthly ? "thq-button-filled" : "thq-button-outline"}`}
            >
              <span className="thq-body-small">Monthly</span>
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`pricing-button13 thq-button-animated ${!isMonthly ? "thq-button-filled" : "thq-button-outline"}`}
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          </div>

          {/* Plan Cards */}
          <div className={`pricing-container1 ${isMonthly ? "pricing-container1" : "pricing-container2"} `}>
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card `}>
                <div className={`pricing-price${0 + 10}`}>
                  <p className="pricing-text17 thq-body-">{plan.name}</p>
                  <h3 className="pricing-text18 thq-heading-3">{plan.price}</h3>
                  <p className="thq-body-large">{plan.yearlyPrice}</p>
                </div>
                <div className="pricing-list mb-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className={`pricing-list-item${0 + 10}`}>
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className={`pricing-button14  thq-button-animated ${"thq-button-outline"}`}>
                  {token !== undefined ?
                    <Link href='/dashboard'>

                      <span className="thq-body-small">Subscribe</span>
                    </Link>
                    :
                    <Link href='/register'>

                      <span className="thq-body-small">{plan.action}</span>
                    </Link>
                  }

                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Pricing.propTypes = {
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  monthlyPlans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      yearlyPrice: PropTypes.string,
      features: PropTypes.arrayOf(PropTypes.string),
      action: PropTypes.string,
      isPrimary: PropTypes.bool,
    })
  ),
  yearlyPlans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      yearlyPrice: PropTypes.string,
      features: PropTypes.arrayOf(PropTypes.string),
      action: PropTypes.string,
      isPrimary: PropTypes.bool,
    })
  ),
};

Pricing.defaultProps = {
  heading1: 'Flexible Pricing Plans to Suit Your Needs',
  heading2: "Pricing",
  content1: 'Choose from our flexible pricing plans designed to suit businesses of all sizes, and enjoy enhanced customer support with tailored features.',
  content2: 'Experience our best-in-class features and find the perfect plan to elevate your customer support and drive your business forward.',

  monthlyPlans: [
    {
      name: 'Free Plan',
      price: '$0/month',
      yearlyPrice: '',
      features: ['100 messages/month', '1 chatbot', '10 training content pieces', '1 website integration', 'No API access'],
      action: 'Sign Up',
      isPrimary: false,
    },
    {
      name: 'Starter Plan',
      price: '$29/month',
      yearlyPrice: '',
      features: ['Unlimited messages', '3 chatbots', '100 training content pieces', 'Unlimited integrations', 'API access'],
      action: 'Sign Up',
      isPrimary: false,
    },
    {
      name: 'Pro Plan',
      price: '$49/month',
      yearlyPrice: '',
      features: ['Unlimited messages', '5 chatbots', '300 training content pieces', 'Unlimited integrations', 'API access', 'Remove branding'],
      action: 'Get Started',
      isPrimary: true,
    },
    {
      name: 'Enterprise Plan',
      price: '$89/month',
      yearlyPrice: '',
      features: ['Unlimited messages', '7 chatbots', 'Unlimited training content ', 'Unlimited integrations', 'API access', 'Remove branding', 'Dedicated support'],
      action: 'Contact Us',
      isPrimary: false,
    },
  ],

  yearlyPlans: [
    {
      name: 'Free Plan',
      price: '$0/year',
      yearlyPrice: '',
      features: ['100 messages/month', '1 chatbot', '10 training content pieces', '1 website integration', 'No API access'],
      action: 'Sign Up',
      isPrimary: false,
    },
    {
      name: 'Starter Plan',
      price: '$348/year',
      yearlyPrice: '',
      features: ['Unlimited messages', '3 chatbots', '100 training content pieces', 'Unlimited integrations', 'API access'],
      action: 'Sign Up',
      isPrimary: false,
    },
    {
      name: 'Pro Plan',
      price: '$588/year',
      yearlyPrice: '',
      features: ['Unlimited messages', '5 chatbots', '300 training content pieces', 'Unlimited integrations', 'API access', 'Remove branding'],
      action: 'Get Started',
      isPrimary: true,
    },
    {
      name: 'Enterprise Plan',
      price: '$1068/year',
      yearlyPrice: '',
      features: ['Unlimited messages', '7 chatbots', 'Unlimited training content ', 'Unlimited integrations', 'API access', 'Remove branding', 'Dedicated support'],
      action: 'Contact Us',
      isPrimary: false,
    },
  ],
};


export default Pricing;
