'use client';
import getEmployees from '@/api/getEmployees';
import Employee from './Employee';
import { useEffect, useState } from 'react';

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  async function fetchEmployees() {
    const response = await fetch('http://127.0.0.1:8000/api/employees');
    if (!response.ok) console.log('error');
    else {
      const data = await response.json();
      setEmployees(data.results);
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <ul
      role='list'
      className='shadow-lg py-5 rounded-md bg-gray-100 space-y-2 flex flex-wrap space-x-3 items-center justify-center'
    >
      {employees &&
        employees.map((employee) => (
          <Employee key={employee.id} value={employee.id} data={employee} />
        ))}
    </ul>
  );
}
