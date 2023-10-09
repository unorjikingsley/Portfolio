import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
  emoji, heading, detail, color, link,
}) => (
  <div className="card" style={{ borderColor: { color } }}>
    <img src={emoji} alt="" />
    <span>{heading}</span>
    <span>{detail}</span>
    <a href={link}>
      <button type="button" className="c-button">LEARN MORE</button>
    </a>
  </div>
);

export default Card;

Card.propTypes = {
  emoji: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
