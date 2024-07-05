'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='relative bg-gray-50'>
      <div className='absolute bottom-0 right-0 overflow-hidden lg:inset-y-0'>
        <img
          className='w-auto h-full'
          src='https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png'
          alt=''
        />
      </div>

      <header className='relative py-4 md:py-4'>
        <div className='container px-4 mx-auto sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between'>
            <div className='flex-shrink-0'>
              <Link
                href='/'
                title=''
                className='flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
              >
                <img className='w-auto h-8' src='' alt='logo' />
              </Link>
            </div>

            <div
              className='flex lg:hidden'
              onClick={() => setIsOpen((pre) => !pre)}
            >
              <button type='button' className='text-gray-900'>
                <svg
                  className='w-7 h-7'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </button>
            </div>

            <div
              className={`${
                isOpen
                  ? 'block fixed bg-gray-200 right-14 top-10 w-35 p-2 '
                  : 'hidden'
              } lg:flex lg:items-center lg:space-x-8`}
            >
              <Link
                href='/positions'
                title='Positions'
                className='block mt-4 lg:mt-0 lg:inline-block font-semibold text-lg text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
              >
                Positions
              </Link>

              <Link
                href='/employees'
                title='Employees'
                className='block mt-4 lg:mt-0 lg:inline-block font-semibold text-lg text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
              >
                Employees
              </Link>

              <Link
                href='/about'
                title='About Perago'
                className='block mt-4 lg:mt-0 lg:inline-block font-semibold text-lg text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
              >
                About Perago
              </Link>

              <Link
                href='/contact'
                title='Contact'
                className='block mt-4 lg:mt-0 lg:inline-block font-semibold text-lg text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
}
