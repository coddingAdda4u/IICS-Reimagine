import './Testimonials.css'

const testimonialsData = [
  {
    name: "Aarav Sharma",
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    courses: "MDCE",
    reviewText:
      "The LMS platform is very user-friendly. The Full Stack course gave me confidence to build my own projects.",
  },
  {
    name: "Priya Mehta",
    profile: "https://randomuser.me/api/portraits/women/45.jpg",
    courses: "DCAP",
    reviewText:
      "The mentors explain concepts really well. I especially liked the projects in the Data Science course.",
  },
  {
    name: "Rohan Verma",
    profile: "https://randomuser.me/api/portraits/men/18.jpg",
    courses: "Disgner",
    reviewText:
      "The design courses are creative and practical. I was able to use Figma confidently after finishing the course.",
  },
  {
    name: "Simran Kaur",
    profile: "https://randomuser.me/api/portraits/women/67.jpg",
    courses: "kfk,csdf",
    reviewText:
      "Very detailed explanations and real-world examples. The AWS labs helped me a lot in my job.",
  },
  {
    name: "Aditya Rao",
    profile: "https://randomuser.me/api/portraits/men/76.jpg",
    courses: "Cybersecurity Basics",
    reviewText:
      "Great learning experience. The cybersecurity module was especially useful with hands-on labs.",
  },
  {
    name: "Aarav Sharma",
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    courses: "MDCE",
    reviewText:
      "The LMS platform is very user-friendly. The Full Stack course gave me confidence to build my own projects.",
  },
  {
    name: "Priya Mehta",
    profile: "https://randomuser.me/api/portraits/women/45.jpg",
    courses: "DCAP",
    reviewText:
      "The mentors explain concepts really well. I especially liked the projects in the Data Science course.",
  },
  {
    name: "Rohan Verma",
    profile: "https://randomuser.me/api/portraits/men/18.jpg",
    courses: "Disgner",
    reviewText:
      "The design courses are creative and practical. I was able to use Figma confidently after finishing the course.",
  },
  {
    name: "Simran Kaur",
    profile: "https://randomuser.me/api/portraits/women/67.jpg",
    courses: "kfk,csdf",
    reviewText:
      "Very detailed explanations and real-world examples. The AWS labs helped me a lot in my job.",
  },
  {
    name: "Aditya Rao",
    profile: "https://randomuser.me/api/portraits/men/76.jpg",
    courses: "Cybersecurity Basics",
    reviewText:
      "Great learning experience. The cybersecurity module was especially useful with hands-on labs.",
  },
];

const Testimonials = () => {
  return (
    <div className="cover py-4">
      <h2 className='heading-1 text-center text-bg-secondary'>Testimonials</h2>
      <ul className='testimonials-row padding-auto'>
        {
          testimonialsData.map((testimonial, idx) => {
            return (
              <li
                className="testimonials-cards"
                key={idx}
              >
                <div className="testimonial-header">
                  <img src={testimonial.profile} alt="" />
                  <div>
                    <div className="username">
                      {testimonial.name}
                    </div>
                    <div className="user-course">
                      {testimonial.courses}
                    </div>
                  </div>
                </div>
                <div className="user-review">
                  {testimonial.reviewText}
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default Testimonials;
