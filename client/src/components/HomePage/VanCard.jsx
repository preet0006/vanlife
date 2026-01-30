import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const VanCard = ({ type, plusData }) => {
  const [card, setCards] = useState([]);
  const cardsData = useSelector((state) => state.home.cards);

  const cardRef = useRef([]);
  const textRef = useRef([]);
  const gsapRef = useRef(null);

  useEffect(() => {
    let data = [];

    if (type === "main") {
      data = cardsData.filter((item) => item.cardtype === "main");
    } else if (type === "reviews") {
      data = cardsData.filter((item) => item.cardtype === "reviews");
    } else if (type === "plus") {
      data = plusData || [];
    }

    setCards(data);
  }, [type, cardsData, plusData]);

 
  useEffect(() => {
    let cleanups = [];

    (async () => {
      const { gsap } = await import("gsap");
      gsapRef.current = gsap;

      cardRef.current.forEach((cardEl, index) => {
        const textEl = textRef.current[index];
        if (!cardEl) return;

        gsap.set(cardEl, { opacity: 0 });

        const hoverIn = () => {
          gsap.to(cardEl, {
            y: -20,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          });

          if (textEl) {
            gsap.to(textEl, {
              y: -30,
              duration: 0.6,
              ease: "power2.out",
            });
          }
        };

        const hoverOut = () => {
          gsap.to(cardEl, {
            y: 0,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          });

          if (textEl) {
            gsap.to(textEl, {
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            });
          }
        };

        cardEl.addEventListener("mouseenter", hoverIn);
        cardEl.addEventListener("mouseleave", hoverOut);

        cleanups.push(() => {
          cardEl.removeEventListener("mouseenter", hoverIn);
          cardEl.removeEventListener("mouseleave", hoverOut);
        });
      });
    })();

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [card]);

  return (
    <div className="flex flex-nowrap overflow-x-auto scrollbar-hide">
      {card.map((elem, index) => (
        <div key={index} className="flex text-white gap-6 sm:mt-10 px-4">
          <div className="relative mb-12 w-72 h-[500px] lg:w-96">
            <img
              src={elem.images[0]}
              className="h-80 w-80 lg:h-full lg:w-full object-cover lg:rounded-4xl"
              alt=""
            />

            <div
              ref={(el) => (textRef.current[index] = el)}
              className="hidden lg:block absolute left-6 bottom-8"
            >
              <h3 className="text-3xl font-medium">{elem.name}</h3>
            </div>

            <div
              ref={(el) => (cardRef.current[index] = el)}
              className="absolute bottom-0 w-full bg-white text-black rounded-2xl px-10 py-12"
            >
              <h3 className="text-3xl font-medium">{elem.name}</h3>
              <p className="text-sm text-gray-500">{elem.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VanCard;
