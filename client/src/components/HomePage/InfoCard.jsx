import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const InfoCard = ({setActive}) => {
  const [openPopup, setOpenPopup] = useState(null); 
  const popupRef = useRef();

  const navigate = useNavigate()

  useEffect(() => {
    if (openPopup) {
      gsap.fromTo(
        popupRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    } else if (popupRef.current) {
      gsap.to(popupRef.current, { y: -50, opacity: 0, duration: 0.5, ease: "power2.in" });
    }
  }, [openPopup]);

  return (
    <div className="relative">
   
      <div className="flex space-x-5  text-[15px] font-normal cursor-pointer">
        
        <h3 onClick={()=>navigate('/inventory')}
          className="hidden md:block"
         
        >
          Inventory
        </h3>

        <h3
          className="hidden md:block"
          onMouseEnter={() =>{ setOpenPopup("lite"),setActive(true)}}
          // onMouseLeave={() => {setOpenPopup(null),setActive(false)}}
        >
          Lite
        </h3>

        <h3
          className="hidden md:block"
          onMouseEnter={() => {setOpenPopup("plus"),setActive(true)}}
            // onMouseLeave={() => {setOpenPopup(null),setActive(false)}}
        >
          Plus
        </h3>

          <h3
          className="hidden md:block"
          onMouseEnter={() =>{ setOpenPopup("next"),setActive(true)}}
            // onMouseLeave={() => {setOpenPopup(null),setActive(false)}}
        >
          Next
        </h3>
      </div>

     
      {openPopup && (
        <div
          ref={popupRef}
          onMouseEnter={() => setOpenPopup(openPopup)}
           onMouseLeave={() => {setOpenPopup(null),setActive(false)}}
          className="absolute    top-16 max-w-[1400px]  rounded-2xl bg-white"
        >
          {openPopup === "plus" && (
            
         <div className=" max-w-3xl  lg:max-w-screen  h-[70vh] z-50 bg-white  rounded-xl ">
        <div className="flex h-full w-full ">
            <div className="flex mt-14 justify-center text-black items-center p-3 gap-3 flex-col w-xl 
            ">
             <h3 className="text-3xl font-medium">Noovo Plus</h3>
             <p className="  max-w-xs text-xs text-center ">Custom Built in America woth European craftmanship,modern design and the comforts of home</p>
             <div className="flex flex-col mt-2">
                     
                      <button className=" border rounded-full p-3">Get Brochure</button>
           
             </div>
          
            </div>

            <div className="flex bg-gray-300 rounded-r-xl m justify-center items-center  h-full  w-7xl  gap-12">
                <div className="flex hidden lg:block flex-col ">
                  <h6 className="text-3xl">Noovo Pop</h6>
                  Starts at 1345,00
                  <p></p>
                </div>
                <div className="w-[440px]">
                <img src="./bgvp.png" alt="" />

                </div>
               
            

            </div>

        </div>
    </div>





          )}
          {openPopup === "lite" && (
               <div className=" max-w-3xl lg:max-w-screen h-[70vh] bg-white z-10 rounded-xl ">
        <div className="flex h-full w-full ">
            <div className="flex mt-12   text-black items-center p-3 gap-3 flex-col w-xl 
            ">
            <h3 className="text-3xl text-gray-900 font-normal"> Noovo <span className="font-medium text-black">Lite</span></h3>
             <p className="  max-w-xs text-xs font-normal text-center ">Custom Built in America woth European craftmanship,modern design and the comforts of home</p>



             <div className="flex  justify-center mt-8 h-36 max-w-96 items-center w-full flex-col ">
                   <img className="  w-xs " src="/lite.png" alt="" />  
                     
             </div>
             <div className="mt-12">
                <button className=" mt-4 border rounded-full p-3">Get Brochure</button>

             </div>
          
            </div>

            <div className="flex bg-gray-300 rounded-r-xl  justify-center items-center  h-full w-7xl  gap-12">
                <div className="flex text-gray-700 flex-col ">
                   <h3 className="text-3xl text-gray-900 font-normal"> Noovo <span className="font-medium text-black">Lite</span></h3>
                
                  <p className="max-w-xs text-gray-700 font-normal">  Starts at 162.700 ot from <span>$1087/month</span></p>
                </div>
                <div className=" w-full max-w-96">
                <img className="h-72" src="./litemm.webp" alt="" />

                </div>
               
            

            </div>

        </div>
    </div>
          )}
          {openPopup === "next" && (


           
         <div className=" lg:w-[1400px] max-w-3xl  lg:max-w-[1600px]  h-[70vh] bg-white z-10 rounded-xl ">
        <div className="flex flex-col h-full  items-center  mt-12 text-black ">
          <hr className="text-gray-300 w-full" />
          <h3 className="text-4xl p-2 mt-3 font-normal">Noovo <span className="font-medium">Next</span></h3>
         <p className=" font-normal text-gray-600 max-w-xl text-center mt-1">
         Custom-built in America with European craftsmanship, modern design and the comforts of home.
         <div className="max-w-xl items-center justify-center flex flex-col mt-3">
          <img className="w-80" src="/ivw.webp" alt="" />

          <div className="flex space-x-2.5 mt-3  text-black ">
            <button className=" cursor-pointer border px-4 py-3 rounded-4xl" >Discover More</button>
            <button className=" cursor-pointer bg-amber-300 px-5 py-3 rounded-4xl">Reserve Now</button>

          </div>

          

         </div>
         </p>
         <div>

         </div>

    

        </div>
    </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InfoCard;


 