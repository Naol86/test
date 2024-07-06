export default function Positions() {
  return (
    <div>
      <ul className=' shadow-xl overflow-hidden sm:rounded-md max-w-xl mx-auto mt-16 divide-y-2 '>
        <li>
          <div className='px-4 py-5 sm:px-6'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Position name
              </h3>
              <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                Description for Position
              </p>
            </div>
            <div className='mt-4 flex items-center justify-end space-x-4'>
              <a
                href='#'
                className='font-medium text-indigo-600 hover:scale-105 border bg-gray-200 border-gray-200 rounded-xl px-3 py-1'
              >
                Edit
              </a>
              <a
                href='#'
                className='font-semibold text-gray-100 border-red-600 rounded-xl px-3 py-1 bg-red-600 border'
              >
                Delete
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className='px-4 py-5 sm:px-6'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Position name
              </h3>
              <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                Description for Position
              </p>
            </div>
            <div className='mt-4 flex items-center justify-end space-x-4'>
              <a
                href='#'
                className='font-medium text-indigo-600 hover:scale-105 border bg-gray-200 border-gray-200 rounded-xl px-3 py-1'
              >
                Edit
              </a>
              <a
                href='#'
                className='font-semibold text-gray-100 border-red-600 rounded-xl px-3 py-1 bg-red-600 border'
              >
                Delete
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className='px-4 py-5 sm:px-6'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Position name
              </h3>
              <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                Description for Position
              </p>
            </div>
            <div className='mt-4 flex items-center justify-end space-x-4'>
              <a
                href='#'
                className='font-medium text-indigo-600 hover:scale-105 border bg-gray-200 border-gray-200 rounded-xl px-3 py-1'
              >
                Edit
              </a>
              <a
                href='#'
                className='font-semibold text-gray-100 border-red-600 rounded-xl px-3 py-1 bg-red-600 border'
              >
                Delete
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
