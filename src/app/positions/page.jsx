import Positions from './Positions';
import AddPosition from '@/components/Positions/AddPosition';

export default function PositionsPage() {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <div className='mx-auto col-span-4 lg:col-span-1'>
        <AddPosition />
      </div>
      <div className='col-span-4 lg:col-span-3'>
        <Positions />
      </div>
    </div>
  );
}
