import Branches from "../Branches/Branches"
import Carousel from "../Carousel/Carousel"
import Courses from "../Courses/Courses"
import Description from "../Desctription/Description"
import Events from "../Events/Events"
import Navbar from "../Navbar/Navbar"
import Testimonials from "../Testimonials/Testimonials"
import Faq from "../FAQ/Faq"
import Question from "../Forms/Questions"
import Footer from "../Footer/Footer"

function Body() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Courses />
      <Branches />
      <Description />
      <Events />
      <Testimonials />
      <Faq />
      <Question />
      <Footer />
    </>
  )
}

export default Body
