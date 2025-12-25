import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = ({type}) => {

  const navigate = useNavigate()
  const textref = useRef();
  const lineref = useRef()

  const {contextSafe}= useGSAP();
  

   useEffect(() => {
    
    gsap.from(textref.current,{
    y:20,
    opacity:0,
    delay:1,
    duration:1,
    })
   }, [])
 
   
  return (
    <div>

        <div ref={textref} className="ml-6 z-10  text-white" >
        <h2 className="text-xl sm:text-6xl font-normal  flex flex-col   " >
            NoovoLite <span className="sm:mt-2  "> ESSENTIAL,PERFECTED.  </span> </h2>
            <hr ref={lineref} className='font-black border-2 opacity-0' />
          <p className=" sm:mt-6 text-xs  sm:text-[20px] max-w-[250px] sm:max-w-md font-semibold"> With 7 headroom and elevator bed,
           it offers luxury and comfort on every adventure.</p>

           <div className="flex text-xs sm:text-base space-x-3 pl-1 mt-8 text-black">
        
         
          

            {type=="plus"?(
               <button onClick={()=>navigate('/plus')} className="bg-white py-1 px-4 sm:py-3 rounded-4xl ">
              Discover Plus
            </button>
            ):
             <button onClick={()=>navigate('/plus')} className="bg-white py-1 px-4 sm:py-3 rounded-4xl ">
                 Discover Pop
            </button>
            }
               


            <button onClick={()=>navigate('/build')} className="bg-yellow-400 px-4 py-3 sm:py-3 rounded-4xl">Reserve Your Build</button>
           </div>

     </div> 
     
        
     </div>
  )
}

export default Hero