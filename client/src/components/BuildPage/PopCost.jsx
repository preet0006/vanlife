import React from "react";

const PopCost = ({ setShow }) => {
  return (
    <>
      
      <div
        className="fixed inset-0  bg-opacity-40 z-40"
        onClick={()=>setShow(false)} 
      ></div>

   
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      bg-gradient-to-br from-yellow-100 via-white to-yellow-50
                      shadow-2xl rounded-2xl p-8 w-96 max-w-sm text-center z-50
                      transition-all duration-300">
        <h3 className="text-2xl font-extrabold   mb-4">
          Estimate Alert!
        </h3>
        <p className="text-gray-800 mb-6 text-lg">
          Your estimate cost is less than <span className="font-bold">$23,000</span>.
        </p>
        <button
          className="  font-semibold px-6 py-3 rounded-full 
                     hover:bg-red-600 transition-all duration-200 shadow-lg"
          onClick={()=>setShow(false)}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default PopCost;
