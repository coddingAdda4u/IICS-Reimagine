import Achivements from "../Achivements/Achivements"
import Branches from "../Branches/Branches"
import Carousel from "../Carousel/Carousel"
import Courses from "../Courses/Courses"
import Description from "../Desctription/Description"
import Events from "../Events/Events"
import Navbar from "../Navbar/Navbar"
import Testimonials from "../Testimonials/Testimonials"


function Body() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Courses />
      <Description />
      <Branches />
      <Achivements />
      <Events />
      <Testimonials />
    </>
  )
}

export default Body
