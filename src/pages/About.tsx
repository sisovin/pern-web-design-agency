import React from 'react';
import MainLayout from '../layouts/MainLayout';

const About: React.FC = () => {
  return (
    <MainLayout>
      <section>
        <h1>About Us</h1>
        <p>Welcome to our web design agency. We specialize in creating beautiful and functional websites for businesses of all sizes. Our team of experienced designers and developers are dedicated to delivering high-quality solutions that meet your unique needs.</p>
        <p>Our mission is to help businesses succeed online by providing them with the tools and support they need to thrive in the digital world. Whether you need a new website, a redesign, or ongoing maintenance, we are here to help.</p>
        <p>Contact us today to learn more about our services and how we can help your business grow.</p>
      </section>
    </MainLayout>
  );
};

export default About;
