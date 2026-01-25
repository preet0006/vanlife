import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderDetails } from "../../store/slices/buildSlice";

const ShowBase = ({ setImage }) => {
  const [orderData, setOrderData] = useState([]);

  const dispatch = useDispatch();
 const { baseData:data, loading } = useSelector((state) => state.build);


  const handleOrder = (item) => {
    setOrderData((prev) => {
      let updated = [...prev];

      if (item.modelName) {
        updated = updated.filter((e) => !e.modelName);
      }

      if (item.color) {
        updated = updated.filter((e) => !e.color);
      }

      if (item.utilityType) {
        updated = updated.filter(
          (e) => e.utilityType !== item.utilityType
        );
      }

      const newData = [...updated, item];
      dispatch(setOrderDetails(newData));
      return newData;
    });
  };

  const color = data.flatMap((item) => item.color || []);
  const utilities = data.flatMap((item) => item.utilities || []);
  const model = data.flatMap((item) =>
    (item.model || []).flatMap((entry) => entry.models || [])
  );

  const allUtilities = useMemo(() => {
    const map = new Map();
    utilities.forEach((utility) => {
      const type = utility.utilities[0].utilityType;
      if (!map.has(type)) map.set(type, []);
      map.get(type).push(utility);
    });
    return map;
  }, [utilities]);



if (loading) {
  return (
    <div className="px-6 mt-10 animate-pulse">
      
      <div className="h-8 w-48 bg-gray-200 rounded mb-2"></div>
      <div className="h-3 w-64 bg-gray-100 rounded mb-10"></div>

     
      <div className="space-y-4">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-gray-100 rounded-2xl p-4"
          >
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-3 w-20 bg-gray-200 rounded"></div>
            </div>
            <div className="w-24 h-16 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

     
      <div className="mt-10">
        <div className="h-5 w-40 bg-gray-200 rounded mb-4"></div>
        <div className="flex gap-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="w-14 h-14 bg-gray-200 rounded-full"
            ></div>
          ))}
        </div>
      </div>

      
      <div className="mt-10 space-y-4">
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="h-20 bg-gray-100 rounded-2xl"
          ></div>
        ))}
      </div>
    </div>
  );
}


  
  const selectedModel = orderData.find((e) => e.modelName)?.modelName;
  const selectedColor = orderData.find((e) => e.color)?.color;

  const isUtilitySelected = (type, name) =>
    orderData.some(
      (e) => e.utilityType === type && e.utilityName === name
    );

  return (
    <div className="">
       


      <div className="mt-10 w-full h-full">
        <h5 className="text-3xl">
          <span className="underline font-semibold">Build</span> The Base
        </h5>
        <p className="text-gray-400 text-xs pt-2">
          Scroll down to pick your options and finishes.
        </p>
      </div>

    
      <h6 className="text-xl mt-12 font-medium">Choose Your Model</h6>

      <div className="flex flex-col space-y-2 px-6 mt-5">
        {model.map((data, idx) => {
          const selected = selectedModel === data.name;

          return (
            <div
              key={idx}
              onClick={() => {
                setImage(data.imgUrl[1]);
                handleOrder({
                  modelName: data.name,
                  modelPrice: data.range,
                });
              }}
              className={`flex w-full lg:max-w-80 text-center justify-between rounded-2xl p-2 bg-gray-100 cursor-pointer
                ${selected ? "border-2 border-gray-300" : "border border-transparent"}
              `}
            >
              <p className="text-center p-4 text-gray-500">
                <span className="font-semibold">{data.name}</span> <br />
                <span className="text-xs">{data.range}</span>
              </p>
              <img
                className="w-24 sm:w-36 lg:w-34"
                src={data.imgUrl[0]}
                alt=""
              />
            </div>
          );
        })}
      </div>

   
      <div className="mt-6 px-6">
        <h5 className="text-xl">Pick Your Exterior Color</h5>

        <div className="flex flex-wrap gap-4 pl-2 mt-6">
          {color.map((item, index) => {
            const key = item.availableColors[0].key;
            const selected = selectedColor === key;

            const bgClass = {
              gray: "bg-gray-500",
              sandstone: "bg-yellow-200",
              granite: "bg-gray-700",
              silver: "bg-gray-200",
            }[key.toLowerCase()] || "bg-gray-300";

            return (
              <div
                key={index}
                className={`flex w-32 h-16 rounded-2xl
                  ${selected ? "border-2 border-gray-400" : "border border-transparent"}
                `}
              >
                <div
                  onClick={() => {
                    setImage(item.availableColors[0].imgUrl);
                    handleOrder({ color: key });
                  }}
                  className={`flex ml-2 mt-3 w-9 h-9 rounded-4xl cursor-pointer ${bgClass}`}
                >
                  <button className="text-[14px] font-serif ml-12">
                    {key} <span>Included</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

     
      <div className="mt-6 px-6">
        {[...allUtilities.entries()].map(([type, items], index) => (
          <div key={index}>
            <h5 className="text-xl font-medium mt-6">
              Choose Your {type}
            </h5>

            {items.map((utility, idx) => {
              const name = utility.utilities[0].name;
              const selected = isUtilitySelected(type, name);

              return (
                <div
                  key={idx}
                  onClick={() =>
                    handleOrder({
                      utilityName: name,
                      utilityDetails: utility.utilities[0].details,
                      utilityType: type,
                      utilitiyPrice: utility.utilities[0].price,
                    })
                  }
                  className={`flex mt-3 w-full lg:max-w-80 text-center justify-between rounded-2xl p-6 bg-gray-100 cursor-pointer
                    ${selected ? "border-2 border-gray-400" : "border border-transparent"}
                  `}
                >
                  <h6 className="text-gray-500">
                    {name} <br />
                    <span className="text-xs">
                      {utility.utilities[0].details}
                    </span>
                  </h6>
                  <p className="text-xs text-gray-500">
                    {utility.utilities[0].price}
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowBase;
