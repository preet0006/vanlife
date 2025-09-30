import { IoIosPlayCircle } from "react-icons/io";

const PlusVideo = () => {
  return (
    <div className='max-w-screen mt-24 lg:h-screen w-full '>

        <div className=' relative max-w-screen w-[100%]'>
            <img className='w-full max-h-[100vh] object-cover ' src="https://res.cloudinary.com/ht4hxwcbr/image/upload/v1747257711/DSC_3449_dade0d3b20.webp" alt="" />
            
                <div className='absolute top-[30%] flex flex-col max-w-screen w-full  items-center justify-center'>

                <h3 className='text-xl sm:text-4xl lg:text-7xl font-semibold  text-center text-white'>Watch the video walkthrough <br /> of Novoo Plus</h3>

                <button  className='mt-6 text-6xl lg:text-[120px] text-white hover:scale-90'><IoIosPlayCircle /></button>
            </div>
        </div>

    </div>
  )
}

export default PlusVideo