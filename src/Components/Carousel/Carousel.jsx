import { useRef, useState, useEffect, useCallback } from 'react'
import './Carousel.css'
import carouselItemsData from './CarouselData/carouselData'
import gsap from 'gsap'


function Carousel() {
  const carouselTop = useRef()
  const carouselBack = useRef()
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const nextAnimation = useCallback((direction = 1) => {
    if (!carouselTop.current || !carouselBack.current) return

    setIsPlaying(false)


    const rows = carouselTop.current.querySelectorAll(".carousel-row")
    const images = carouselBack.current.querySelectorAll('img')
    rows.forEach((row) => {
      const heheList = row.querySelectorAll(".hehe")
      const current = heheList[index]
      const currentImage = images[index]
      const nextIndex = (index + direction + heheList.length) % heheList.length
      const next = heheList[nextIndex]
      const nextImage = images[nextIndex]
      if (current && next) {
        gsap.to(current, {
          top: "-=100%",
          filter: "blur(10px)",
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(current, { top: "100%", filter: "blur(0px)", opacity: 1 })
          },
        })
        gsap.to(currentImage, {
          left: "-=100%",
          duration: 1,
          onComplete: () => {
            gsap.set(currentImage, { left: "100%", })
          },
        })
        gsap.to(next, {
          top: "0%",
          duration: 1,
        })
        gsap.to(nextImage, {
          left: "0%",
          duration: 1,
        })
        setIndex(nextIndex)
      }
    })
    setTimeout(() => setIsPlaying(true), 1200)
  }, [index])

  // Prev Function
  const prevAnimation = useCallback((direction = -1) => {
    if (!carouselTop.current || !carouselBack.current) return

    setIsPlaying(false)

    const rows = carouselTop.current.querySelectorAll(".carousel-row")
    const images = carouselBack.current.querySelectorAll("img")

    rows.forEach((row) => {
      const heheList = row.querySelectorAll(".hehe")
      const current = heheList[index]
      const currentImage = images[index]
      const prevIndex =
        (index + direction + heheList.length) % heheList.length
      const prev = heheList[prevIndex]
      const prevImage = images[prevIndex]

      if (current && prev) {
        gsap.to(current, {
          top: "100%",
          filter: "blur(10px)",
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(current, {
              top: "-100%",
              filter: "blur(0px)",
              opacity: 1,
            })
          },
        })
        gsap.to(currentImage, {
          left: "100%", // slide right instead of left
          duration: 1,
          onComplete: () => {
            gsap.set(currentImage, { left: "-100%" })
          },
        })
        gsap.to(prev, {
          top: "0%",
          duration: 1,
        })
        gsap.to(prevImage, {
          left: "0%",
          duration: 1,
        })

        setIndex(prevIndex)
      }
    })
    setTimeout(() => setIsPlaying(true), 1200)
  }, [index])


  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      nextAnimation(1)
    }, 4000)
    return () => clearInterval(interval)
  }, [nextAnimation, isPlaying])

  const handleNext = () => {
    if(isPlaying) nextAnimation(1)
  }
  const handlePrev = () => {
    if(isPlaying) prevAnimation(-1)
  }

  return (
    <div className="carousel">
      <div className="carousel-back" ref={carouselBack}>
        {carouselItemsData.map(({ url }, idx) => (
          <CarouselImage url={url} key={idx} />
        ))}
      </div>
      <div className="carousel-top" ref={carouselTop}>
        <div className="carousel-description">
          <div className="carousel-row title">
            {carouselItemsData.map(({ title }, idx) => (
              <CarouselTitle title={title} key={idx} />
            ))}
          </div>
          <div className="carousel-row text">
            {carouselItemsData.map(({ text }, idx) => (
              <CarouselText text={text} key={idx} />
            ))}
          </div>
          <div className="carousel-row buttons">
            {carouselItemsData.map((_, idx) => (
              <CarouselButtons key={idx} />
            ))}
          </div>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev}></button>
        <button onClick={handleNext}></button>
      </div>
    </div>
  )
}

export default Carousel

function CarouselTitle({ title }) {
  return <h1 className="carousel-title hehe">{title}</h1>
}
function CarouselText({ text }) {
  return <p className="carousel-text hehe">{text}</p>
}
function CarouselImage({ url }) {
  return <img src={url} alt="Carousel Images" />
}
function CarouselButtons() {
  return (
    <div className="carousel-buttons hehe">
      <button>Enroll Now</button>
      <button>Read More</button>
    </div>
  )
}