import Link from 'next/link';
export default function Navbar() {
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

            <div className='flex lg:hidden'>
              <button type='button' className='text-gray-900'>
                <svg
                  className='w-7 h-7'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </button>
            </div>

            <div className='hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16'>
              <Link
                href='/positions'
                title=''
                className='font-semibold text-lg text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
              >
                {' '}
                Positions{' '}
              </Link>

              <Link
                href='/employees'
                title=''
                className='font-semibold text-lg text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
              >
                {' '}
                Employees{' '}
              </Link>

              <Link
                href='/about'
                title=''
                className='font-semibold text-lg text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
              >
                {' '}
                About Perago{' '}
              </Link>

              <Link
                href='/contact'
                title=''
                className='font-semibold text-lg text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
              >
                {' '}
                Contact{' '}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
}
