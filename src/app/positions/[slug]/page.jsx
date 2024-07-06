'use client';
import getPositionById from '@/api/getPositionById';
import { useEffect, useState } from 'react';

export default function Page(props) {
  console.log(props, 'slug');
  const [position, setPosition] = useState({});
  const getPosition = async () => {
    const response = await getPositionById(props.params.slug);
    console.log(response, 'response');
    setPosition(response);
  };

  useEffect(() => {
    getPosition();
  }, []);

  return (
    <div>
      <h1>{position.name}</h1>
      <h3>{position.parent_name}</h3>
    </div>
  );
}
