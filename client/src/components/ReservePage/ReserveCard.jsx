import { useState } from "react"
import ReserveForm from "./ReserveForm"

const ReserveCard = () => {
  
  const [show,setShow] = useState(true)


  return (
    <div className="bg-white rounded-xl flex flex-col relative w-full text-black  max-w-xl p-6   ">
      
      { show ?( 
        <>
         <h4 className="mt-4 text-3xl font-serif">Reserve 
         <span className="font-semibold"> Noovo Lite 
            </span></h4>
            <hr  className="mt-12 text-gray-300"/>
          <div className="absolute right-4 top-4 ">
            <p className="bg-gray-200 font-semibold rounded-3xl px-3 py-1">X</p>
          </div>
          <div className="pt-8 space-y-6 w-full">
            <p className="text-gray-500 text-[14px]">Pre-orders currently available in U.S. only.</p>
            <span className="text-xl ">Place a fully-refundable deposit to reserve a <br /> Noovo Lite.
          </span>
            <hr  className="mt-12 text-gray-300"/>
          </div>
      
          <div className="pt-8">
            <p className="text-[14px]">Transparent Pricing</p>
            <h4 className="text-2xl font-semibold">Starting at: $162,700.</h4>
          </div>
      
          <div className="flex flex-col mt-20 ">
             <p className="text-gray-500 text-[13px]">By placing a fully refundable reservation, I agree to the Reservation Agreement and confirm that I have read Noovo's Terms of Use, Privacy Policy</p>
             <div className=" flex w-full mt-5 text-gray-800  justify-between ">
              <h6 className="flex flex-col text-[18px] font-semibold">Due Today <span className="text-gray-500 text-xs font-normal">Fully Refundable</span></h6>
              <p className="font-semibold text-[20px]">$100USD</p>
             </div>
          </div>
         <div className="w-full mt-3">
         <button className="bg-[#F3B03D] rounded-4xl w-full g py-4"> Reserve Your Noovo Lite</button>
         </div>

         </>
      ):(
        <ReserveForm/>
      )    
      }
  

    </div>
  )
}

export default ReserveCard