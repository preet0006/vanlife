// HomePage.jsx
import Navbar from "../components/HomePage/Navbar"
import Hero from "../components/HomePage/Hero"
import PlusSection from "../components/Plus/PlusSection"
import PlusGallery from "../components/Plus/PlusGallery"
import PlusWhy from "../components/Plus/PlusWhy"
import PlusVideo from "../components/Plus/PlusVideo"
import VanCard from "../components/HomePage/VanCard"
import PlusVanShowCase from "../components/Plus/PlusVanShowCase"
import PlusInfo from "../components/Plus/PlusInfo"
import FootCard from "../components/HomePage/FootCard"
import Questions from "../components/HomePage/Questions"
import Footer from "../components/HomePage/Footer"
import { useEffect } from "react"
import { getPlus } from "../store/slices/homepageSlice"
import { useDispatch, useSelector } from "react-redux"
import { Element } from "react-scroll"

const HomePage = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.home.plus)

  const {
    heroImages = [],
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

      {/* Hero Section */}
      <div className="relative bg-[url('/plus.webp')] bg-no-repeat bg-cover bg-center max-w-screen w-full h-[70dvh] sm:w-screen sm:h-screen">
        <section className="text-black">
          <Navbar />
          <div className="absolute bottom-14 sm:pl-12">
            <Hero type="pop" />
          </div>
        </section>
      </div>

      {/* Plus Sections */}
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

    </div>
  )
}

export default HomePage
