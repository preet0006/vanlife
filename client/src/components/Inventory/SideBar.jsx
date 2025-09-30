import { useState,useEffect } from "react"
import { useSelector } from "react-redux";
import { InventoryDetails } from "../../constants";


const SideBar = ({setInventoryData,setResult}) => {



  const [isOpen,setIsOpen]= useState(true);
  const [selected,setSelected]=useState(false)

  


  const data = useSelector((state)=>state.order.inventory);
  console.log(data)
  
   const models = InventoryDetails.models
   const color = InventoryDetails.colors



  useEffect(() => {
    setInventoryData(data);
    console.log(data);
  }, [data, setInventoryData]);


    useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024); 
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (value,type)=>{
    console.log(value,type)
     
    try {
      setSelected({type,value})
      if (value === "all") {
      setInventoryData(data);
      setResult(data.length > 0); 
      return; 
    }

      if(type=="color"){
        const findColor = data.filter((e)=>e.details.color == value)
        setResult(findColor.length > 0);
        console.log(findColor)
        setInventoryData(findColor)

      } else{
        const model = data.filter((item)=>item.model==value)
        setResult(model.length > 0);
         setInventoryData(model)
          
      }
   
    } catch (error) {
      console.log(error)
      
    }
  }


  return (

<>

    <div className=" flex flex-col w-full max-w-screen  mt-4 items-center justify-center lg:justify-normal">
       
      <button className="lg:hidden" onClick={()=>setIsOpen(!isOpen)}>Sort By</button>
      {
        isOpen&&(
       <div className="absolute lg:relative fixed  -top-3 z-50 flex min-h-screen bg-white lg:h-auto  flex-col w-full  ">


       <button onClick={()=>setIsOpen(!isOpen)} className="bg-white border   mt-12 w-full max-w-screen text-gray-700  lg:max-w-[120px] py-3 rounded-3xl lg:hidden">Back</button> 
    <h3 className="p-2 mt-6 text-[20px]">Models</h3>
    
     <div className="flex flex-wrap justify-center lg:justify-normal items-center gap-4 p-3  "> 
      { 
        models.map((item,idx)=>(

         <button onClick={()=>handleClick(item.value,"model")}
          key={idx} className={`border w-full max-w-5/12 lg:max-w-[120px] py-3 rounded-3xl 
      ${selected.type === "model" && selected.value === item.value 
        ? "border-white bg-gray-950 text-white" 
        : "bg-white border-gray-700 text-gray-700"}`}
  >{item.label}</button>
        ))
      }
         
       </div>

       <h3 className="p-2 text-[20px]">Exterior Color</h3>
       <div className="flex flex-wrap justify-center lg:justify-normal  items-center gap-4 p-3  ">
        {
          color.map((e,idx)=>(
            <button onClick={()=>handleClick(e.value,"color")}  key={idx} className={`border w-full max-w-5/12 lg:max-w-[120px] py-3 rounded-3xl 
      ${selected.type === "color" && selected.value === e.value 
        ? "border-white bg-gray-950 text-white" 
        : "bg-white border-gray-700 text-gray-700"}`}
  >{e.label}</button>

          ))
        }

         
        
     </div>
     <button onClick={()=>setIsOpen(!isOpen)} className="bg-white border mt-4  lg:mt-12 w-full max-w-screen text-gray-700 mb-4  lg:max-w-[120px] py-3 rounded-3xl lg:hidden">Apply</button> </div>
       
        )
      }

    
    </div>
  </>
  )
}

export default SideBar