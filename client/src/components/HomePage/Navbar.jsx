import { useEffect, useRef, useState } from "react";
import { LuEqual } from "react-icons/lu";
import ContactUs from "./ContactUs";
import ShowMenu from "./ShowMenu";
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom';
import InfoCard from "./infoCard";


const Navbar = ({setActive}) => {


  
 
  


  const [isOpen,setIsOpen]=useState(false)
  const [showContact,setShowContact] = useState(false);
  const [showMenu,setShowMenu] = useState(false)
    const [showNav, setShowNav] = useState(true);
  
    
 

  const modelRef = useRef()

  const head = useRef();

  const navigate = useNavigate()


  const handleClose = ()=>{
    setTimeout(()=>{
      setIsOpen(!isOpen)
    },3000)

  }

     useEffect(() => { 
      gsap.from(head.current,{
      y:10,
      opacity:0,
      delay:0.5,
      duration:1,
      })
     }, [])


     useEffect(() => {
      gsap.to(head.current, {
      backgroundColor: "rgba(0,0,0,0.2)",
      color: "#000",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      backdropFilter: "blur(8px)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "20%",
        scrub: true,
      },
    });
  }, []);
     

  

 

          

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
          y: -800,
          // opacity: 0,
          duration: 1.5,
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
  
      <div   ref={head} className={` top-0 left-0 w-full z-[9999]  flex text-white justify-between py-7 px-8 text-xl `}
      >
      
        <div  className={` cursor-pointer   flex z-50  space-x-5 text-[15px]  pt-3  font-normal mt-3 `}>
            <LuEqual onClick={()=>setShowMenu(!showMenu)} className="-mt-4 sm:-mt-1 text-3xl " />
            
            
            <div  className="relative z-20 ">
              
             <InfoCard setActive={setActive}   />
              </div>
            <h3 className="hidden md:block">Service</h3>
            <h3 className="hidden md:block">Blog</h3>
        </div>
        <div className="flex flex-col z-40 ">
            <h2 className=" text-xl sm:text-[40px]  font-semibold">noovo</h2>
            <h2 className="font-light text-xs font-mono text-center   uppercase ">Travel Vans</h2>
        </div>
        <div className="flex  md:pr-2 justify-center items-center    space-x-4">

            <button  onClick={()=>setShowContact(!showContact)} className=" hidden lg:block w-full flex-none max-w-30 text-[14px] py-3 border rounded-full cursor-pointer" >Contact Us</button>

             <button onClick={()=>navigate('/build')}  className="flex gap-1 sm:mr-12 p-2  cursor-pointer items-center bg-white text-black w-full flex-none max-w-48 text-center text-xs sm:text-[14px] py-2 rounded-4xl">
                 <span>
                <img className="hidden text-xs rounded-full object-cover  sm:text-base brightness-200 sm:block h-10 w-10 ml-3" src="/vanlogo.webp" alt="" /></span > 
                 Build your Van</button>
        </div>
    </div>

  { showContact &&(
     <div onClick={()=>setShowContact(false)} className="absolute flex max-w-screen  h-screen justify-center items-center inset-0">

     <div className="flex w-full max-w-screen z-20  items-center">
     <ContactUs isOpen = {setShowContact}/>
 
     </div>
 
 
    </div>
  )
 }


         <div ref={modelRef} className="fixed inset-0 hidden z-[99999]">
           <ShowMenu isOpen = {setShowMenu}/>
          </div>

      <div className="z-10 mt-2  absolute max-w-screen px-8   top-6  ">
      {isOpen && (
            <div className="fixed inset-0 z-10 flex justify-center items-start pt-6">
          
          <div
      className="absolute inset-0 bg-transparent"
      onClick={() => setIsOpen(false)}
    ></div>

  
    
  </div>
)}
 
  </div>  

  
    </>
  )
}

export default Navbar



