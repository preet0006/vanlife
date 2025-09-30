import { useState } from "react"
import ShowBase from "./ShowBase";
import ShowGears from "./SHowGears";
import ShowOrders from "./ShowOrders";



const BuildRightSection = ({setImage,gearData, setGearData}) => {

  const[base,setBase]=useState(true)
  const[gear,setGears]=useState(false);
  const [order,setOrders]=useState(false)
  

  return (
    <div className=" w-full h-full  overflow-y-auto flex pl-6  flex-col">

      <div className="flex lg:text-xs items-center pt-4  justify-center space-x-3 text-gray-400">
      <p className={`${base?"text-black font-medium":"text-gray-400"}`} onClick={() => { setBase(true); setGears(false); setOrders(false); }}>Step 1 <span>Base /</span></p>
       <p className={`${gear?"text-black font-medium":"text-gray-400"}`} onClick={() => { setBase(false); setGears(true); setOrders(false); }}>Step 2 <span>Gears /</span></p>
       <p className={`${order?"text-black font-medium":"text-gray-400"}`} onClick={() => { setBase(false); setGears(false); setOrders(true); }}>Step 3 <span>Order /</span></p>
  
      </div>

      {
        base ?(
          <div className="w-full min-h-screen">
          <ShowBase setImage={setImage}/>
           </div>
        ):(
          gear?(
           <div className="w-full min-h-screen">
           <ShowGears gearData={gearData} setGearData={setGearData} setImage={setImage}/>
           </div> 
          ):(
            order?(
              <div className="w-full min-h-screen">
               <ShowOrders gearData={gearData}/>
              </div> 
            ):(
              <h3>fn</h3>
            )
          ))}


      </div>
   

  
  )
}

  
         
         

export default BuildRightSection