import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Maths from '../../img/MathMagicianCalculator.png';
import todo from '../../img/toDo.png';
import Carhub from '../../img/CarHubs.png';
import rockets from '../../img/reserveRocket.png';
import books from '../../img/bookStore.png';
import { themeContext } from '../../Context';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Carhub} alt="screenshot" />
          <div className="btnn">
            <a href="https://carreservation.netlify.app/">
              <button type="button" className="button linked">
                See Demo
              </button>
            </a>
            <a href="https://github.com/unorjikingsley/Reservation-API">
              <button type="button" className="button linkd">
                Source Code
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Maths} alt="screenshot" />
          <div className="btnn">
            <a href="https://math-react-calculator.onrender.com/">
              <button type="button" className="button linked">
                See Demo
              </button>
            </a>
            <a href="https://github.com/unorjikingsley/react-mathmagician-calculator">
              <button type="button" className="button linkd">
                Source Code
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rockets} alt="screenshot" />
          <div className="btnn">
            <a href="https://try-out--neon-croissant-69c240.netlify.app/">
              <button type="button" className="button linked">
                See Demo
              </button>
            </a>
            <a href="https://github.com/unorjikingsley/Rocket-Launch">
              <button type="button" className="button linkd">
                Source Code
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={todo} alt="screenshot" />
          <div className="btnn">
            <a href="https://reacttodoapp-7xi1.onrender.com/">
              <button type="button" className="button linked">
                See Demo
              </button>
            </a>
            <a href="https://github.com/unorjikingsley/React-ToDo-Website">
              <button type="button" className="button linkd">
                Source Code
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={books} alt="screenshot" />
          <div className="btnn">
            <a href="https://bookstore-l2rl.onrender.com/">
              <button type="button" className="button linked">
                See Demo
              </button>
            </a>
            <a href="https://github.com/unorjikingsley/React-Bookstore">
              <button type="button" className="button linkd">
                Source Code
              </button>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
