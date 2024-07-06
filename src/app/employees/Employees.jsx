import Employee from './Employee';
export default function Employees() {
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
    },
    {
      id: 2,
      name: 'Jane Doe',
      position: 'Test Engineer',
    },
    {
      id: 3,
      name: 'John Smith',
      position: 'DevOps Engineer',
    },
    {
      id: 4,
      name: 'Jane Smith',
      position: 'Product Manager',
    },
    {
      id: 5,
      name: 'John Doe',
      position: 'Software Engineer',
    },
    {
      id: 6,
      name: 'Jane Doe',
      position: 'Test Engineer',
    },
    {
      id: 7,
      name: 'John Smith',
      position: 'DevOps Engineer',
    },
    {
      id: 8,
      name: 'Jane Smith',
      position: 'Product Manager',
    },
  ];

  return (
    <ul
      role='list'
      className='shadow-lg py-5 rounded-md bg-gray-100 space-y-2 flex flex-wrap space-x-3 items-center justify-center'
    >
      {employees.map((employee) => (
        <Employee key={employee.id} value={employee.id} data={employee} />
      ))}
    </ul>
  );
}
