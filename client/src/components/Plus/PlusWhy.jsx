
const PlusWhy = ({whyImages}) => {
  

  return (
<>
  <div className="flex  flex-col min-h-screen min-w-screen px-4 lg:px-8 ">
    
 
  <div className="flex w-full  justify-center bg ">
    <div className="w-full rounded-3xl  bg-[#F9F7F4] ">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between  text-center mt-10  sm:mt-20 p-6 space-y-3 sm:ml-20 max-w-7xl">
            <h2 className=" text-2xl sm:text-5xl ">Why Noovo</h2>
            <p className="text-xs sm:text-base">From cooktops to connectivity,<br /> we’ve dialed in every detail so you <br /> can travel stress-free. Comfort is <br /> king.</p>
        </div>

        <div className="w-full max-w-screen  mt-2 sm:mt-12 ">
               <div className="flex  pt-4 h-auto justify-center w-full max-w-screen">

        <div className="flex  max-w-screen ">

            <div className="flex justify-center flex-wrap gap-4 lg:space-y-6 ">

         {   
         whyImages?.map((item,index)=>(
             <div key={index} className="flex sm:flex-col max-w-[250px] space-y-3.5 sm:space-y-0 sm:max-w-[46%]   gap-4   w-full lg:max-w-[20%] ">
                <img className="w-full object-cover rounded-2xl lg:h-[300px]" src={item.images} alt="" />
                  
                  <div>
                  <h4 className=" font-semibold hidden sm:block lg:text-3xl mt-4">{item.name}</h4>
                  <p className="text-xs mt-4 hidden sm:block">{item.description}</p>
                  </div>
                    
                </div>

         ))}       

            </div>
       
        </div>

    </div>
  
        </div>
        </div>
        </div>

     



        </div>
      </>
   
  )
}

export default PlusWhy