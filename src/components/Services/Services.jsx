import React, { useContext } from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import Card from '../Card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import { themeContext } from '../../Context';
import Resume from './unorjiKingsleyResume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;

  // transition
  const transition = {
    duration: 1,
    type: 'spring',
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>services</span>
        <spane>
          I have undertaken a variety of projects encompassing product design
          employing tools such as
          <br />
          Adobe XD and Figma, content and website management, as well as
          software development.
        </spane>
        <a href={Resume} download>
          <button type="button" className="button s-button">
            Download CV
          </button>
        </a>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }} />
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading="Design"
            detail="Figma, Photoshop, Adobe Illustrator, Adobe xd"
            link="https://www.figma.com/proto/MmdR4WZ339lsSQ46Rxntvi/Portfolio?node-id=2-13&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A13"
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: '-11rem', top: '12rem' }}
          whileInView={{ left: '-4rem' }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading="Developer"
            detail="Html, Css, JavaScript, React, Ruby on Rails, Nodejs, Express"
            link="https://github.com/unorjikingsley"
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: '19rem', left: '25rem' }}
          whileInView={{ left: '12rem' }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading="Database Management"
            detail="PostgreSQL Syntax and Queries"
            link="https://github.com/unorjikingsley/Vet-Clinic-Database"
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: 'var(--purple)' }}
        />
      </div>
    </div>
  );
};

export default Services;
