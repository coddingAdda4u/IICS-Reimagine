import React from 'react'

function Achivements() {
  return (
    <section className='h-auto w-full bg-background'>
      <h2 className="heading-1 text-center text-primary ">
        Achivements
      </h2>
      <div className="cover padding-auto py-6">
        <div className="relative cover">
          <img className='w-[55%] aspect-auto object-cover rounded-3xl' src="https://i0.wp.com/www.iicsindia.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-02-at-12.12.43-PM.jpeg?resize=768%2C512&ssl=1" alt="" />
          <div className="absolute top-0 right-0 z-2 w-[50%] bg-white p-4 rounded-3xl" style={{
            transform: 'translateY(30px)',
            boxShadow: '-7px 3px 2rem #00000074'
          }}>
            <p className="text-lg">
              IICS Computer Education Receives “Most Trusted Brand” Award from Arjun Kapoor. IICS Computer Education has added another feather to its cap by being honored with the prestigious “Most Trusted Brand” award. The award was presented by Bollywood star Arjun Kapoor at a glittering ceremony attended by industry leaders, educators, and technology enthusiasts.
            </p>
            <p className='text-lg'>
              This recognition reflects the institution’s unwavering commitment to delivering quality computer education and empowering students with the skills needed to thrive in a digital world. Over the years, IICS has built a reputation for excellence through its innovative teaching methods, state-of-the-art infrastructure, and a dedicated focus on student success.

            </p>
          </div>
        </div>
        <div className="cover my-25">
          <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
            <div className="h-auto w-[300px] bg-white p-2 rounded-xl">
              <img src="https://i0.wp.com/www.iicsindia.com/wp-content/uploads/2018/07/iics-india-award1.jpg?w=540&ssl=1" alt="" className="cover rounded-xl" />
              <div>
                <h4 className='my-2 font-semibold'>
                  Awarded As Best Placement Institute in North India
                </h4>
                <p className='text-sm'>Receiving award for Best Placement Institute in North India from honourable HRD minister of state Dr. Ram Shankar Katheria</p>
              </div>
            </div>
            <div className="h-auto w-[300px] bg-white p-2 rounded-xl">
              <img src="https://i0.wp.com/www.iicsindia.com/wp-content/uploads/2018/07/iics-india-award1.jpg?w=540&ssl=1" alt="" className="cover rounded-xl" />
              <div>
                <h4 className='my-2 font-semibold'>
                  Awarded As Best Placement Institute in North India
                </h4>
                <p className='text-sm'>Receiving award for Best Placement Institute in North India from honourable HRD minister of state Dr. Ram Shankar Katheria</p>
              </div>
            </div>
            <div className="h-auto w-[300px] bg-white p-2 rounded-xl">
              <img src="https://i0.wp.com/www.iicsindia.com/wp-content/uploads/2018/07/iics-india-award1.jpg?w=540&ssl=1" alt="" className="cover rounded-xl" />
              <div>
                <h4 className='my-2 font-semibold'>
                  Awarded As Best Placement Institute in North India
                </h4>
                <p className='text-sm'>Receiving award for Best Placement Institute in North India from honourable HRD minister of state Dr. Ram Shankar Katheria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achivements
