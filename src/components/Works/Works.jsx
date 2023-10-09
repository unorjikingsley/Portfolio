import React, { useContext } from 'react';
import './Works.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Node from '../../img/nodejs.png';
import Postgres from '../../img/postgresql.png';
import Bootstrap from '../../img/bootstrap.png';
import Redux from '../../img/redux.png';
import Rails from '../../img/rails.png';
import { themeContext } from '../../Context';

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? 'white' : '' }}>
            Technologies I use
          </span>
          <span>Languages & Frameworks</span>
          <spane>
            Languages: Ruby, JavaScript
            <br />
            Front-End: React & Redux, Bootstrap, Tailwind, CSS
            <br />
            Back-End: Ruby on Rails, Node.js
            <br />
            Database: PostgreSQL
            <br />
            Testing: Capybara (Integration Testing), Jest (Front-End Testing),
            RSpec (Ruby/Rails Testing)
          </spane>
          <Link to="contact" smooth spy>
            <button type="button" className="button s-button">
              Hire Me
            </button>
          </Link>
          <div className="blur s-blur1" style={{ background: '#ABF1FF94' }} />
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img
              src={Postgres}
              alt=""
              style={{ width: '150px', height: '100px' }}
            />
          </div>
          <div className="w-secCircle">
            <img
              src={Bootstrap}
              alt=""
              style={{ width: '150px', height: '150px' }}
            />
          </div>
          <div className="w-secCircle">
            <img
              src={Node}
              alt=""
              style={{ width: '150px', height: '50px', paddingLeft: '10px' }}
            />
          </div>
          {' '}
          <div className="w-secCircle">
            <img
              src={Rails}
              alt=""
              style={{ width: '150px', height: '150px' }}
            />
          </div>
          <div className="w-secCircle">
            <img
              src={Redux}
              alt=""
              style={{ width: '190px', height: '150px' }}
            />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle" />
        <div className="w-backCircle yellowCircle" />
      </div>
    </div>
  );
};

export default Works;