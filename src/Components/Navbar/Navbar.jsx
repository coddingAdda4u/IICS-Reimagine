import { useEffect, useRef, useState } from "react"
import './Navbar.css'

function Navbar() {

  const links = [
    'Home',
    'About Us',
    'Courses',
    'Payments',
    'Gallery',
    'Franchise',
    'Branches',
    'Contact Us'
  ]

  const [activeLink, setActiveLink] = useState("Home");
  const [headerHidden, setHeaderHidden] = useState(false)
  const [sidebarActive, setSidebarActive] = useState(false);
  const checkBtn = useRef()

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop + 5) {
        setHeaderHidden(true)
      } else if (currentScrollTop < lastScrollTop - 5) {
        setHeaderHidden(false)
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    if (checkBtn.current.checked) {
      setSidebarActive(true)
      document.body.style.overflow = 'hidden';
    } else {
      setSidebarActive(false)
      document.body.style.overflow = 'auto';
    }
  }


  return (
    <header className={`h-25 w-full fixed left-0 bg-transparent header ${headerHidden ? 'hide' : 'bg-background'}`}>
      <nav className="flex justify-between items-center cover padding-auto">
        <img src='iics-logo.webp' className="h-17" alt="Logo" />
        <button onClick={toggleSidebar} className="menu-btn">
          <label className="hamburger">
            <input type="checkbox" ref={checkBtn} />
            <svg viewBox="0 0 32 32">
              <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </button>

        <div className={`flex justify-evenly items-center gap-3 navbar-links ${sidebarActive ? 'active' : ''}`} id="navbar-links">
          {
            links.map(link => {
              return <h4 key={link} className={`nav-links font-light text-text ${activeLink === link ? 'active' : ''}`}
                onClick={function () {
                  setActiveLink(link)
                }}
              >
                {link}</h4>
            })
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar
