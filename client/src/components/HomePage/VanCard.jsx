import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";




const VanCard = ({type,plusData}) => {

  


  const [card,setCards]=useState([])

  const cardsData= useSelector((state)=>state.home.cards);



  useEffect(() => {
   let data = [];

   if(type === "main"){
    data = cardsData.filter((item)=>item.cardtype === "main");
   } else if(type === "reviews"){
    data = cardsData.filter((item)=>item.cardtype==="reviews")
   } else if( type == "plus"){
    data = plusData || [] 
   }
      setCards(data)
  }, [type,cardsData,plusData]);

  const cardRef = useRef([])
  const textRef = useRef([])



useGSAP(() => {


  cardRef.current.forEach((card,index)=>{
    if(card){

      gsap.set(card,{
        opacity:0,
      })

      const hoverIn = ()=>{
        gsap.to(card,{
          y:-20,
          duration:1,
          opacity:1,
        })

        if(textRef.current[index]){
          gsap.to(textRef.current[index],{
              y: -30,
              duration: 1,
             
          })
        }
      };

      const hoverOut = ()=>{
        gsap.to(card,{
          opacity:0,
          duration:1,
          y:0
        })
        if(textRef.current[index]){
          gsap.to(textRef.current[index],{
              y:0,
              duration: 1,
              ease: "power1.out",

          })
        }
        
        
      }
      card.addEventListener("mouseenter", hoverIn);
      card.addEventListener("mouseleave", hoverOut);

      return () => {
        card.removeEventListener("mouseenter", hoverIn);
        card.removeEventListener("mouseleave", hoverOut);
      };
    }

  })


}, [card])

  
  

  
  return (

    <div className=" flex flex-nowrap overflow-x-auto scrollbar-hide ">

      {
        card.map((elem,index)=>(
       

          <div  key={index} className="flex  text-white flex-nowrap gap-6 sm:mt-10 px-4">

          <div className=" justify-center items-center flex flex-col relative mb-12  lg:rounded-4xl w-72  h-[500px] rounded-none lg:w-96   gap-3 ">

              <img className=" h-80 w-80 object-cover  lg:h-full lg:w-full  rounded-none  lg:rounded-4xl " src={elem.images[0]} alt="" />

              <div className="lg:hidden">
              <h3 className="text-xl sm:text-2xl font-medium">{elem.name}</h3>
                
              <p className=" text-xs sm:text-base pt-5  text-gray-500">{elem.description}</p>

                
                
              </div>

              
              <div  ref={(el) => (textRef.current[index] = el)}className=" hidden pointer-event-none  lg:block absolute left-6 bottom-8 ">
                  <h3 className="text-3xl font-medium">{elem.name}</h3>
         
              </div>

              <div ref={(el)=>{cardRef.current[index]= el}} className=" z-0 absolute bottom-0 w-full max-w-[360px]
               bg-white text-black rounded-2xl px-10 py-12 "> 
                    <h3 className="text-3xl text-black font-medium">{elem.name}</h3>
                  <p className=" text-[14px] pt-2 text-gray-500">{elem.description}</p>
                  
              </div>

          </div>

       


     
              
              

           

          </div>


        ))
      }       

      

      
      

    </div>
  )
}

export default VanCard