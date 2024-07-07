'use client';
import { useState, useEffect } from 'react';
import Position from './Position';

export default function Positions() {
  const [positions, setPositions] = useState([]);

  async function fetchPositions() {
    const response = await fetch('http://127.0.0.1:8000/api/positions');
    if (!response.ok) {
      console.log('Network response was not ok');
      return;
    }
    const data = await response.json();
    setPositions(data.results);
  }

  useEffect(() => {
    fetchPositions();
  }, []);

  return (
    <div className='my-3 mx-3 flex flex-wrap justify-center space-x-4'>
      {positions.map((position) => (
        <Position key={position.id} data={position} />
      ))}
    </div>
  );
}
