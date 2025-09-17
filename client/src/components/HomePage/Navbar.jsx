import { useEffect, useRef, useState } from "react";
import { LuEqual } from "react-icons/lu";
import ContactUs from "./ContactUs";
import ShowMenu from "./ShowMenu";
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom';
import InfoCard from "./infoCard";


const Navbar = () => {



  const [showContact,setShowContact] = useState(false);
  const [showMenu,setShowMenu] = useState(false)

  const modelRef = useRef()

  const head = useRef();

  const navigate = useNavigate()

     useEffect(() => { 
      gsap.from(head.current,{
      y:10,
      opacity:0,
      delay:0.5,
      duration:1,
      })
     }, [])



     useEffect(() => { 
      if(modelRef.current){

       if(showMenu){
        gsap.to(modelRef.current,{
          y:0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          display: "block",
        })
       } else{
        gsap.to(modelRef.current,{
          y: -400,
          // opacity: 0,
          duration: 1,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(modelRef.current, { display: "none" }); 
          },
        })
       }
      }


            
     }, [showMenu])
     
     useEffect(()=>{

     },[])
     


  return (
    <>
  
    <div ref={head} className="flex  text-white justify-between py-7
     px-8 mt-2  text-xl overflow-x-hidden">
      
        <div  className="flex  space-x-5 text-[15px] text-lig pt-3   font-medium mt-3 ">
            <LuEqual onClick={()=>setShowMenu(!showMenu)} className=" -mt-1 text-3xl " />
            <h3 className="hidden  md:block">Lite</h3>
            <h3 className="hidden md:block">Plus</h3>
            <h3 className="hidden md:block">Inventory</h3>
            <h3 className="hidden md:block">Service</h3>
            <h3 className="hidden md:block">Blog</h3>
        </div>
        <div className="flex flex-col ">
            <h2 className="text-[40px]  font-semibold">noovo</h2>
            <h2 className="font-light text-xs font-mono text-center   uppercase ">Travel Vans</h2>
        </div>
        <div className="flex  md:pr-2 justify-center items-center    space-x-4">

            <button  onClick={()=>setShowContact(!showContact)} className=" hidden lg:block w-full flex-none max-w-30 text-[14px] py-3 border rounded-full" >Contact Us</button>

             <button onClick={()=>navigate('/build')}  className="flex gap-1 mr-12 p-2 items-center bg-white text-black w-full flex-none max-w-48 text-center text-xs sm:text-[14px] py-2 rounded-4xl">
                 <span>
                <img className="hidden  sm:block w-12 ml-3" src="https://images.hgmsites.net/hug/2017-mercedes-benz-sprinter-passenger-van-2500-high-roof-v6-170-rwd-angular-front-exterior-view_100602682_h.jpg" alt="" /></span> 
                 Build your Van</button>
        </div>
    </div>

  { showContact &&(
     <div className="absolute flex max-w-screen h-screen justify-center items-center inset-0">

     <div className="flex w-full max-w-screen z-20  items-center">
     <ContactUs isOpen = {setShowContact}/>
 
     </div>
 
 
    </div>
  )
 }


          <div ref={modelRef} className="absolute hidden left-0 top-0">
           <ShowMenu isOpen = {setShowMenu}/>
          </div>
             
            {/* <div className=" absolute max-w-screen px-8   top-6  ">
            <InfoCard/>
              </div>  */}

  
    </>
  )
}

export default Navbar