import { useState } from "react"
import ShowBase from "./ShowBase";
import ShowGears from "./SHowGears";
import ShowOrders from "./ShowOrders";



const BuildRightSection = ({setImage}) => {

  const[base,setBase]=useState(true)
  const[gear,setGears]=useState(false);
  const [order,setOrders]=useState(false)

  return (
    <div className=" w-full h-full  overflow-y-auto flex pl-6  flex-col">

      <div className="flex lg:text-xs items-center pt-4  justify-center space-x-3 text-gray-400">
      <p onClick={() => { setBase(true); setGears(false); setOrders(false); }}>Step 1 <span>Base /</span></p>
       <p onClick={() => { setBase(false); setGears(true); setOrders(false); }}>Step 2 <span>Gears /</span></p>
       <p onClick={() => { setBase(false); setGears(false); setOrders(true); }}>Step 3 <span>Order /</span></p>
  
      </div>

      {
        base ?(
          <div className="w-full min-h-screen">
          <ShowBase setImage={setImage}/>
           </div>
        ):(
          gear?(
           <div className="w-full min-h-screen">
           <ShowGears setImage={setImage}/>
           </div> 
          ):(
            order?(
              <div className="w-full min-h-screen">
               <ShowOrders/>
              </div> 
            ):(
              <h3>fn</h3>
            )
          ))}


      </div>
   

  
  )
}

  
         
         

export default BuildRightSection