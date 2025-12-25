import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const SHowGears = ({ setImage, gearsData, setGearData }) => {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState([]);
  const [itemSelected, setItemSelected] = useState(0);

  const data = useSelector((state) => state.build.gearsData || []);
  const imageData = useSelector((state) => state.build.modifyimages);

  const modifyimages = useMemo(() => {
    const data = {};
    imageData?.map((item) => {
      item?.modifyImg?.map((img) => {
        data[img.key] = { img: img.imgUrl, _id: img._id };
      });
    });
    return data;
  }, [imageData]);

  const handleCardClick = (imgData, imgName, price) => {
    try {
      const findExisting = isSelected.some((item) => item.name === imgName);

      if (!findExisting) {
        const newItem = { name: imgName, total: price };
        setIsSelected((prev) => [...prev, { name: imgName, data: imgData }]);
        setItemSelected((prev) => prev + 1);
        setGearData((prev) => [...prev, newItem]);
      } else {
        setIsSelected((prev) => prev.filter((item) => item.name !== imgName));
        setItemSelected((prev) => prev - 1);
        setGearData((prev) => prev.filter((item) => item.name !== imgName));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImage = (name1, name2) => {
    const n1 = String(name1).trim();
    const n2 = String(name2).trim();

    if (
      (n1 === "Combo Rear  Ladder & Tire Carrier" && n2 === "Rear Box Storage") ||
      (n1 === "Rear Box Storage" && n2 === "Combo Rear  Ladder & Tire Carrier")
    ) {
      const data = modifyimages.LadderStorage?.img;
      setImage(data);
    } else if (
      (n1 === "Swing away Bike Rack" && n2 === "Combo Rear  Ladder & Tire Carrier") ||
      (n1 === "Combo Rear  Ladder & Tire Carrier" && n2 === "Swing away Bike Rack")
    ) {
      const data = modifyimages.laddercycle?.img;
      setImage(data);
    } else if (
      (n1 === "Swing away Bike Rack" && n2 === "Rear Box Storage") ||
      (n1 === "Rear Box Storage" && n2 === "Swing away Bike Rack")
    ) {
      const data = modifyimages.StorageCycle?.img;
      setImage(data);
    }
  };

  useEffect(() => {
    if (itemSelected === 0) {
      const img = modifyimages.simpleVan.img;
      setImage(img);
    } else if (itemSelected === 1) {
      const { data } = isSelected[0];
      setImage(data);
    } else if (itemSelected === 2) {
      const getNames = isSelected.map((item) => item.name);
      handleImage(getNames[0], getNames[1]);
    } else if (itemSelected > 2) {
      const img =
        "https://res.cloudinary.com/dsnk6bayj/image/upload/v1742500631/noovo/buildPage/filqox7ugsfzer31zdkr.webp";
      setImage(img);
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
        <h5 className="font-semibold text-xl">Choose Your Outside Gears</h5>

        {data.map((product, index) =>
          product.gears?.map((item, idx) => {
            const selected = isSelected.some((i) => i.name === item.name);

            return (
              <div
                onClick={() => handleCardClick(item.images, item.name, item.price)}
                key={idx}
                className={`mt-4 pl-3 sm:items-center md:items-start flex flex-col`}
              >
                <div
                  className={`flex border rounded-2xl w-full max-w-72 flex-col cursor-pointer transition-all ${
                    selected ? "border-gray-500" : "border-gray-300"
                  }`}
                >
                  <img
                    className="w-full h-44 object-cover rounded-t-2xl"
                    src={item.images[0]}
                    alt=""
                  />

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
