import { useSelector } from "react-redux"

const ShowOrders = () => {

  const order= useSelector((state)=>state.build.orderData)
  console.log(order)



  return (
    <div className="flex flex-col px-4 lg:px-0 h-auto min-h-screen ">

        <div className="flex flex-col mt-12">
        <h4 className="text-3xl mt-4 ">All The Options</h4>
        <p className="text-gray-400 text-[14px]  mt-1 ml-1">Its made for you </p>
        </div>

        <div className="flex flex-col">
          <div className="flex mt-12 space-x-5 ">
            <button className=" w-full max-w-[45%] lg:max-w-[150px] px-4 py-12 rounded-3xl bg-[#F9F7F4] ">Get Your Estimate</button>
            <button className=" w-full max-w-[45%] lg:max-w-[150px] px-4
             rounded-3xl bg-[#F9F7F4]">Schedule Your Virtual Tour</button>
          </div>

          <div className="flex  justify-center items-center ml-12 lg:ml-0 flex-col p-4 w-full max-w-[80%] lg:max-w-82 rounded-3xl  mt-3 bg-[#F9F7F4]">
           <div className="flex flex-col justify-center items-center">
            <p className="text-xl lg:max-w-60 text-center">1920 or from 12750 per month</p>
            <p className="text-xs">Reserve your van today</p>
             <div className="flex space-x-4 mt-4 p-2 pb-2">
                <button>Arrow</button>
                 <button className="bg-yellow-400 py-4 rounded-4xl  w-full px-4">Reserve your Build</button>
             </div>

           </div>
          </div>

        </div>

        <div className=" mt-6 overflow-y-auto ">
         <h2 className="text-xl">Check The Base</h2>
         <div className="bg-[#F9F7F4] w-full  max-w-screen   lg:max-w-82 rounded-2xl  flex flex-col">
          <div className="flex justify-between p-1 mt-4  lg:max-w-80 w-full ">
            <p className="text-[14px] font-semibold">NoovoPlus</p>
            <p className="text-[13px] font-medium">$18600</p>
          </div>

          {
            order.map((item,key)=>(
              Object.entries(item).map(([key,value])=>(
                   <div key={key} className="flex space-x-18 justify-between p-1 mt-4  lg:max-w-80 w-full ">
                  <p className="text-[14px] font-semibold">{key}</p>
                 <p className="text-[13px] font-medium">{value}</p>
                 </div>

              ))
             
             
              
          

            ))
          }
        

         
         </div>

        </div>

        <div className=" mt-6  overflow-y-auto pb-20">
         <h2 className="text-xl">Check The Gears</h2>
         <div className="bg-[#F9F7F4] w-full  max-w-screen lg:max-w-82 rounded-2xl  flex flex-col">
          <div className="flex justify-between p-1 mt-4  lg:max-w-80 w-full ">
            <p className="text-[14px] font-semibold">NoovoPlus</p>
            <p className="text-[13px] font-medium">$18600</p>
          </div>
        
         </div>

        </div>

    </div>
  )
}

export default ShowOrders