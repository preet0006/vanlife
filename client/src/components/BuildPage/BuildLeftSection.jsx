import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"


const BuildLeftSection = ({image}) => {

  const [imageData,setImageData]=useState('');



 

  useEffect(() => {
    if (!image) return;
    setImageData(image); 
  }, [image]);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full h-full">
        <img
          className="w-full object-cover"
          src={image || "/build.webp"}
          alt=""
        />
      </div>
    </div>
  );
};

export default BuildLeftSection