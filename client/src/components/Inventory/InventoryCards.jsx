import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InventoryCards = ({inventoryData,result}) => {

  const navigate = useNavigate()
  console.log(inventoryData.length)
  

 

  const handleNavigation=(item)=>{
    if(!item){
      return
    }
   navigate(`/details/${item._id}`);

  }

  return (
    <div className="flex mt-6">
    { result?(

         <div className="flex flex-wrap justify-center items-center     gap-6 ">
         
         {
          inventoryData && inventoryData.map((item,idx)=>(
            
        <div onClick={()=>{handleNavigation(item)}} key={idx} className={`relative    sm:w-[48%]   sm:h-[650px] border  rounded-t-3xl border-gray-300 ${inventoryData.length<=1? 'sm:w-[75%]':'sm:w-[48%]'}  `  }>
          
          <img className=" rounded-t-3xl brightness-75 w-full h-[400px] object-cover" src={item.image[0]} alt="" />

          <div className="absolute left-10 space-y-70 top-4">
            <p className=" inline-block bg-white px-2 py-1 text-[14px] text-center text-gray-500 rounded-xl  ">In Stock</p>
            <h5 className=" text-white font-medium">{item.ownerName} <br /><span className="text-white   sm:text-2xl font-bold   ">{item.model}</span>
            </h5>

          </div>

          <div className="absolute   top-3/12   right-6">
            <p className="  inline-block ml-12 cursor-pointer px-8 text-[11px] py-4 text-center rounded-3xl bg-white   sm:text-xl"> <FaArrowRight className="text-gray-600 font-light"  /> </p>

            <h5 className=" mt-30 text-white text-xs sm:text-xl ">${item.price}</h5>
            <p className="text-gray-300 font-medium text-xs sm:text-[16px]">`or from ${item.emi}/mo`</p>

          </div>
         <div className="p-3 text-[14px]">
        <p>type: {item.details.VanType}</p>
        <p>Vin: <span>{item.details.EngineNum}</span> </p>
        <p>Exterior Color: {item.details.color}</p>
        <p>Battery: {item.details.battery}</p>
        <p>Sleep Capacity: {item.details.sleepCapacity}</p>
        <p>Location: {item.details.location}</p>
        
        </div>
       
        <div className="flex justify-center items-center mt-4 ">
        <button onClick={handleNavigation} className="w-full cursor-pointer rounded-4xl py-3 mb-3 max-w-52  sm:max-w-[440px] bg-black text-white">Get  More Information</button>
        </div>
           
        </div>

          ))
         }
      </div>
      
    ):(
      (
          <div className="text-gray-500 text-xl font-semibold">No items found in Inventory.</div>
        )
    )
    
 
      }
        
        
     </div>
    
  )
}

export default InventoryCards