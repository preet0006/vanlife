const PlusInfo = () => {
  return (
    <div className="hidden md:block flex flex-col min-h-screen w-full max-w-screen">
         
      <div className="flex w-full justify-center mt-20 items-center flex-col space-y-8">
        <h4 className="text-6xl">Specs</h4>
        <p className="text-gray-400 text-[18px]">
          Here`s how to measure awesome.
        </p>
      </div>

      <div className="max-w-screen mt-4 flex flex-col justify-center items-center">

        <div className="flex justify-evenly text-[18px] p-2 h-10 rounded-3xl min-w-4xl bg-gray-200">
          <button>Vehicle</button>
          <button>Interior</button>
          <button>Types</button>
          <button>Details</button>
          <button>Products</button>
          <button>Cooking</button>
          <button>Bed</button>
          <button>Extra</button>
          <button>Spacing</button>
        </div>

        <div className="mt-16 w-full flex flex-col items-center">

          <div className="flex h-14 w-full max-w-6xl border-b border-gray-300 justify-between p-3">
            <h6>Engine & Power</h6>
            <p>What engine powers the van and how it performs on long drives.</p>
          </div>

          <div className="flex h-14 w-full max-w-6xl border-b border-gray-300 justify-between p-3">
            <h6>Mileage</h6>
            <p>Expected fuel efficiency in daily city and highway use.</p>
          </div>

          <div className="flex h-14 w-full max-w-6xl border-b border-gray-300 justify-between p-3">
            <h6>Ride Comfort</h6>
            <p>How smooth and stable the ride feels on rough roads.</p>
          </div>

          <div className="flex h-14 w-full max-w-6xl border-b border-gray-300 justify-between p-3">
            <h6>Interior Space</h6>
            <p>Spacious seating with ample headroom and legroom.</p>
          </div>

          <div className="flex h-14 w-full max-w-6xl border-b border-gray-300 justify-between p-3">
            <h6>Climate Control</h6>
            <p>Efficient air conditioning with rear cabin airflow.</p>
          </div>

          <div className="flex h-14 w-full max-w-6xl border-b border-gray-300 justify-between p-3">
            <h6>Cargo Capacity</h6>
            <p>Room to carry luggage, equipment, or daily essentials.</p>
          </div>

          <div className="flex h-14 w-full max-w-6xl border-b border-gray-300 justify-between p-3">
            <h6>Safety</h6>
            <p>Designed with essential safety features for confidence.</p>
          </div>

          <div className="flex h-14 w-full max-w-6xl justify-between p-3">
            <h6>Maintenance</h6>
            <p>Affordable servicing with reliable long-term ownership.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlusInfo;
