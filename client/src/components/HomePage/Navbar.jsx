import { useEffect, useRef, useState } from "react";
import { LuEqual } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import ContactUs from "./ContactUs";
import ShowMenu from "./ShowMenu";
import InfoCard from "./InfoCard";

const Navbar = ({ setActive }) => {
  const [showContact, setShowContact] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const head = useRef(null);
  const modelRef = useRef(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    let ctx;

    (async () => {
      const { gsap } = await import("gsap");

      ctx = gsap.context(() => {
        gsap.from(head.current, {
          y: 10,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    })();

    return () => ctx && ctx.revert();
  }, []);

  useEffect(() => {
    let ctx;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.to(head.current, {
          backgroundColor: "rgba(0,0,0,0.2)",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          backdropFilter: "blur(8px)",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "20%",
            scrub: true,
          },
        });
      });
    })();

    return () => ctx && ctx.revert();
  }, []);

  // 3️⃣ Menu animation (lazy GSAP)
  useEffect(() => {
    if (!modelRef.current) return;

    (async () => {
      const { gsap } = await import("gsap");

      if (showMenu) {
        gsap.set(modelRef.current, { display: "block" });
        gsap.fromTo(
          modelRef.current,
          { y: -800, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
        );
      } else {
        gsap.to(modelRef.current, {
          y: -800,
          opacity: 0,
          duration: 0.7,
          ease: "power2.in",
          onComplete: () =>
            gsap.set(modelRef.current, { display: "none" }),
        });
      }
    })();
  }, [showMenu]);

  return (
    <>
      <div
        ref={head}
        className="fixed top-0 left-0 w-full z-[9999] flex justify-between py-7 px-8 text-white"
      >
        <div className="flex space-x-5 pt-3">
          <LuEqual
            onClick={() => setShowMenu(!showMenu)}
            className="text-3xl cursor-pointer"
          />
          <InfoCard setActive={setActive} />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold">noovo</h2>
          <p className="text-xs uppercase text-gray-200">Travel Vans</p>
        </div>

        <div className="flex space-x-4 items-center">
          <button
            onClick={() => setShowContact(true)}
            className="hidden lg:block border px-5 py-2 rounded-full"
          >
            Contact Us
          </button>

          <button
            onClick={() => navigate("/build")}
            className="bg-white text-black px-5 py-2 rounded-full"
          >
            Build your Van
          </button>
        </div>
      </div>

      {showContact && <ContactUs isOpen={setShowContact} />}

      <div ref={modelRef} className="fixed inset-0 hidden z-[99999]">
        <ShowMenu isOpen={setShowMenu} />
      </div>
    </>
  );
};

export default Navbar;
