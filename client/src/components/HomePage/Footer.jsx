

const Footer = () => {
  return (
    <div className='min-h-screen flex flex-col mt-3  '>
     
        
         <div className='flex p-8 lg:pl-20  w-full lg:max-w-7xl   justify-between items-center'>

         <form className=' gap-3 flex  items-center flex-col justify-center  w-full max-w-5xl lg:max-w-xs p-12  ' action="">

       <div className='flex justify-center font-semibold items-center mt-12'>
          <h3 className="text-xs text-center sm:text-[15px]">Subscribe to learn about our latest news, updates, and adventures.</h3>
         </div>

         <input  className='bg-[#F9F7F4] rounded-2xl p-3 w-full ' placeholder='Your First Name' type="text" name="" id="" />

         <input  className='bg-[#F9F7F4]  rounded-2xl w-full p-3' placeholder='Your Email' type="text" name="" id="" />
         <input  className='bg-[#F9F7F4] rounded-2xl p-3 w-full ' placeholder='Zip Code' type="text" name="" id="" />
        
        <button className='bg-black text-xs sm:text-[15px] p-3 text-white w-full'>Submit</button>

         </form>

         <div className="  hidden mt-2 lg:block flex flex-col ">
        <h3 className="max-w-xl text-4xl w-full">“I love your build because you made it for people like us who don't know what we're doing. It just works.”</h3>

        <div className="flex ">
        <img  className="w-16 h-12 mt-12 rounded-3xl"src="https://tse3.mm.bing.net/th?id=OIP.b8FFDSj_yvw6-SZHq7E8gQHaE7&pid=Api&P=0&h=180" alt="" />

         <h5 className="flex  flex-col mt-12  p-2">
          Jane Traveling nurse
          <p className="text-xs">Over 2700 miles traveled From Las Vegas</p>

         </h5>

        </div>
    
        </div>


       </div>
       
       <div className="  flex flex-col px-2  lg:flex-row gap-3  justify-between - lg:justify-evenly lg:ml-96 flex-wrap  items-center max-w-screen  ">

       <div className="flex   w-full max-w-xl justify-between">

       <div className="flex font-semibold text-xs sm:text-[14px] flex-col">
        <span className="text-gray-400">Buy</span>
          <p >Inventory</p>
          <p>Rentals</p>
          <p>Find a Dealer</p>
        </div>

        <div className="flex font-semibold text-xs sm:text-[14px] flex-col">
        <span className="text-gray-400">Models</span>
          <p >The Lite</p>
          <p>The Pop</p>
          <p>The Plus</p>
        </div>

        <div className="flex flex-col">
        <div className="flex font-semibold text-xs sm:text-[14px] flex-col">
        <span className="text-gray-400">Models</span>
          <p >The Lite</p>
          <p>The Pop</p>
          <p>The Plus</p>
        </div>
        </div>

        <div className="flex font-semibold text-xs  sm:text-[14px] flex-col">
        <span className="text-gray-400">Models</span>
          <p >The Lite</p>
          <p>The Pop</p>
          <p>The Plus</p>
        </div>



       </div>
      
        
       </div>





       </div>
     

  )
}

export default Footer