'use client'

import React from 'react'
import logo from '../public/embed-ai-full.png'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { Box, Text, Divider } from '@chakra-ui/react'

const Footer = (props) => {
  const handleRegister = () => {
    router.push('/register');
  };
  let data = new Date()
  let ano = data.getFullYear()

  const handleScrollPricing = () => {
    const pricing = document.getElementsByClassName('pricing-pricing23')[0];
    if (pricing) {
      pricing.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollContact = () => {
    const contact = document.getElementsByClassName('contact-contact20')[0];
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollServices = () => {
    const services = document.getElementsByClassName('steps-container1')[0];
    if (services) {
      services.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollAbout = () => {
    const about = document.getElementsByClassName('about')[0];
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="footer-footer1 thq-section-padding">
        <div className="footer-max-width thq-section-max-width">
          <div className="footer-content">
            <div className="footer-newsletter">
              <Image
                height={100}
                width={100}
                alt={props.logoAlt}
                src={logo}
                className="footer-image1"
              />
            </div>
            <div className="footer-links">
              <div className="footer-column1">
                <strong className="thq-body-large footer-column1-title">
                  {props.column1Title}
                </strong>
                <div className="footer-footer-links1">
                  <a

                    onClick={handleScrollPricing}
                    className="thq-body-small "
                  >
                    {props.link1}
                  </a>
                  <a
                    onClick={handleScrollContact}
                    className="thq-body-small"
                  >
                    {props.link2}
                  </a>
                  <a
                    onClick={handleScrollServices}
                    className="thq-body-small"
                  >
                    {props.link3}
                  </a>
                  <a
                    onClick={handleScrollAbout}
                    className="thq-body-small"
                  >
                    {props.link4}
                  </a>
                  <a
                    onClick={handleRegister}
                    className="thq-body-small"
                  >
                    {props.link5}
                  </a>
                </div>
              </div>

              <div className="footer-column3">
                <strong className="thq-body-large footer-social-link1-title">
                  {props.socialLinkTitleCategory}
                </strong>
                <div className="footer-social-links">
                  <div className="footer-link1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small cursor-pointer"
                    >
                      <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                    </svg>
                    <span className="thq-body-small hover:cursor-pointer">Facebook</span>
                  </div>
                  <div className="footer-link2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <span className="thq-body-small hover:cursor-pointer">Instagram</span>
                  </div>
                  <div className="footer-link3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M292.571 720v-416l365.714 208z"></path>
                    </svg>
                    <span className="thq-body-small hover:cursor-pointer">Youtube</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider mt={4} border={"gray.900"}></Divider>
        <Box mt={10} p={5} >
          <Text mb={2} fontWeight={700}>Designed By EmbedAI |
            &copy;{ano} {props.copyright}
          </Text>


        </Box>
      </footer>
    </>
  );
};

Footer.defaultProps = {
  column1Title: 'Services',
  column2Title: 'Solutions',
  logoAlt: 'image',
  link1: 'Pricing',
  link2: 'Contact',
  link3: 'Services',
  link4: 'About',
  link5: 'Register',

  socialLinkTitleCategory: 'Social',
  copyright: 'All Rights Reserved.',
};

Footer.propTypes = {
  column1Title: PropTypes.string,
  column2Title: PropTypes.string,
  logoAlt: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,

  socialLinkTitleCategory: PropTypes.string,
  copyright: PropTypes.string,
};

export default Footer;
