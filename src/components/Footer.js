'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-[#161616] text-white py-12 mt-10 px-6 text-center'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-2xl font-bold'>Let’s Build Together!</h2>
        <p className='text-sm text-gray-400 mt-3'>
          From concept to completion, Our Company is your trusted partner in
          construction. Whether it’s a new build, renovation, or large-scale
          development, we bring expertise, precision, and passion to every
          project.
        </p>
        <button className='mt-5 bg-[#02937A] text-white px-6 py-2 rounded-md font-semibold hover:bg-green-600 transition'>
          Contact Us Today
        </button>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center px-6 py-4 text-gray-300'>
        {/* Logo */}
        <Image
          src='/ff.png'
          alt='Lavish Construction Logo'
          width={150}
          height={80}
        />

        {/* Navigation Links */}
        <div className='flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0 text-sm'>
          <a href='#' className='hover:text-white'>
            About us
          </a>
          <a href='#' className='hover:text-white'>
            Services
          </a>
          <a href='#' className='hover:text-white'>
            Projects
          </a>
        </div>

        {/* Social Icons */}
        <div className='flex gap-5 mt-4 md:mr-10'>
          <a href='#' className='hover:text-white'>
            <Image src='/f1.png' alt='Facebook' width={20} height={20} />
          </a>
          <a href='#' className='hover:text-white'>
            <Image src='/f2.png' alt='Instagram' width={20} height={20} />
          </a>
          <a href='#' className='hover:text-white'>
            <Image src='/f3.png' alt='Close' width={20} height={20} />
          </a>
        </div>
      </div>

      <div className='border-t border-gray-700 mt-8 pt-4 text-gray-500 text-sm'>
        &copy; 2023. All rights reserved
      </div>
    </footer>
  );
}
