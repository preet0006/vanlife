import Navbar from "../components/HomePage/Navbar"
import Hero from "../components/HomePage/Hero"

import { lazy, Suspense, useEffect } from "react"
import { getPlus } from "../store/slices/homepageSlice"
import { useDispatch, useSelector } from "react-redux"
import { Element } from "react-scroll"

// 🔹 Lazy imports (below the fold)
const PlusSection = lazy(() => import("../components/Plus/PlusSection"))
const PlusGallery = lazy(() => import("../components/Plus/PlusGallery"))
const PlusWhy = lazy(() => import("../components/Plus/PlusWhy"))
const PlusVideo = lazy(() => import("../components/Plus/PlusVideo"))
const VanCard = lazy(() => import("../components/HomePage/VanCard"))
const PlusVanShowCase = lazy(() => import("../components/Plus/PlusVanShowCase"))
const PlusInfo = lazy(() => import("../components/Plus/PlusInfo"))
const FootCard = lazy(() => import("../components/HomePage/FootCard"))
const Questions = lazy(() => import("../components/HomePage/Questions"))
const Footer = lazy(() => import("../components/HomePage/Footer"))

const HomePage = () => {
  const dispatch = useDispatch()
  const { plus: data } = useSelector((state) => state.home)

  const {
    images = [],
    plusGearCards = [],
    whyNoovoCards = [],
  } = data || {}

  const gallerydata = images.filter((e) => e.section === "gallery")

  useEffect(() => {
    if (!data || !data.plusGearCards || data.plusGearCards.length === 0) {
      dispatch(getPlus())
    }
  }, [dispatch, data])

  return (
    <div className="flex flex-col overflow-x-hidden m-auto max-w-screen w-full scrollbar-hide">

     
      <div className="relative bg-[url('/plus.webp')] bg-no-repeat bg-cover bg-center max-w-screen w-full h-[70dvh] sm:w-screen sm:h-screen">
        <section className="text-black">
          <Navbar />
          <div className="absolute bottom-14 sm:pl-12">
            <Hero type="pop" />
          </div>
        </section>
      </div>

     
      <Suspense fallback={<div className="h-screen" />}>
        
        <Element name="plusSection">
          <PlusSection />
        </Element>

        <Element name="plusGallery">
          <PlusGallery galleryImages={gallerydata} />
        </Element>

        <Element name="plusWhy">
          <PlusWhy whyImages={whyNoovoCards} />
        </Element>

        <Element name="plusVideo">
          <PlusVideo />
        </Element>

        <Element name="plusVanShowCase">
          <PlusVanShowCase />
        </Element>

        <div className="bg-[#131211] min-h-screen min-w-screen text-white">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-center space-x-6 lg:space-x-60 py-20">
            <h3 className="hidden sm:block text-xl sm:text-2xl lg:text-6xl font-normal">
              Geared Up for <br /> Adventure
            </h3>
            <h3 className="sm:hidden text-xl sm:text-2xl lg:text-6xl font-normal">
              Geared Up for Adventure
            </h3>
            <p className="text-gray-300 max-w-80 lg:mt-2 text-xs sm:text-[20px] text-center">
              Bike, hike, surf, yoga... customize your Noovo for your type of fun. Choose which racks, tires, and storage will aid your adventure.
            </p>
          </div>

          <VanCard type="plus" plusData={plusGearCards} />
        </div>

        <Element name="plusInfo">
          <PlusInfo />
        </Element>

        <Element name="footCard">
          <FootCard />
        </Element>

        <Element name="questions">
          <Questions />
        </Element>

        <Element name="footer">
          <Footer />
        </Element>

      </Suspense>
    </div>
  )
}

export default HomePage
