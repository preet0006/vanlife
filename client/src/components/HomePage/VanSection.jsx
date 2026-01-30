import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gethome } from "../../store/slices/homepageSlice";
import { useNavigate } from "react-router-dom";

const VanSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const van = useSelector((state) => state.home.vanCard);

 
  useEffect(() => {
    if (!van || van.length === 0) {
      dispatch(gethome());
    }
  }, [dispatch, van]);

  
  useEffect(() => {
    if (!van || van.length === 0) return;

    let ctx;

    const loadGsap = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".van-card");

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                once: true, 
              },
            }
          );
        });
      }, containerRef);
    };

    loadGsap();

    return () => {
      if (ctx) ctx.revert(); 
    };
  }, [van]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-screen justify-center sm:mt-12 items-center"
    >
      <div className="gap-8 mt-12 flex max-w-screen w-full flex-wrap items-stretch justify-center">
        {van.map((elem, index) => (
          <div
            key={index}
            className="van-card relative min-h-96 sm:min-h-[580px] w-[90%] md:w-[40%] bg-center bg-cover rounded-4xl opacity-0"
            style={{ backgroundImage: `url(${elem.images[0]})` }}
          >
            <div className="flex flex-col justify-center items-center pt-4 sm:pt-10">
              <h3 className="text-2xl font-semibold">{elem.name}</h3>

              <p className="text-center text-gray-500 w-full max-w-40 text-xs sm:text-[14px]">
                {elem.description}
              </p>

              <div className="absolute bottom-5 sm:bottom-12 space-x-2">
                <button
                  onClick={() => navigate("/build")}
                  className="bg-black text-xs sm:text-[16px] text-white px-6 py-4 rounded-4xl font-semibold"
                >
                  Explore More
                </button>

                <button
                  onClick={() => navigate("/inventory")}
                  className="bg-white text-xs sm:text-[16px] text-black px-6 py-4 rounded-4xl"
                >
                  See Inventory
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VanSection;
