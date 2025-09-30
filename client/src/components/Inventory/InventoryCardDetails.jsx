import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { options } from "../../constants"
import { useNavigate } from "react-router-dom"

const InventoryCardDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)

  const data = useSelector((state) => state.order.inventory)
  const productData = data.filter((e) => e._id == id)
  

    useEffect(() => {
   
    if (!id) {
      navigate("/inventory", { replace: true });
    }
  }, [id, navigate]);


  return (
    <div className="overflow-x-hidden min-h-screen w-full">
      <div className="flex flex-col lg:flex-row ">
  
        <div className="w-full lg:w-[75%] relative">
          {productData.length > 0 && (
            <>
            <img
             className="object-cover w-full h-[400px] lg:h-screen"
              src={productData[0].image?.[currentIndex] || "./inf.webp"}
              alt={`Van ${currentIndex + 1}`}
              />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {productData[0].image?.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? "bg-yellow-50" : "bg-gray-500"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
              </>
             )}
           </div>

   
        {productData.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col p-8 mt-4 w-full lg:w-[30%] gap-2 lg:h-screen lg:overflow-y-auto bg-white"
          >
            <p className="bg-gray-200 rounded-2xl text-[15px] w-full max-w-20 py-1 text-center">
              In Stock
            </p>
            <h5 className="text-3xl mt-2">{item.model}</h5>
            <p className="text-gray-400 text-[20px]">{item.ownerName}</p>
            <hr className="text-gray-300 mt-4" />

            <div className="flex flex-col mt-6">
              <p className="font-semibold">
                New/Used:{" "}
                <span className="font-normal text-gray-700">
                  {item.details.VanType}
                </span>
               </p>
              <p className="font-semibold">
                VIN:
                <span className="font-normal text-gray-700">
                  {item.details.EngineNum}
                </span>
              </p>

              <p className="font-semibold">
                Exterior Color:{" "}
                <span className="font-normal text-gray-700">
                  {item.details.color}
                </span>
              </p>

              <p className="font-semibold">
                Battery:{" "}
                <span className="font-normal text-gray-700">
                  {item.details.battery}
                </span>
              </p>

              <p className="font-semibold">
                Sleep Capacity:{" "}
                <span className="font-normal text-gray-700">
                  Up to {item.details.sleepCapacity}
                </span>
              </p>

              <p className="font-semibold">
                Location:{" "}
                <span className="font-normal text-gray-700">
                  {item.details.location}
                </span>
              </p>

              <hr className="text-gray-300 mt-10" />
            </div>

            <div className="flex items-center mt-12 flex-col">
              <h5 className="text-3xl font-semibold">{item.price}</h5>
              <p>
                or from{" "}
                <span className="font-semibold">{item.emi} per month</span>
              </p>
              <button onClick={()=>navigate('/reserve')} className="bg-orange-400 cursor-pointer mt-6 w-full rounded-4xl py-3 max-w-3xl">
                Reserve this van
              </button>
              <button className="border cursor-pointer mt-2 w-full rounded-4xl py-3 max-w-3xl">
                Contact Us
              </button>
              <hr className="text-gray-300 mt-4" />
            </div>

            <div className="flex flex-col items-center mt-12">
              <h5 className="text-xl font-semibold">Option Features Available</h5>

              <div className="bg-gray-100 rounded-2xl p-3 space-y-3 mt-4 w-full lg:max-w-72">
            {options?.map((item, i) => (
                 <p key={i} className="flex justify-between font-semibold">
                   {item.name}
                  <span className="text-xs mt-1 text-center font-normal mr-3">
                   ${item.price}
                     </span>
                   </p>
                  ))}
              </div>

              <div className="mt-6">
                <hr className="text-gray-300 mt-4" />
                <h5 className="text-3xl font-semibold mt-6">Description</h5>
                <p className="text-gray-500 mt-6">
                  This Noovo Plus van, with a stealthy granite exterior and 7ft
                  interior height, is powered by a 660Ah Lithionics lithium
                  battery, a 150A ACR engine charger, and a 400W solar system,
                  making it perfect for full-time living and remote work. Its
                  modern interior features high-end finishes, a 12V electric
                  lift bed, and a convertible lounge, providing sleeping space
                  for up to four people. Designed for off-grid living year-round,
                  it comes equipped with Havelock Wool insulation, 12V AC, and a
                  Rixens heater. The kitchen includes an induction cooktop,
                  fridge, and microwave, while an indoor shower, workstation,
                  and two swivel seats complete this van, making the Noovo Plus
                  the ideal mobile home and office.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InventoryCardDetails
