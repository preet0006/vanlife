import { useDispatch } from "react-redux"
import InventoryCards from "../components/Inventory/InventoryCards"
import SideBar from "../components/Inventory/SideBar"
import { useEffect, useState } from "react"
import { InventoryData } from "../store/slices/orderSlice"


const InventoryPage = () => {

  const dispatch = useDispatch()

  const [inventoryData,setInventoryData]=useState([]);
  const [result,setResult]= useState(true)

  useEffect(() => {
   dispatch(InventoryData())
  }, [])
  

  return (
    <div className="flex  flex-col max-w-screen w-full">

      <div className="flex flex-col justify-between items-center pt-12 ">
      <h3 className="text-6xl font-normal">Noovo Camper Van Inventory</h3>
      <p className="max-w-xl text-center mt-6 text-[20px] text-gray-400">Explore our new and used selection of road-ready Class B RVs for sale.
      Nationwide shipping available.</p>
  
      </div>
       
       <div className="flex space-x-3 flex-col lg:flex-row">

       <div className="flex  w-full  max-w-screen lg:max-w-[350px] ">
           <SideBar setResult={setResult} setInventoryData={setInventoryData}/>
       </div>
   
     
      <div className="flex p-3 z-10">
        <InventoryCards result={result} inventoryData={inventoryData}/>
       
      </div>

      
      </div>
    
    </div>
  )
}

export default InventoryPage