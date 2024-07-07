'use client';
import { useState, useEffect } from 'react';

export default function AddPosition() {
  const [parent, setParent] = useState([]);
  const [position, setPosition] = useState({
    name: '',
    parent: null,
    children: [],
  });

  async function fetchParent() {
    const response = await fetch('http://127.0.0.1:8000/api/positions');
    if (!response.ok) console.log('error');
    const data = await response.json();
    setParent(data.results);
  }

  useEffect(() => {
    fetchParent();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/positions/', {
      // Add a trailing slash here
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(position),
    });
    if (response.ok) {
      alert('Position added successfully');
    } else {
      alert('Error adding position');
    }
  };

  return (
    <form
      className='max-w-xl mx-auto my-10 p-5 bg-white border rounded-lg shadow-lg'
      onSubmit={handleSubmit}
    >
      <h2 className='text-2xl font-bold mb-6'>Position Registration Form</h2>
      <div className='mb-4'>
        <label className='block text-gray-700 font-bold mb-2' for='name'>
          Name:
        </label>
        <div className='relative mb-3' data-twe-input-wrapper-init>
          <input
            type='text'
            className='peer block min-h-[auto] w-full rounded-lg border-1 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none'
            id='exampleFormControlInput1'
            value={position.name}
            onChange={(e) => setPosition({ ...position, name: e.target.value })}
          />
          <label
            for='exampleFormControlInput1'
            className={`${
              position.name ? '-translate-y-[0.9rem] scale-[0.8]' : ''
            } absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none`}
          >
            Position Name
          </label>
        </div>
        <div className='my-3'>
          <label className='block text-gray-700 font-bold mb-2' for='name'>
            Parent:
          </label>
          <select
            id='countries'
            className='bg-gray-100 border border-1 border-gray-300 text-gray-700 text-md rounded-lg block w-full p-2.5'
            value={position.parent}
            onChange={(e) =>
              setPosition({ ...position, parent: parseInt(e.target.value) })
            }
          >
            <option value={0}>Choose a Position</option>
            {parent &&
              parent.map((pos) => (
                <option key={pos.id} value={pos.id}>
                  {' '}
                  {pos.name}
                </option>
              ))}
          </select>
        </div>
        <button
          type='submit'
          class='text-white bg-gray-700 hover:scale-105  font-medium rounded-lg text-md px-3 py-2.5 mt-2 text-center active:bg-gray-800'
        >
          submit
        </button>
      </div>
    </form>
  );
}
