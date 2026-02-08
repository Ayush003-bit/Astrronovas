
  import React from "react"
  import { useRef, useState } from "react"
  import AstrologyVid from "../assets/Videos/astrovideo.mp4"
  import VashuShastra from "../assets/Videos/Vashu-Shastra.mp4"
  import { useNavigate } from "react-router-dom"

export function Courses() {

  const videoRefs = useRef([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const navigate = useNavigate();

  const handlePlay = (index)=> {
      if(activeVideo !== null && activeVideo !== index) {
          videoRefs.current[activeVideo]?.pause()
      }

      setActiveVideo(index);
  }

  const courses = [
    {
      id: 1,
      name: "Astrology",
      description:
        "Astrology is an ancient system of knowledge that studies the movement and positions of celestial bodies—like the Sun, Moon, planets, and stars—and how they are believed to influence human life, personality, and events on Earth.",
      video: AstrologyVid
    },
    {
      id: 2,
      name: "Vastu shastra",
      description:
        "Vastu Shastra is an ancient Indian architectural science that focuses on creating harmonious living and working spaces by aligning buildings with the natural forces of the universe.",
      video: VashuShastra
    },
    {
      id: 3,
      name: "Tarot",
      description:
        "Tarot is a divination and self-reflection tool that uses a deck of 78 symbolic cards to gain insight into life situations, emotions, and future possibilities.",
      video: "https://www.youtube.com/watch?v=NUMEROLOGY_VIDEO_LINK"
    },
    {
      id: 4,
      name: "Numerology",
      description:
        "Numerology is the study of numbers and their vibrational energies, helping understand personality traits, life purpose, and destiny through birth dates and names.",
      video: "https://www.youtube.com/watch?v=NUMEROLOGY_VIDEO_LINK"
    },
    {
      id: 5,
      name: "Hoodoo",
      description:
        "Hoodoo is a folk spiritual practice rooted in ancestral wisdom, focusing on protection, healing, manifestation, and practical spiritual solutions using herbs, candles, and rituals.",
      video: "https://www.youtube.com/watch?v=HOODOO_VIDEO_LINK"
    },
    {
      id: 6,
      name: "Reiki",
      description:
        "Reiki is a Japanese energy healing technique that channels universal life energy to reduce stress, promote relaxation, and support physical, emotional, and spiritual healing.",
      video: "https://www.youtube.com/watch?v=REIKI_VIDEO_LINK"
    },
    {
      id: 7,
      name: "Pranic Healing",
      description:
        "Pranic Healing is a no-touch energy healing system that cleanses and energizes the body’s aura and chakras to restore balance and enhance overall well-being.",
      video: "https://www.youtube.com/watch?v=PRANIC_HEALING_VIDEO_LINK"
    }
  ]

  return (
    <>
      <h1 className="text-2xl md:text-5xl font-bold text-center mb-12 bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-stone-700 mt-10">
         Courses
      </h1>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {courses.map((item) => (
          <div
            key={item.id}
            className="group w-full sm:w-85 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <video
                src={item.video}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-300"
                muted
                controls
                ref={(el)=> (videoRefs.current[item.id] = el)}
                onPlay={()=> handlePlay(item.id)}
                onEnded={()=> setActiveVideo(null)}
              ></video>
            </div>

            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                {item.name}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                {item.description}
              </p>
            </div>

            <div className="p-6 pt-0">
              <button onClick={()=> navigate("/course-list")} className="w-full py-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 text-white font-medium tracking-wide hover:opacity-90 active:scale-95 transition-all">
                Explore Courses
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Courses
