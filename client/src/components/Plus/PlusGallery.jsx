import { HiMagnifyingGlassPlus } from "react-icons/hi2";

const PlusGallery = ({ galleryImages }) => {
  console.log(galleryImages);

  return (
    <div className="min-h-screen max-w-screen lg:px-12 flex">
      <div className="w-full px-3 lg:p-8 flex flex-row flex-wrap content-start gap-6 h-fit max-w-screen min-h-screen lg:max-w-[70vw] overflow-hidden">
        
        {galleryImages?.map((item, idx) =>
          item.imageUrl?.map((url, urlIdx) => (
            <div
              key={`${idx}-${urlIdx}`}
              className="relative max-h-96 lg:h-60 max-w-[45%] w-full lg:max-w-[30%]"
            >
              <img
                className="w-full h-full rounded-3xl object-cover"
                src={url}
                alt=""
              />
              <h3 className="absolute right-3 font-extrabold top-2">
                <HiMagnifyingGlassPlus className="text-white text-[22px]" />
              </h3>
            </div>
          ))
        )}
      </div>

      <div className="flex mt-20 ml-2 hidden lg:block flex-col">
        <h3 className="text-5xl">Gallery</h3>
        <p className="max-w-60 mt-6 pb-6 text-[18px] text-gray-500">
          Life is beautiful on the road. Explore the world through the eyes of
          #noovoplus.
        </p>
        <button className="bg-black max-w-32 py-3 rounded-3xl text-white">
          View Gallery
        </button>
      </div>
    </div>
  );
};

export default PlusGallery;
