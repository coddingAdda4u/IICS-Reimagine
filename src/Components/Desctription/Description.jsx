import { useEffect, useRef, useState } from 'react';
import './Desctiption.css'
import Typed from 'typed.js';
import { PiQuotesFill } from "react-icons/pi";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

function Description() {

  gsap.registerPlugin(useGSAP)
  const cursor = useRef()
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [isMoving, setIsMoving] = useState(false);


  useEffect(() => {
    if (!cursor.current) {
      return;
    }
    gsap.to(cursor.current, {
      x: positionX,
      y: positionY,
      scale: isMoving ? 1 : 0,
    })
  }, [positionX, positionY, isMoving])

  function handleCursor(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPositionX(x)
    setPositionY(y)
    setIsMoving(true)
  }

  useGSAP(() => {
    gsap.fromTo('.desc-container h2', {
      opacity: 0,
      y: 60,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.desc-container',
        start: 'top 40%',
        end: 'bottom 60%',
        toggleActions: 'play none none none',
      }
    })
  }, [])


  return (
    <div className="desc-container px-5 sm:px-8 md:px-30 bg-text cursor-default">
      <PiQuotesFill className='quotes-icons' />
      <div className="py-6 px-4 relative cursor-none" onMouseMove={(e) => handleCursor(e)} onMouseLeave={() => setIsMoving(false)}>
        <div className='desc-cursor' ref={cursor}></div>
        <h2 className="text-[20px] lg:px-35 sm:text-3xl md:text-4xl text-background font-semibold" style={{ fontFamily: 'Montserrat' }}>
          IICS empowers students with industryrelevant IT and computer skills through certified courses in <br />
          <MyComponent /> .
          <br />
          With expert faculty, practical training, and placement support, we prepare future-ready professionals to thrive in today s digital world. Learn, grow, and succeed with IICS.
        </h2>
      </div>
      <PiQuotesFill className='quotes-icons' />
    </div>
  )
}

export default Description

function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Software Engineering', 'Hardware Engineering', 'Multimedia and Animation', 'Digital Marketing', 'Ethical Hacking', 'and more'],
      typeSpeed: 90,
      backSpeed: 60,
      loop: true,
      backDelay: 1
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span ref={el} className='text-bg-secondary'></span>
  )

}
