import Employees from './Employees';
import AddEmployee from './AddEmployee';

export default function Page() {
  return (
    <div className='grid grid-cols-4'>
      <div className='lg:col-span-1 col-span-4'>
        <AddEmployee />
      </div>
      <div className='lg:col-span-3 col-span-4'>
        <Employees />
      </div>
    </div>
  );
}
