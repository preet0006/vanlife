import React, {  useEffect, useState } from "react";
import Hero from "../components/HomePage/Hero"
import MidSection from "../components/HomePage/MidSection"
import Navbar from "../components/HomePage/Navbar"
const VanCard = React.lazy(() => import("../components/HomePage/VanCard"));
const VanMain = React.lazy(() => import("../components/HomePage/VanMain"));
const VanSection = React.lazy(() => import("../components/HomePage/VanSection"));
const FootCard = React.lazy(() => import("../components/HomePage/FootCard"));
const TryVan = React.lazy(() => import("../components/HomePage/TryVan"));
const Questions = React.lazy(() => import("../components/HomePage/Questions"));
const Footer = React.lazy(() => import("../components/HomePage/Footer"));

import { useDispatch, useSelector } from "react-redux"
import { getData } from "../store/slices/homepageSlice"









const PlusPage = ({isOpen}) => {
  const dispatch = useDispatch();

  const [active,setActive]=useState(false)

  useEffect(() => {
    dispatch(getData())
   
  }, [dispatch])

  const hero = useSelector((state)=>state.home.hero)

  


 
  
  const heroimg = hero[0] 
  return (
    <>
  <div className="flex flex-col overflow-x-hidden m-auto max-w-screen   w-full ">
  <div
          className="relative bg-no-repeat  bg-cover bg-center w-screen h-[77dvh] sm:min-h-screen"
          style={{ backgroundImage: heroimg ? `url(${heroimg})` : "none" }}
        >

  <div className="z-[999]  text-black">
  <Navbar setActive={setActive}  />

  <div className={`absolute z-20 bottom-20  sm:bottom-14 sm:pl-12 ${active?"hidden":"block"}  `}>
    <Hero type="plus"/>
  </div>

  </div>    
    </div>

  <section className="mt-3 flex flex-col ">
     <div className="flex mt-8 justify-center text-center ">
            <h1 className=" text-xl sm:text-5xl ">We build camper vans <br />
            people actually want to live in.</h1>
          </div>
    
    <VanSection/> 
    <VanMain/>

    <div className="min-h-screen  min-w-screen text-white  bg-black" >
    <div className="flex flex-col   md:flex-row gap-4 justify-center
     text-center space-x-6 lg:space-x-60 py-20 ">
        <h3 className="text-xl sm:text-2xl  lg:text-6xl font-normal">
          The best camper van <br /> for full-time living.</h3>

         <p className="text-gray-300 text-xs sm:text-base lg:mt-5 text-center " >From the kitchen 
             and bath to the bedroom   <br /> and workspace, every detail is 
             <br />meticulously designed—with a custom
             <br />touch, even for the family pup.</p> 
    </div>

    <VanCard  type="main"/>
    </div>
  
    <div className=" flex flex-col  ">
    <MidSection  />
    
    <div className="">
    <div className=" flex flex-col  justify-center items-center text-center mt-8">
        <h3 className=" text-xl font-medium sm:text-5xl max-w-3xl w-full ">Van life made easy.<br/>
        No outdoor experience necessary.</h3>

        <p className="p-6 text-xs sm:text-[16px] max-w-xl">We don’t just build exceptional vans—we craft an ownership experience
        that’s simple, seamless, and stress-free.</p>
       </div>
    <FootCard/>
    

    </div>
    </div>

    <div className="mt-12">
      <TryVan/>
      <Questions/>
      <Footer/>
       
    </div>



  </section>
    </div>
     
</>


    
  )
}

export default PlusPage