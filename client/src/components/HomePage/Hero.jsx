import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

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

        <div ref={textref} className="ml-6  text-white" >
        <h2 className="text-3xl sm:text-6xl  flex flex-col   " >
            NoovoLite <span className="mt-2 "> ESSENTIAL,PERFECTED.  </span> </h2>
            <hr ref={lineref} className='font-black border-2 opacity-0' />
          <p className=" mt-6  am:text-[20px] max-w-md font-semibold"> With 7 headroom and elevator bed,
           it offers luxury and comfort on every adventure.</p>

           <div className="flex space-x-3 pl-1 mt-8 text-black">
            <button onClick={()=>navigate('/plus')} className="bg-white px-4 py-3 rounded-4xl">Discover Plus</button>
            <button onClick={()=>navigate('build')} className="bg-yellow-400 px-4 py-5 sm:py-3 rounded-4xl">Reverse Your Build</button>
           </div>

     </div> 
     
        
     </div>
  )
}

export default Hero