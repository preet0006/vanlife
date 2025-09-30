

const PlusSection = () => {
  return (
    <div className="w-full  p-3">
    
    <div className="w-full flex h-16 items-center px-8 justify-between    border border-gray-300 rounded-2xl max-w-[98vw]">

       <div className="flex gap-5  items-center">
       <h6  className="text-xl hidden sm:block">Noovo Plus</h6>
       <p className="text-xs hidden sm:block text-gray-400 ">Starting at $186,700 or $1248 per month</p>
        </div> 

        <div className="space-x-6 flex  w-full max-w-96">
           <button className=" py-1 px-1 text-xs  rounded-4xl border sm:text-[14px] w-full max-w-36 ">Schedule a call</button> 
           
           <button className="w-full text-xs max-w-36 rounded-4xl sm:text-[14px]   border ">Get brochure</button> 

           <button className= " w-full text-xs max-w-36 py-2 bg-orange-400 sm:text-[14px]  border rounded-4xl ">Reserve Yours</button> 


        </div>
     

    </div>

   <div className="max-w-screen px-5 bg-[#F9F7F4] mt-4 sm:min-h-screen">
    <div className="flex pt-20 flex-col  space-y-4 items-center">
    <h1 className="text-xl  sm:text-5xl">Van Life Just Got Roomier.</h1>
    <p className="w-full text-xs sm:text-[18px] max-w-96 text-center text-gray-400">Say goodbye to crouching. With an interior height of 7ft and a stowable bed, step into the world’s most comfortable van.</p>
    <p className=" text-xs sm:text-[16px]">Starting at <span className="font-semibold"> $186,700 or $1,248 per month.</span></p>
    <img className=" mt-12 max-w-56 w-full sm:max-w-80" src="/plusjeep.webp" alt="" />

    <div className="flex justify-between  mt-10 w-full b max-w-2xl text-xs sm:text-[20px] ">
       <div className="flex flex-col">
        {/* <img src="" alt="" /> */}
        <p className="text-center">Live off-grid <br />
        for 7 days</p>
       </div>
       <div className="flex flex-col">
        {/* <img src="" alt="" /> */}
        <p className="text-center">Bedroom to lounge <br /> in seconds</p>
       </div>
       <div className="flex flex-col ">
        {/* <img src="" alt="" /> */}
        <p className="text-center">Sleeps
            up to <br /> 4 people </p>
       </div>

    </div>

    <button className="mt-6 mb-10 w-full text-xs sm:text-base max-w-40 sm:max-w-60 py-2 border rounded-3xl">Downlod brochure</button>

    </div>
   


   </div>


    
    </div>

    
  )
}

export default PlusSection