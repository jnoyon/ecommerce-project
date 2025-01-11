import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

// Import image assets
import slider1 from '../assets/home/slide1.jpg';
import slider2 from '../assets/home/slide2.jpg';
import slider3 from '../assets/home/slide3.jpg';
import slider4 from '../assets/home/slide4.jpg';
import slider5 from '../assets/home/slide5.jpg';
import SectionTitle from '../shared/SectionTitle';

export default function Category() {
  return (
    <div className='container mx-auto'>
        <SectionTitle heading={'Oder Online'} subHeading={'From 11 am to 10PM'} ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slider1} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src={slider3} alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src={slider4} alt="Slide 4" /></SwiperSlide>
        <SwiperSlide><img src={slider5} alt="Slide 5" /></SwiperSlide>
        <SwiperSlide><img src={slider3} alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src={slider4} alt="Slide 4" /></SwiperSlide>
        <SwiperSlide><img src={slider5} alt="Slide 5" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
