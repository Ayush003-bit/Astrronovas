
 import React from "react"
import AstroIntro from "../assets/Images/AstroIntro.jpg"
import Birth from "../assets/Images/BirthChart.jpg"
import VedicAstro from "../assets/Images/VedicAstro.jpg"
import PlanetAstro from "../assets/Images/PlanetCombo.jpg"
import AstroCarrer from "../assets/Images/AstroCarrer.jpg"
import RelationShipAstro from "../assets/Images/RelationAstro.jpg"
import AstroTech from "../assets/Images/PredictiveAstro.jpg"
import Naksh from "../assets/Images/NakshatraLunar.jpg"
import Rem from "../assets/Images/AstrologyRem.jpg"
import ProfAstro from "../assets/Images/ProfessionalAstro.jpg"

export function CourseList() {

  const astrologyCourses = [
    {
      id: 1,
      img: AstroIntro,
      name: "Introduction to Astrology",
      courseStartsDate: "2026-03-01",
      pricing: "₹2,999",
      shortDescription:
        "Learn the fundamentals of astrology, zodiac signs, planets, houses, and basic chart interpretation."
    },
    {
      id: 2,
      img: Birth,
      name: "Birth Chart Reading Mastery",
      courseStartsDate: "2026-03-10",
      pricing: "₹4,999",
      shortDescription:
        "Understand how to read and analyze natal charts to interpret personality traits and life patterns."
    },
    {
      id: 3,
      img: VedicAstro,
      name: "Vedic Astrology Essentials",
      courseStartsDate: "2026-03-15",
      pricing: "₹5,999",
      shortDescription:
        "Explore the principles of Vedic astrology, including Rashis, Nakshatras, and planetary dashas."
    },
    {
      id: 4,
      img: PlanetAstro,
      name: "Advanced Planetary Combinations",
      courseStartsDate: "2026-03-20",
      pricing: "₹6,499",
      shortDescription:
        "Deep dive into planetary yogas, conjunctions, and their impact on career, marriage, and health."
    },
    {
      id: 5,
      img: AstroCarrer,
      name: "Astrology for Career & Finance",
      courseStartsDate: "2026-03-25",
      pricing: "₹4,499",
      shortDescription:
        "Learn how to analyze career growth, business success, and financial stability using astrology."
    },
    {
      id: 6,
      img: RelationShipAstro,
      name: "Relationship & Marriage Astrology",
      courseStartsDate: "2026-04-01",
      pricing: "₹5,499",
      shortDescription:
        "Understand compatibility, marriage timing, and relationship challenges through astrological charts."
    },
    {
      id: 7,
      img: AstroTech,
      name: "Predictive Astrology Techniques",
      courseStartsDate: "2026-04-05",
      pricing: "₹6,999",
      shortDescription:
        "Master prediction methods using transits, dashas, progressions, and planetary periods."
    },
    {
      id: 8,
      img: Naksh,
      name: "Nakshatra & Lunar Astrology",
      courseStartsDate: "2026-04-10",
      pricing: "₹4,999",
      shortDescription:
        "Study the power of Nakshatras and Moon-based astrology for emotional and karmic insights."
    },
    {
      id: 9,
      img: Rem,
      name: "Astrology Remedies & Healing",
      courseStartsDate: "2026-04-15",
      pricing: "₹3,999",
      shortDescription:
        "Learn astrological remedies including gemstones, mantras, yantras, and spiritual practices."
    },
    {
      id: 10,
      img: ProfAstro,
      name: "Professional Astrology Certification",
      courseStartsDate: "2026-04-20",
      pricing: "₹9,999",
      shortDescription:
        "A complete certification course designed to help you practice astrology professionally."
    }
  ]

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-center bg-linear-to-r text-fuchsia-500  mt-10 mb-10">
        Astrology Courses
      </h1>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {astrologyCourses.map((item) => (
          <div
            key={item.id}
            className="group w-full sm:w-[320px] lg:w-[340px] h-[520px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100 flex flex-col"
          >
            <div className="overflow-hidden h-48">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6 space-y-2">
              <h1 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors line-clamp-2">
                {item.name}
              </h1>

              <p className="text-sm text-gray-500">
                Starts From: <span className="font-medium text-gray-700">{item.courseStartsDate}</span>
              </p>

              <p className="text-sm text-gray-500">
                Pricing: <span className="font-semibold text-purple-600">{item.pricing}</span>
              </p>
            </div>

            <div className="px-6">
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                Overview:- {item.shortDescription}
              </p>
            </div>

            <div className="px-6 mt-auto pb-6">
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium tracking-wide hover:opacity-90 active:scale-95 transition-all">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CourseList
