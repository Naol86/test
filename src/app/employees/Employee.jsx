import Link from 'next/link';
export default function Employee({ data }) {
  return (
    <li className='max-w-md flex justify-between gap-x-6 py-5 px-2 bg-gray-50 rounded-lg'>
      <Link href={`/employees/${data.id}`}>
        <div className='flex gap-x-4'>
          <img
            className='h-12 w-12 flex-none rounded-full bg-gray-50'
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
          />
          <div className='min-w-0 flex-auto'>
            <p className='text-sm font-semibold leading-6 text-gray-900'>
              {data.name}
            </p>
            <p className='mt-1 truncate text-xs leading-5 text-gray-500'>
              employee Email
            </p>
          </div>
        </div>
      </Link>
      <div className='lg grid-flow-col flex'>
        <div className='shrink-0 sm:flex sm:flex-col sm:items-end grid-cols-2 mx-1'>
          <p className='text-sm leading-6 text-gray-900'>
            {data.position_name}
          </p>
          <p className='mt-1 text-xs leading-5 text-gray-500'>experience</p>
        </div>
        <div className='grid space-y-1 mt-0'>
          <button className='font-medium text-indigo-600 hover:scale-105 border bg-gray-200 border-gray-200 rounded-xl px-3 py-1'>
            <Link href={`/employees/add/${data.id}`}>edit</Link>
          </button>
          <button className='font-semibold text-gray-100 border-red-600 rounded-xl px-3 py-1 bg-red-600 border'>
            delete
          </button>
        </div>
      </div>
    </li>
  );
}
