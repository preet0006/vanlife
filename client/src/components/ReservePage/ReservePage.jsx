import ReserveCard from "./ReserveCard"


const ReservePage = () => {
  return (
    <div className='max-w-screen h-screen overflow-hidden'>
     <div className='relative w-full h-full'>
        <img className="w-full h-full object-cover " src="./inventory.webp" alt="" />
          <div className="absolute max-w-xl justify-center items-center flex px-6 sm:right-8 sm:px-0 top-10 text-white">
           <ReserveCard/>

          </div>

     </div>
    </div>
  )
}

export default ReservePage