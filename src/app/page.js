'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import Features1 from '../../components/features1';
import CTA from '../../components/cta';
import Features2 from '../../components/features2';
import Pricing from '../../components/pricing';
import Steps from '../../components/steps';
import Testimonial from '../../components/testimonial';
import Contact from '../../components/contact';
import Footer from '../../components/footer';
import RenderDashboard from '../../components/Dashboard';

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Embed AI</title>
      </Head>
      <div className="home-container">
        {/* <Navbar /> */}
        <Hero />
        <Features1 />
        <CTA />
        <Features2 />
        <Pricing />
        <Steps />
        <Testimonial />
        <Contact />
        <Footer />
        {/* <RenderDashboard /> */}
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  );
};

export default Home;
