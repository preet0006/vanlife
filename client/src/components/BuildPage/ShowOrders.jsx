import { useState } from "react"
import { useSelector } from "react-redux"
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import PopCost from "./PopCost";

const ShowOrders = ({gearData}) => {
 
  const order = useSelector((state) => state.build.orderData)


  const navigate = useNavigate()

  const [show,setShow]=useState(true)


 
  
  

  
  const baseItems = order.filter(
    (item) => item.modelName || item.color
  )
  const utilityItems = order.filter(
    (item) => item.utilityName
  )

  return (
    <div className="flex flex-col px-4 lg:px-0 h-auto min-h-screen">
      <div className="flex flex-col mt-12">
        <h4 className="text-3xl mt-4">All The Options</h4>
        <p className="text-gray-400 text-[14px] mt-1 ml-1">
          Its made for you
        </p>
      </div>

   
      <div className="flex flex-col">
        {
        show &&(
            <PopCost setShow={setShow}/>
          )
        }
        <div className="flex mt-12 space-x-5">
          <button onClick={()=>setShow(true)} className="w-full hover:bg-gray-200 max-w-[45%] lg:max-w-[180px] px-4 py-12 rounded-3xl bg-[#F9F7F4]">
            Get Your Estimate
          </button>
          <button className="w-full hover:bg-gray-200 max-w-[45%] lg:max-w-[180px] px-4 rounded-3xl bg-[#F9F7F4]">
            Schedule Your Virtual Tour
          </button>
        </div>

        <div className="flex justify-center items-center ml-12 lg:ml-0 flex-col p-4 w-full max-w-[80%] lg:max-w-82 rounded-3xl mt-3 hover:bg-gray-200 bg-[#F9F7F4]">
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl lg:max-w-60 text-center">
              1920 or from 12750 per month
            </p>
            <p className="text-xs">Reserve your van today</p>

            <div className="flex space-x-8 mt-5 p-2   pb-2 items-center">
              <span className=" text-xl sm:text-4xl text-gray-700 "> <FaArrowRightLong /> </span>

              <button onClick={()=>navigate("/reserve")} className="bg-yellow-400 py-3  mt-2 text-xs sm:text-base text-hover:bg-amber-500 cursor-pointer rounded-4xl w-full px-4">
                Reserve your Build
              </button>
            </div>
          </div>
          </div>
         </div>

      <div className="mt-6 overflow-y-auto">
        <h2 className="text-xl ">Check The Base</h2>
        <div className="bg-[#F9F7F4] w-full max-w-screen lg:max-w-82 rounded-2xl flex flex-col">
          {baseItems?.map((item, i) => (
            <div
              key={i}
              className="flex justify-between p-2 mt-2 lg:max-w-80 w-full"
            >
              <p className="text-[14px] font-semibold">
                {item.modelName || "Color"}
              </p>
              <p className="text-[13px] font-medium">
                {item.modelPrice || item.color}
              </p>
            </div>
          ))}

             {utilityItems.map((item, i) => (
            <div
              key={i}
              className="flex justify-between p-2 mt-2 lg:max-w-80 w-full"
            >
              <p className="text-[14px] font-semibold">{item.utilityName}</p>
              <p className="text-[13px] font-medium">{item.utilitiyPrice}</p>
            </div>
          ))}


        </div>
      </div>


      <div className="mt-6 overflow-y-auto pb-20">
        <h2 className="text-xl">Check The Gears</h2>
        <div className="bg-[#F9F7F4] w-full max-w-screen lg:max-w-82 rounded-2xl flex flex-col">
          {
            gearData?.map((item,idx)=>(
               <div
              key={idx}
              className="flex justify-between p-2 mt-2 lg:max-w-80 w-full"
            >
              <p className="text-[14px] font-semibold">{item.name}</p>
              <p className="text-[13px] font-medium">{item.total}</p>
            </div>
            )

            )
          }
       
        </div>
      </div>
    </div>
  )
}

export default ShowOrders
