'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const teamMembers = [
  { name: 'John Carter', role: 'CEO & Founder', image: '/man1.png' },
  { name: 'John Carter', role: 'CEO & Founder', image: '/man2.png' },
  { name: 'John Carter', role: 'CEO & Founder', image: '/man3.png' },
  { name: 'John Carter', role: 'CEO & Founder', image: '/man2.png' },
];

export default function TeamSlider() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='relative w-full max-w-6xl mx-auto'>
      <h2 className='text-center text-2xl font-semibold mb-6 text-black'>
        Meet Our Team
      </h2>
      <Slider ref={sliderRef} {...settings}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`relative flex-shrink-0 rounded-xl shadow-lg text-center  items-center 
              ${index === activeIndex ? 'h-[550px]' : 'h-[480px]'} 
              sm:${index === activeIndex ? 'h-[420px]' : 'h-[320px]'}  
              md:${index === activeIndex ? 'h-[430px]' : 'h-[330px]'}  
              lg:${index === activeIndex ? 'h-[450px]' : 'h-[350px]'}  
              xl:${index === activeIndex ? 'h-[470px]' : 'h-[360px]'}  
              
              w-[90%]  
              sm:w-[290px]  
              md:w-[310px]  
              lg:w-[330px]  
              xl:w-[350px]  
            `}
          >
            <div className='w-full h-full relative'>
              <Image
                src={member.image}
                alt={member.name}
                fill
                className='rounded-xl object-cover'
              />
            </div>
            <div className='absolute bottom-0 left-0 right-0 bg-black text-white p-4 rounded-b-xl flex justify-between items-center'>
              <div>
                <p className='text-green-400 text-sm'>{member.role}</p>
                <p className='text-lg font-semibold'>{member.name}</p>
              </div>
              <button className='bg-white text-black w-8 h-8 flex items-center justify-center rounded-full text-xl font-bold'>
                +
              </button>
            </div>
          </div>
        ))}
      </Slider>

      <div
        className={`flex gap-4 ${
          isMobile
            ? 'justify-center mt-6'
            : 'absolute lg:bottom-[-10px] right-4 sm:bottom-[-30px]'
        }`}
      >
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className='cursor-pointer'
        >
          <Image src='/left.png' alt='Left' width={30} height={30} />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className='cursor-pointer'
        >
          <Image src='/right.png' alt='Right' width={30} height={30} />
        </button>
      </div>
    </div>
  );
}
