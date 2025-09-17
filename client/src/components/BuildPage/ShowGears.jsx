import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeInitial, setInitial } from "../../store/slices/buildSlice";
import { useMemo } from "react";

const SHowGears = ({setImage}) => {
  const dispatch = useDispatch()

  const [isSelected,setIsSelected]=useState([]);
  const [itemSelected,setItemSelected] = useState(0)

  console.log(isSelected);
  console.log(itemSelected)

  
  


  const data = useSelector((state) => state.build.gearsData || []);


  const imageData = useSelector((state)=>state.build.modifyimages);

  console.log(data)
  console.log(imageData)

  const modifyimages = useMemo(() => {
  const temp = {};
  imageData?.map(item => {
    item?.modifyImg?.map(img => {
      temp[img.key] = {
        img: img.imgUrl,
        _id: img._id  
      };
    });
  });
  return temp;
}, [imageData]);

console.log(modifyimages)
 

const handleCardClick = (imgData, imgName) => {
  
  try {
    const findExisting = isSelected.includes(imgName);

    if (!findExisting) {
       setIsSelected(prev => [...prev,{ name:imgName,data:imgData}])
      setItemSelected(prev => prev + 1); 
    } else {
      setIsSelected(prev => prev.filter(name => name !== imgName));
      setItemSelected(prev => prev - 1);  
    }

    
    
  } catch (error) {
    console.log(error);
  }
};

const handleImage=(name1,name2)=>{
  console.log(name1,name2)
  if(name1==="Combo Rear  Ladder & Tire Carrier" || name2==="Rear Box Storage"){
    setImage()
  }
  

}

  

useEffect(() => {
  if (itemSelected === 1) {
    console.log("Only one item selected:", isSelected);
     const { data } = isSelected[0];
     console.log(data)
     setImage(data)
    
  } else if (itemSelected === 2) {
    console.log("Two items selected:", isSelected);
    const getNames = isSelected.map(item=>item.name)
    console.log(getNames)
    handleImage(getNames[0],getNames[1])

  } else if (itemSelected > 2) {
    console.log("More than two selected:", isSelected);
  }
}, [itemSelected, isSelected]);


 
  


 




  

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h4 className="text-3xl mt-4">
          <span className="font-bold"> Add </span>some Gears
        </h4>
        <p className="text-gray-400 text-xs mt-1 ml-1">Explore Optional Gears</p>
        </div>

         <div className="mt-12">
          <h5 className="font-semibold text-xl">Choose Your OutSide Gears</h5>

           {data.map((product, index) =>
           product.gears?.map((item) => {
            
       
            return (
              <div onClick={()=>{handleCardClick(item.images,item.name)}} key={index} className="mt-4 pl-3  flex flex-col">
                <div

                 className={`flex border border-gray-300 rounded-2xl w-full max-w-72 flex-col cursor-pointer transition-all
                    `}>
                  <img
                    className="w-full h-44 object-cover rounded-t-2xl"
                    src={item.images[0]} alt=""/>

                  <div className="flex mt-3 justify-between px-2">
                    <h5 className="text-gray-600 max-w-56 text-[16px]">{item.name}</h5>
                    <p className="ml-4 font-medium text-xs">${item.price}</p>
                  </div>

                  <div className="flex flex-col pl-2 text-[13px] text-gray-400 pt-2 pb-4">
                    <p>{item.features}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SHowGears;
