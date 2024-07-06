'use client';
import Link from 'next/link';
import { useState } from 'react';
export default function Links() {
  const [dropCategory, setDropCategory] = useState(false);
  return (
    <ul className='flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700'>
      <li>
        <Link
          href='/'
          className='block py-2 px-3 text-gray-800 hover:scale-105 rounded md:bg-transparent md:p-0 font-semibold text-lg transition-all duration-e00'
          aria-current='page'
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href='/'
          className='block py-2 px-3 text-gray-800  hover:scale-105 rounded md:bg-transparent md:p-0 font-semibold text-lg transition-all duration-300'
          aria-current='page'
        >
          Home
        </Link>
      </li>
      <li onMouseLeave={() => setDropCategory(false)}>
        <button
          id='dropdownNavbarLink'
          data-dropdown-toggle='dropdownNavbar'
          className='flex font-semibold items-center justify-between w-full py-2 px-3 text-gray-800 rounded  md:p-0 md:w-auto text-lg hover:scale-105  transition-all duration-300'
          onClick={() => setDropCategory((pre) => !pre)}
        >
          Category{' '}
          <svg
            className='w-2.5 h-2.5 ms-2.5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 4 4 4-4'
            />
          </svg>
        </button>
        <div
          id='dropdownNavbar'
          className={`z-20 ${
            dropCategory ? '' : 'hidden'
          } absolute  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
        >
          <ul className='py-2 px-2 text-lg font-medium min-w-52 text-gray-700 z-50 rounded-md bg-gray-100 shadow-lg'>
            <li>something</li>
            <li>something</li>
            <li>something</li>
          </ul>
        </div>
      </li>

      <li>
        <Link
          href='/'
          className='block py-2 px-3 text-gray-800  hover:scale-105 rounded md:bg-transparent md:p-0 font-semibold text-lg transition-all duration-300'
          aria-current='page'
        >
          Home
        </Link>
      </li>
    </ul>
  );
}
