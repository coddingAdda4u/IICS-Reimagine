import { useEffect, useRef, useState } from 'react';
import './Courses.css';
import gsap from 'gsap';

function Courses() {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const elem = useRef();
  const timeoutRef = useRef(null);

  useEffect(() => {
    gsap.to(elem.current, {
      x: positionX,
      y: positionY,
      duration: 2,
      ease: 'ease.out',
    });

    gsap.to(elem.current, {
      scale: isMoving ? 1.5 : .9,
      duration: 1,
      ease: 'power1.out',
    });
  }, [positionX, positionY, isMoving]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPositionX(x);
    setPositionY(y);
    setIsMoving(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsMoving(false);
    }, 100);
  };

  return (
    <section className="cover" onMouseMove={(e) => handleMouseMove(e)}>
      <h2 className="heading-1 text-center text-primary">
        Courses
      </h2>
      <div className='relative overflow-hidden'>
        <div id="cursor" className='hidden md:block' ref={elem}></div>
        <div className="courses-wrapper pt-4 pb-12">
          {
            Array.from({ length: 10 }).map((_, idx) => {
              return <div className="cards" key={idx}></div>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Courses;