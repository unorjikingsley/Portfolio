import React from 'react';
import PropTypes from 'prop-types';
import './FloatingDiv.css';

const FloatinDiv = ({ img, text1, text2 }) => (
  // darkMode
  <div className="floatingDiv">
    <img src={img} alt="" />
    <span>
      {text1}
      <br />
      {text2}
    </span>
  </div>
);

export default FloatinDiv;

FloatinDiv.propTypes = {
  img: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};
