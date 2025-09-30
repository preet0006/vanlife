import { useNavigate } from "react-router-dom"

const TryVan = () => {

  const navigate = useNavigate()
  return (
    <>
  
    <div className=' flex  justify-center brightness-90 bg-[url("/girldog.webp")] w-full h-96 sm:min-h-screen bg-cover bg-no-repeat  '>
        <div className="flex flex-col justify-center items-center">
        <h3 className="text-white text-2xl md:text-5xl max-w-xl text-center">Experience the NOOVO life for a Weekend </h3>

        <button onClick={()=>navigate('/build')} className="bg-white mt-4 p-4 rounded-4xl">Try a Noovo Van </button>

        </div>
    </div>
     
   

    </>
  )
}

export default TryVan