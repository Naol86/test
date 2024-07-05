import Employees from './Employees';
import AddEmployee from './AddEmployee';

export default function Page() {
  return (
    <div className='grid grid-cols-4'>
      <div className='col-span-1'>
        <AddEmployee />
      </div>
      <div className='col-span-3'>
        <Employees />
      </div>
    </div>
  );
}
