import React from 'react';
import './Footer.css';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngellist, faMedium } from '@fortawesome/free-brands-svg-icons';
import Wave from '../../img/wave.png';

const Footer = () => (
  <div className="footer">
    <img src={Wave} alt="" style={{ width: '100%' }} />
    <div className="f-content">
      <a
        href="mailto:unorjikingsley@gmail.com"
        style={{ textDecoration: 'none', color: 'white' }}
      >
        <span>unorjikingsley@gmail.com</span>
      </a>
      <div className="f-icons">
        <a href="https://www.linkedin.com/in/unorjikingsley/">
          <LinkedIn color="white" size="3rem" />
        </a>
        <a href="https://github.com/unorjikingsley">
          <Github color="white" size="3rem" />
        </a>
        <a href="https://wellfound.com/u/unorji-kingsley-chijioke">
          <FontAwesomeIcon icon={faAngellist} color="white" size="3x" />
        </a>
        <a href="https://medium.com/@unorjikingsley">
          <FontAwesomeIcon icon={faMedium} color="white" size="3x" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
