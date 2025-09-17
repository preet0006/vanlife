

const InfoCard = () => {
  return (
    <div className="max-w-screen h-[70vh] bg-white z-30 ">
        <div className="flex h-full w-full max-w-screen ">
            <div className="flex mt-12 p-3 gap-3 flex-col w-xl 
            ">
             <h3>Noovo Pop</h3>
             <p className="text-xs min-w-40">Custom Built in America woth European craftmanship,modern design and the comforts of home</p>
             <p className="">Build your Van</p>
             <p className="">Get Brochure</p>
            </div>

            <div className="flex bg-gray-300 justify-center items-center  h-full w-7xl  gap-12">
                <div className="flex flex-col ">
                  <h6>Noovo Pop</h6>
                  <p></p>
                  <button>Explore this layout</button>
                </div>
                <div className="w-96">
                <img src="./build4.webp" alt="" />

                </div>
               
            

            </div>

        </div>
    </div>
  )
}

export default InfoCard