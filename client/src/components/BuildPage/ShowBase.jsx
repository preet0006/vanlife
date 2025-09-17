import {  useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderDetails } from "../../store/slices/buildSlice";



const ShowBase = ({setImage}) => {
  

 const [orderData,setOrderData]=useState([]);


  const dispatch = useDispatch()

const data = useSelector((state)=>state.build.baseData || []);


const handleOrder = (item) => {
  setOrderData((prev) => {
    let updated = [...prev];

    if (item.utilityType) {
      // Remove existing item of the same utility type
      updated = updated.filter((e) => e.utilityType !== item.utilityType);
    } else {
      const key = Object.keys(item)[0];
      updated = updated.filter((entry) => !Object.prototype.hasOwnProperty.call(entry, key));
    }

    const newData = [...updated, item];
    dispatch(setOrderDetails(newData));
    return newData;
  });
};








const color = data.flatMap(item => item.color || []);
const utilities = data.flatMap(item => item.utilities || []);
const model = data.flatMap(item =>
  (item.model || []).flatMap(entry => entry.models || [])
);




const allUtilities = useMemo(() => {
  const map = new Map();
  utilities.forEach((utility) => {
    const type = utility.utilities[0].utilityType; 
    if (!map.has(type)) {
      map.set(type, []);
    }
    map.get(type).push(utility);
  });
  return map;
}, [utilities]);






  return (
    <div className="">
         <div className="mt-10 w-full h-full  ">
       
       <h5 className="text-3xl "> <span className="underline font-semibold">Build
         </span> The Base</h5>
       <p className="text-gray-400 text-xs pt-2">Scroll down to pick your options and finishes.</p>
     </div>
        
       
     <h6 className="text-xl  mt-12  font-medium "> Choose Your Model</h6>

     <div className="flex flex-col space-y-2  px-6 mt-5">
        
     {
     model?.map((data,idx)=>(
        <div onClick={()=>{setImage(data.imgUrl[1]);handleOrder({
          modelName:data.name,modelPrice:data.range
        });
          
         }  } key={idx} className="  flex text-gray-500 w-full   lg:max-w-80 text-center justify-between rounded-2xl p-2 bg-gray-100">
         <p className="text-center p-4"> <span className="font-semibold">{data.name}</span> <br />
           <span className="text-xs">{data.range}</span> 
         </p>
         <img className=" w-24 sm:w-36 lg:w-34 " src={data.imgUrl[0]} alt="" />
       </div>

     ))
   
       
       }

      
        
       
      </div>

      <div className="mt-6 px-6 ">
       <h5 className="text-xl">Pick Your Exterior Color</h5>

      <div>
        <div className="flex flex-wrap gap-4 pl-2 mt-6">
          {  
            color?.map((item, index) => (
              <div key={index} className="border flex w-32 h-16  rounded-2xl">          
                <div onClick={() => {setImage(item.availableColors[0].imgUrl); handleOrder({color:item.availableColors[0].key,}) }} className="flex text-center  ml-2 mt-3 w-9 h-9 rounded-4xl bg-orange-500">
                  <button className="text-[14px] font-serif ml-12 ">
                    {item.availableColors[0].key} <span>Included</span>
                  </button>
                </div>
              </div>
            ))
          }
         </div>
         </div>
         </div>
      
      <div className="mt-6  px-6 ">
        {  
          [...allUtilities.entries()].map(([type, items], index) => (
            <div  key={index}>
              <h5 className="text-xl font-medium mt-6">Choose Your {type}</h5>
              {items.map((utility, index) => (
                <div onClick={()=>handleOrder({utilityName:utility.utilities[0].name,utilityDetails:utility.utilities[0].details,utilityType:utility.utilities[0].utilityType  })} key={index} className="flex mt-3 text-gray-500 w-full lg:max-w-80 text-center justify-between rounded-2xl p-6 bg-gray-100">
                  <h6>{utility.utilities[0].name} <br /> <span className="text-xs">{utility.utilities[0].details}</span></h6>
                  <p className="text-xs">{utility.utilities[0].price}</p>  
                </div>
              ))}
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default ShowBase;
