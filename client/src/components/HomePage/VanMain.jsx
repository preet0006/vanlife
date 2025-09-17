import { useSelector } from "react-redux"


const VanMain = () => {
  
  const {hero2} = useSelector((state)=>state.home)
 


  return (
    <div className='mt-12   flex'>
 
   

  <div className=" relative w-full h-full   ">
   <img className=' max-w-screen h-[60vh] sm:h-full  z-40 object-cover  translate-y-4  w-full' src={hero2[0]} alt="" />
   <div className="absolute  max-w-screen flex flex-col w-full justify-center items-center mt-2 top-4">
    <p className="text-[7px] sm:text-xs bg-black text-white rounded-4xl px-2 py-1">Made by you for you</p>
     <h3 className=" text-[15px] mt-3 max-w-96 lg:text-5xl text-white lg:max-w-5xl  text-center">Custom-built vans made in the US with
       European craftsmanship, innovative design,& all the comforts of home. Build your Noovo Van Contact us</h3>

       <div className="max-w-screen w-full flex font-medium  mt-48  gap-2 sm:mt-3  justify-center items-center ">

       <button className="bg-white opacity-85 sm:opacity-100 max-w-36 text-[10px] sm:text-xs lg:max-w-60 w-full py-5 rounded-4xl lg:text-[17px]">Build your Novoo Van</button>
        <button className="bg-white opacity-85 sm:opacity-100 max-w-36 text-[10px] sm:text-xs lg:max-w-60 w-full py-5 rounded-4xl lg:text-[17px] ">ContactUs</button>
       

       </div>
   </div>

    
 
   
    </div>

    </div>
  )
}

export default VanMain





// <div className='bg-[url(./vangif.gif)] bg-contain h-[1600px] bg-center bg-no-repeat'>


// </div>