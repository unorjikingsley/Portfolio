import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import profilePic1 from '../../img/MacroDiaz.jpeg';
import profilePic2 from '../../img/uche.jpeg';
import profilePic3 from '../../img/salim.jpeg';
import profilePic4 from '../../img/kamana.jpeg';

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      name: (
        <a href="https://www.linkedin.com/in/marco-polo-diaz/">Macro Diaz</a>
      ),
      review:
        "When I reflect on my collaboration with Unorji Kingsley at Microverse, what stands out is his combination of deep technical skill, creative problem-solving, and unwavering commitment to teamwork. Unorji's talent in JavaScript, React, Redux, is clear in the quality of his work. He has a knack for bringing order to the complex, and the web applications we built together were a testament to this skill. They were as robust as they were user-friendly, and always delivered with a keen eye for design that ensures a great user experience.",
    },
    {
      img: profilePic2,
      name: <a href="https://www.linkedin.com/in/uche-ezeani/">Uche Ezeani</a>,
      review:
        'Kingsley is a team player who is not only skilled at his role, but also demonstrates essential skills like emotional intelligence and effective communication. Working with him has been an absolute pleasure.',
    },
    {
      img: profilePic3,
      name: (
        <a href="https://www.linkedin.com/in/sbamahfoodh/">Salim Bamahfoodh</a>
      ),
      review:
        'Kingsley is a fantastic software engineer, and his detail-oriented approach made him a pleasure to work with. We pair-programmed extensively together while enrolled at a software development program, and in that time his work ethic blew me away. Kingsley views writing clean, accessible code as a calling, and he is great at identifying areas where we can improve UI. He is also super friendly; by the time our project was done, I felt like we have known each other for years. I cant recommend him enough!',
    },
    {
      img: profilePic4,
      name: (
        <a href="https://www.linkedin.com/in/kamana-felix/">Kamana Felix</a>
      ),
      review:
        'Kingsley is exactly the sort of software developer any company would love. I met him while struggling with a tough data structures problem, and within a few minutes, he managed to explain a concept I would have been struggling with for days. He has a great way of simplifying complex problems into bite-sized pieces, and as a junior developer, that was really valuable for me. He is also just a fun person to chat with! If you need to get a job done simply and efficiently, Kingsley is definitely the person for you.',
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients and Teams always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: 'var(--purple)' }} />
        <div className="blur t-blur2" style={{ background: 'skyblue' }} />

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt="" />
              <span className="nme">{client.name}</span>
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
