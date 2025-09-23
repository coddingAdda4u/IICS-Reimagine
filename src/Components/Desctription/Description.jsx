import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { PiQuotesFill } from "react-icons/pi";

function Description() {
  return (
    <div className="h-[500px] w-full flex items-center px-5 sm:px-8 md:px-30 bg-text  relative">
      <PiQuotesFill className='absolute text-8xl top-10 left-9 rotate-180 text-background' />
      <h2 className="text-xl sm:text-2xl md:text-3xl text-background font-semibold" style={{ fontFamily: 'Montserrat' }}>
        IICS empowers students with industryrelevant IT and computer skills through certified courses in <MyComponent /> .
        <br />
        With expert faculty, practical training, and placement support, we prepare future-ready professionals to thrive in today s digital world. Learn, grow, and succeed with IICS.
      </h2>
      <PiQuotesFill className='absolute text-8xl bottom-10 right-9 text-background' />
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
