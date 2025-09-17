import { useEffect, useState } from "react"
import BuildLeftSection from "../components/BuildPage/BuildLeftSection"
import BuildRightSection from "../components/BuildPage/BuildRightSection"
import { useDispatch } from "react-redux"
import { fetchData } from "../store/slices/buildSlice"


const BuildPage = () => {
  const dispatch = useDispatch()

  const [image,setImage]=useState('')
  console.log(image)
 
  useEffect(() => {
    dispatch(fetchData()); 
}, [dispatch]);
 
  

  return (
    <div className="max-w-screen flex flex-col lg:flex-row h-screen ">

  
    <div className=" w-full  max-w-screen  lg:max-w-[75vw] h-screen ">
      <BuildLeftSection image={image} />
    </div>
    <div className=" w-full max-w-screen  lg:max-w-[25vw]">
      <BuildRightSection  setImage={setImage} />

    </div>

    </div>
  )
}

export default BuildPage