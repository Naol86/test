export default function AddPosition() {
  return (
    <div>
      <form class='lg:w-[23rem] md:w-[20rem] sm:w-[26rem] mt-5 mx-auto p-4 border rounded-lg shadow-lg'>
        <h2 class='text-2xl font-bold mb-6'>Position Form</h2>
        <div class='mb-4'>
          <label class='block text-gray-700 font-bold mb-2' for='email'>
            Parent:
          </label>

          <select
            name='parent'
            id='parent'
            className='w-full font-semibold text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent'
          >
            <option value='ceo'>ceo</option>
            <option value='ceo'>ceo</option>
            <option value='ceo'>ceo</option>
            <option value='ceo'>ceo</option>
          </select>
        </div>
        <div class='mb-4'>
          <label class='block text-gray-700 font-bold mb-2' for='name'>
            Name:
          </label>
          <input
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='name'
            type='text'
            placeholder='Enter your name'
          />
        </div>

        <div class='mb-4'>
          <label class='block text-gray-700 font-bold mb-2' for='feedback'>
            Description:
          </label>
          <textarea
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='feedback'
            rows='5'
            placeholder='Enter description'
          ></textarea>
        </div>
        <button
          class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
