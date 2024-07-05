import Link from 'next/link';

export default function Hero() {
  return (
    <div className='relative bg-gray-50'>
      
      {/* <div className='absolute bottom-0 right-0 overflow-hidden lg:inset-y-0'>
        <img
          className='w-auto h-full'
          src='https://favicon.ico.clhttps://favicon.icowww.peragosystems.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperago-white.3170b248.png&w=3840&q=75oudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png'
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
                className='text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
              >
                {' '}
                Positions{' '}
              </Link>

              <Link
                href='/employees'
                title=''
                className='text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
              >
                {' '}
                Employees{' '}
              </Link>

              <Link
                href='/about'
                title=''
                className='text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
              >
                {' '}
                About Perago{' '}
              </Link>

              <Link
                href='/contact'
                title=''
                className='text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
              >
                {' '}
                Contact{' '}
              </Link>
            </div>
          </div>
        </div>
      </header> */}

      <section className='relative py-8 sm:py-12 lg:py-16 lg:pb-36'>
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8'>
            <div>
              <div className='text-center lg:text-left'>
                <h1 className='text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj'>
                  Perago Information System.
                </h1>
                <p className='mt-2 text-lg text-gray-600 sm:mt-8 font-inter'>
                Perago Systems is a technology company that focuses on developing and implementing electronic government and 
                B2B commerce solutions towards the provision of various online transactional services. Perago provides strong 
                technical support and knowledge transfer to sustain the competitive advantages gained by customers from their ICT investments.
                </p>
              </div>
              <div className='mt-8 sm:flex sm:justify-center lg:justify-start'>
                {/* <form action='#' method='POST' className='mt-8 sm:mt-10'>
                  <div className='relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900'>
                    <input
                      type='email'
                      name=''
                      id=''
                      placeholder='Enter email address'
                      className='block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent'
                      required=''
                    />
                    <div className='mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2'>
                      <button
                        type='submit'
                        className='inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600'
                      >
                        Get Free Card
                      </button>
                    </div>
                  </div>
                </form> */}
              </div>

              <div className='flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8'>
                <div className='flex items-center'>
                  <p className='text-3xl font-medium text-gray-900 sm:text-4xl font-pj'>
                    23+
                  </p>
                  <p className='ml-3 text-sm text-gray-900 font-pj'>
                    Total
                    <br />
                    Positions
                  </p>
                </div>

                <div className='hidden sm:block'>
                  <svg
                    className='text-gray-400'
                    width='16'
                    height='39'
                    viewBox='0 0 16 39'
                    fill='none'
                    stroke='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <line
                      x1='0.72265'
                      y1='10.584'
                      x2='15.7226'
                      y2='0.583975'
                    ></line>
                    <line
                      x1='0.72265'
                      y1='17.584'
                      x2='15.7226'
                      y2='7.58398'
                    ></line>
                    <line
                      x1='0.72265'
                      y1='24.584'
                      x2='15.7226'
                      y2='14.584'
                    ></line>
                    <line
                      x1='0.72265'
                      y1='31.584'
                      x2='15.7226'
                      y2='21.584'
                    ></line>
                    <line
                      x1='0.72265'
                      y1='38.584'
                      x2='15.7226'
                      y2='28.584'
                    ></line>
                  </svg>
                </div>

                <div className='flex items-center'>
                  <p className='text-3xl font-medium text-gray-900 sm:text-4xl font-pj'>
                    100+
                  </p>
                  <p className='ml-3 text-sm text-gray-900 font-pj'>
                    Total
                    <br />
                    Employees
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                className='w-full'
                src='https://cdn.create.vista.com/api/media/small/2769310/stock-photo-digital-program-code-and-american-map'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
