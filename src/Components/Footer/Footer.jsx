import './Footer.css'
import { FaFacebook, FaInstagram, FaSquareXTwitter, FaYoutube, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="w-full padding-auto py-10 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        <div className="flex flex-col sm:flex-row gap-8 md:gap-1 flex-1">
          {/* Column 1 */}
          <ul className="mb-6 sm:mb-0 flex-1 min-w-[150px]">
            <li>
              <h3 className="footer-heading text-lg font-bold mb-3 text-white">Advance Courses</h3>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white block py-1 transition">NIELIT Training</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white block py-1 transition">Power BI</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white block py-1 transition">Python Training</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white block py-1 transition">Magento Training</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white block py-1 transition">SQL Server Certification</a>
            </li>
          </ul>
          {/* Column 2 */}
          <ul className="mb-6 sm:mb-0 flex-1 min-w-[150px]">
            <li>
              <h3 className="footer-heading text-lg font-bold mb-3 text-white">Professional Courses</h3>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white block py-1 transition">Web Development</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white block py-1 transition">Digital Marketing</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white block py-1 transition">Graphic Design</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white block py-1 transition">Tally ERP</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white block py-1 transition">E-Accounting</a>
            </li>
          </ul>
          {/* Column 3 */}
          <ul className="flex-1 min-w-[150px]">
            <li>
              <h3 className="footer-heading text-lg font-regular mb-3 text-white">Contact Details</h3>
            </li>
            <li>
              <address className="text-gray-300 hover:text-white" >
                E-360, Second Floor, Nirman Vihar,
                Main Vikas Marg, Near Metro Station
                Gate No.-03 Delhi-110092
              </address>
            </li>
            <li>
              <a href="mailto:iicscomputereducation@gmail.com" className="text-gray-300 hover:text-white ">iicscomputereducation@gmail.com</a>
            </li>
            <li>
              <a href="tel:+91-9540299944" className="text-gray-300 hover:text-white ">+91-9540299944</a>
            </li>
          </ul>
        </div>
        <div className="flex items-end flex-col md:w-1/4 w-full">
          <img
            src="iics-logo.webp"
            alt="IICS Logo"
            className="h-16 w-auto object-contain"
            style={{ maxWidth: 180 }}
          />


          <div className='flex justify-center gap-5 mt-8'>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src="google-play-badge.png"
                alt="Get it on Google Play"
                className="h-11 w-auto rounded-xl"
              />
            </a>
            <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCqyo0e69S4EHt2hGvCJOf7ksxrkwAIYQI22SDsk2DDBlnmKjk6DRokLIiL9zCQV9WrI&usqp=CAU"
                alt="Download on the App Store"
                className="h-11 w-auto rounded-xl"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col gap-2 mb-4 padding-auto">
        <h3 className='text-2xl font-semibold md:text-3xl'>Follow us</h3>
        <div className='flex gap-3'>
          <a href="#">
            <FaFacebook className='text-2xl text-background hover:text-white' />
          </a>
          <a href="#">
            <FaInstagram className='text-2xl text-background hover:text-white' />
          </a>
          <a href="#">
            <FaSquareXTwitter className='text-2xl text-background hover:text-white' />
          </a>
          <a href="#">
            <FaYoutube className='text-2xl text-background hover:text-white' />
          </a>
          <a href="#">
            <FaLinkedin className='text-2xl text-background hover:text-white' />
          </a>
        </div>
      </div>

      <h6 className="text-[14px] py-2 font-normal text-center bg-text">
        Copyright © 2018 IICS. All right reserved Design by IICS India
      </h6>
    </footer>
  )
}

export default Footer