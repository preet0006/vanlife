import VanCard from "./VanCard"


const MidSection = () => {
  return (

    <>
    <div className="flex   flex-col justify-center items-center">


       <div className="bg-orange-400  max-w-screen w-full h-[320px] sm:h-full ">

        <img className='object-cover w-full h-full' src="./midimg.webp" alt="" />

        </div>
    

     <div className=" flex mt-4 rounded-4xl flex-col justify-center 
     items-center w-full overflow-x-auto max-w-screen h-auto bg-orange-100">

     <h3 className=" p-12 text-xl sm:text-5xl font-semibold text-center max-w-3xl">Loved by those who believe 
     adventure is mandatory.</h3>

       <VanCard  type="reviews"/>
    </div>
    </div>
    </>
  )
}

export default MidSection