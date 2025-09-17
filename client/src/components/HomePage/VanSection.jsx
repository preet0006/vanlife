import { useGSAP } from "@gsap/react";
import { useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { gethome } from "../../store/slices/homepageSlice";
import  gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




const VanSection = () => {
  const dispatch = useDispatch()
  const boxRef = useRef([])
 
  const van = useSelector((state)=>state.home.vanCard);
  // console.log(van)

  useEffect(() => {
    dispatch(gethome());
  }, [])

  // useEffect(() => {
  //   if (!van || van.length === 0) return; 

   
  //   boxRef.current.forEach((card, index) => {
  //     if (card) {
  //       gsap.from(card, {
  //         y: 50,
  //         opacity: 0,
  //         duration: 1.5,
  //         scrollTrigger: {
  //           trigger: card, 
  //           start: "top 80%", 
  //           end: "top 50%", 
  //           scrub: true, 
  //         },
  //       });
  //     }
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, [van]);
  
 


  
     


  return (
    <div className="flex flex-col min-h-screen justify-center sm:mt-12 items-center ">
      
     
      <div  className="  gap-8 mt-12 flex  max-w-screen w-full flex-wrap align-middle items-stretch justify-center">

   {   van.map((elem,index)=>(
       <div  ref={(el)=>{boxRef.current[index]= el}} key={index} className=" relative  min-h-96 sm:min-h-[580px] w-[90%] md:w-[40%]  bg-center bg-cover rounded-4xl" style={{backgroundImage:`url(${elem.images[0]})`}}>
     
       <div className="flex flex-col justify-center items-center pt-4 sm:pt-10 ">
     
        <h3 className="text-2xl "> <span className="sm:text-2xl font-semibold">{elem.name}</span></h3>
        <p className="text-center text-gray-500 w-full max-w-40  text-xs sm:text-[14px]">{elem.description}</p>
     
        <div className=" absolute bottom-5 sm:bottom-12 space-x-2">
         <button className="bg-black text-xs sm:text-[16px] text-white px-6 py-4 rounded-4xl font-semibold">Explore More</button>
         <button className="bg-white text-xs sm:text-[16px] text-black px-6 py-4 rounded-4xl">See Inventory</button>
     
        </div>
       </div>    
       </div>    
      
     ))}

   
      

       </div>


    </div>
  )
}

export default VanSection