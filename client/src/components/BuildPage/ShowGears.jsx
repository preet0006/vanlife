import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const SHowGears = ({ setImage, gearsData, setGearData }) => {
  const dispatch = useDispatch();

  const [isSelected, setIsSelected] = useState([]);
  const [itemSelected, setItemSelected] = useState(0);
  const [loading, setLoading] = useState(true);

  const data = useSelector((state) => state.build.gearsData || []);
  const imageData = useSelector((state) => state.build.modifyimages);

  /* -------------------- STOP LOADING WHEN DATA ARRIVES -------------------- */
  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  /* -------------------- IMAGE MAP -------------------- */
  const modifyimages = useMemo(() => {
    const result = {};
    imageData?.forEach((item) => {
      item?.modifyImg?.forEach((img) => {
        result[img.key] = { img: img.imgUrl, _id: img._id };
      });
    });
    return result;
  }, [imageData]);

  /* -------------------- CARD CLICK -------------------- */
  const handleCardClick = (imgData, imgName, price) => {
    try {
      const exists = isSelected.some((item) => item.name === imgName);

      if (!exists) {
        setIsSelected((prev) => [...prev, { name: imgName, data: imgData }]);
        setItemSelected((prev) => prev + 1);
        setGearData((prev) => [...prev, { name: imgName, total: price }]);
      } else {
        setIsSelected((prev) =>
          prev.filter((item) => item.name !== imgName)
        );
        setItemSelected((prev) => prev - 1);
        setGearData((prev) =>
          prev.filter((item) => item.name !== imgName)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* -------------------- IMAGE LOGIC -------------------- */
  const handleImage = (name1, name2) => {
    const n1 = String(name1).trim();
    const n2 = String(name2).trim();

    if (
      (n1 === "Combo Rear  Ladder & Tire Carrier" &&
        n2 === "Rear Box Storage") ||
      (n1 === "Rear Box Storage" &&
        n2 === "Combo Rear  Ladder & Tire Carrier")
    ) {
      setImage(modifyimages.LadderStorage?.img);
    } else if (
      (n1 === "Swing away Bike Rack" &&
        n2 === "Combo Rear  Ladder & Tire Carrier") ||
      (n1 === "Combo Rear  Ladder & Tire Carrier" &&
        n2 === "Swing away Bike Rack")
    ) {
      setImage(modifyimages.laddercycle?.img);
    } else if (
      (n1 === "Swing away Bike Rack" && n2 === "Rear Box Storage") ||
      (n1 === "Rear Box Storage" && n2 === "Swing away Bike Rack")
    ) {
      setImage(modifyimages.StorageCycle?.img);
    }
  };

  /* -------------------- IMAGE EFFECT -------------------- */
  useEffect(() => {
    if (!modifyimages) return;

    if (itemSelected === 0) {
      setImage(modifyimages.simpleVan?.img);
    } else if (itemSelected === 1) {
      setImage(isSelected[0]?.data);
    } else if (itemSelected === 2) {
      const names = isSelected.map((item) => item.name);
      handleImage(names[0], names[1]);
    } else if (itemSelected > 2) {
      setImage(
        "https://res.cloudinary.com/dsnk6bayj/image/upload/v1742500631/noovo/buildPage/filqox7ugsfzer31zdkr.webp"
      );
    }
  }, [itemSelected, isSelected, modifyimages]);

  /* -------------------- UI -------------------- */
  return (
    <div className="flex flex-col">
      <div>
        <h4 className="text-3xl mt-4">
          <span className="font-bold">Add </span>some Gears
        </h4>
        <p className="text-gray-400 text-xs mt-1 ml-1">
          Explore Optional Gears
        </p>
      </div>

      <div className="mt-12">
        <h5 className="font-semibold text-xl">
          Choose Your Outside Gears
        </h5>

        {/* -------------------- LOADING -------------------- */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-full max-w-72 h-64 rounded-2xl bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        ) : (
          data.map((product) =>
            product.gears?.map((item, idx) => {
              const selected = isSelected.some(
                (i) => i.name === item.name
              );

              return (
                <div
                  key={idx}
                  onClick={() =>
                    handleCardClick(item.images, item.name, item.price)
                  }
                  className="mt-4 pl-3 flex flex-col"
                >
                  <div
                    className={`border rounded-2xl w-full max-w-72 cursor-pointer transition-all ${
                      selected
                        ? "border-gray-500"
                        : "border-gray-300"
                    }`}
                  >
                    <img
                      src={item.images[0]}
                      alt=""
                      className="w-full h-44 object-cover rounded-t-2xl"
                    />

                    <div className="flex mt-3 justify-between px-2">
                      <h5 className="text-gray-600 max-w-56 text-[16px]">
                        {item.name}
                      </h5>
                      <p className="font-medium text-xs">
                        ${item.price}
                      </p>
                    </div>

                    <div className="pl-2 text-[13px] text-gray-400 pt-2 pb-4">
                      <p>{item.features}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )
        )}
      </div>
    </div>
  );
};

export default SHowGears;
