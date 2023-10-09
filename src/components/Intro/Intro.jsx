import React, { useContext } from 'react';
import './Intro.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngellist, faMedium } from '@fortawesome/free-brands-svg-icons';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/king.jpg';
// import boy from '../../img/boy.png'
import glassesimoji from '../../img/glassesimoji.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import FloatinDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import { themeContext } from '../../Context';

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: 'spring' };

  // context
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* to change to darkmode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Hy! I Am</span>
          <span>Unorji Kingsley</span>
          <span>
            Full-Stack Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth spy>
          <button type="button" className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/unorjikingsley">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/unorjikingsley/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://wellfound.com/u/unorji-kingsley-chijioke">
            <FontAwesomeIcon icon={faAngellist} color="orange" size="4x" />
          </a>
          <a href="https://medium.com/@unorjikingsley">
            <FontAwesomeIcon icon={faMedium} color="orange" size="5x" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img
          src={boy}
          alt=""
          width="400"
          height="390"
          style={{ borderRadius: '15px' }}
        />
        {/* animation */}
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: 'rgb(238 210 255)' }} />
        <div
          className="blur"
          style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        />
      </div>
    </div>
  );
};

export default Intro;
