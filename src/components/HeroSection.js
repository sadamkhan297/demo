'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative h-screen w-full'>
      <div className='absolute inset-0'>
        <Image
          src='/herobg.png'
          alt='Background'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>

      <nav className='absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-8 md:px-10 lg:px-20 py-3 sm:py-4 md:py-5 text-white'>
        <div className='flex items-center space-x-3'>
          <Image
            src='/logo.png'
            alt='Logo'
            width={80}
            height={80}
            className='w-[20vw] max-w-[80px] h-auto'
          />
        </div>

        <div className='hidden md:flex items-center space-x-8 text-lg'>
          <ul className='flex space-x-8'>
            <li className='hover:text-gray-300 cursor-pointer'>
              <Link href='/'>Home</Link>
            </li>
            <li className='hover:text-gray-300 cursor-pointer'>
              <Link href='/about'>About Us</Link>
            </li>
            <li className='hover:text-gray-300 cursor-pointer'>
              <Link href='/projects'>Projects</Link>
            </li>
          </ul>
          <Link href='/contact'>
            <button className='border border-white px-5 py-2 rounded-sm hover:bg-white hover:text-black'>
              Contact Us
            </button>
          </Link>
        </div>

        <div className='md:hidden z-20'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='focus:outline-none'
          >
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className='fixed top-0 right-0 h-screen w-2/3 bg-white text-black p-6 space-y-6 md:hidden z-50 shadow-lg'>
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className='absolute top-4 right-4 text-2xl font-bold text-black hover:text-gray-600'
          >
            &times;
          </button>

          <ul className='flex flex-col space-y-6 mt-8'>
            <li className='hover:text-gray-600 cursor-pointer text-sm'>
              <Link href='/'>Home</Link>
            </li>
            <li className='hover:text-gray-600 cursor-pointer text-sm'>
              <Link href='/about'>About Us</Link>
            </li>
            <li className='hover:text-gray-600 cursor-pointer text-sm'>
              <Link href='/projects'>Projects</Link>
            </li>
            <li>
              <Link href='/contact'>
                <button className='border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white w-full text-sm'>
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4'>
        <h1 className='text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw] font-bold'>
          About Us
        </h1>
        <p className='mt-4 text-[5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw]'>
          Building The Future, One Structure At A Time
        </p>
      </div>
    </div>
  );
}
