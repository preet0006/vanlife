import { useSelector } from "react-redux"


const FootCard = () => {

  const data = useSelector((state)=>state.home.cards || [])

  const setdata= data.filter((item)=>item.cardtype==="rear")
  // console.log(setdata)

  return (

    <div className=" flex flex-wrap  px-3 gap-3 justify-center items-center mt-3 sm:mt-16 ">
    
      { setdata.map((data,index)=>(
          <div key={index} className=" z-0 flex  flex-col  relative ">
          <img className="rounded-4xl w-[380px] h-[300px] " src={data.images[0] || "https://tse3.mm.bing.net/th?id=OIP.6zphlNCErJX8RdfcceEYBQHaE8&pid=Api&P=0&h=180" } alt="" />
         
         <div className="absolute top-2/6 text-center flex flex-col justify-center items-center  w-full ">
         <h6 className="text-white -ms-6">{data.name}</h6>

         <h4 className="-ms-4 text-white text-2xl ">{data.description}</h4>
        
       </div>  
    
        </div>
        
      ))
        
      
}
    

    </div>
  )
}

export default FootCard