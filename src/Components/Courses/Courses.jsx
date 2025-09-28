import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import assets from '../../assets/assets'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Courses.css'

const coursesData = [
  {
    "name": "Web Development",
    "url": assets.webDev
  },
  {
    "name": "Data Science",
    "url": assets.dataScience
  },
  {
    "name": "Graphic Design",
    "url": assets.graphicDesign
  },
  {
    "name": "Digital Marketing",
    "url": assets.digitalMarketing
  },
  {
    "name": "Machine Learning",
    "url": assets.machineLearning
  },
  {
    "name": "Cyber Security",
    "url": assets.cyberSecurity
  },
  {
    "name": "Cloud Computing",
    "url": assets.cloudComputing
  },
  {
    "name": "Artificial Intelligence",
    "url": assets.artificialIntelligence
  },
  {
    "name": "Mobile App Development",
    "url": assets.mobileDevelopment
  },
  {
    "name": "UI / UX Design",
    "url": assets.uiUx
  },
  {
    "name": "Blockchain Development",
    "url": assets.blockChain
  },
  {
    "name": "Game Development",
    "url": assets.gameDevelopment
  },
  {
    "name": "Software Testing",
    "url": assets.softwareTesting
  },
  {
    "name": "DevOps Engineering",
    "url": assets.devOps
  },
  {
    "name": "Big Data Analytics",
    "url": assets.bigData
  },
  {
    "name": "Augmented & Virtual Reality",
    "url": assets.virtualReality
  }
]

function Courses() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.courses-cards', {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.courses-right',
        start: 'top 80%',
      }
    })
  }, []);

  return (
    <section className='min-h-screen w-full bg-white courses-container'>
      <h1 className="heading-1 text-center text-background bg-transparent">
        Our Courses
      </h1>
      <div className="courses-wrapper">
        <div className="courses-right">
          {
            coursesData.map(({ name, url }, idx) => (
              <div className="courses-cards" key={idx}>
                <img src={url} alt="" />
                {name}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}


export default Courses
