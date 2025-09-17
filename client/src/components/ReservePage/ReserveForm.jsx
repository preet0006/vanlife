import React from 'react'

const ReserveForm = () => {

  


  return (
    <div className=' relative w-full max-w-xl'>
        <div className='flex  flex-col mt-4 space-y-3'>
        <h4 className='text-xl '>Reserve Noovo Lite</h4>
        <p className='text-[13px]'>Please fill out your contact information to proceed to payment.</p>
        <div className='absolute right-1 top-1'>
            <p>X</p>

        </div>

        <div className='flex gap-3  flex-wrap'>
            <input className='bg-gray-200 p-3 rounded-xl w-[45%]'placeholder='First Name' type="text" name="" id="" />
            <input className='bg-gray-200 p-3  rounded-xl w-[45%]' placeholder='Last Name'type="text" name="" id="" />
            <input className='bg-gray-200 p-3  rounded-xl w-[45%]' placeholder='Email'type="text" name="" id="" />
            <input className='bg-gray-200 p-3 rounded-xl w-[45%]'placeholder='ZipCode' type="text" name="" id="" />
             
            <input className='bg-gray-200 p-3 rounded-xl w-[20%]'placeholder='ZipCode' type="text" name="" id="" />
            <input className='bg-gray-200 p-3 rounded-xl w-[70%]'placeholder='Phone Number' type="text" name="" id="" />
            <input className='bg-gray-200 py-10 text-center rounded-xl w-[92%]'placeholder='Tell About Yourself' type="text" name="" id="" />
        </div>

        <div className='flex gap-2 mt-3'>
                <input type="checkbox" name="" id="" />
                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam ea atque architecto? Eos ullam facere, consequatur enim ipsam commodi. Totam quae ipsam atque ab! Nemo accusantium illum voluptatem ab adipisci quibusdam beatae impedit nisi non quisquam, quam esse illo consequuntur. Quas quasi optio dolores odio. Modi ad accusamus qui.</p>

             </div>

             <div className='flex mt-4 text-xs ml-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at fuga magnam, illo sae
             </div>
             <div className='flex justify-between text-[18px] font-semibold'>
                <h5>Due Today</h5>
                <h5>$100</h5>

             </div>

        </div>
   
    </div>
  )
}

export default ReserveForm