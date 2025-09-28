import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Events.css';
import assets from '../../assets/assets';
import { useState } from 'react';

const seminarImages = [
  assets.seminar1,
  assets.seminar2,
  assets.seminar3,
  assets.seminar1,
  assets.seminar2,
  assets.seminar3,
];
const quizImages = [
  assets.quiz1,
  assets.quiz2,
  assets.quiz1,
  assets.quiz2,
  assets.quiz1,
  assets.quiz2,
];

function Events() {

  const [images, setImage] = useState(seminarImages)

  return (
    <div className='h[100vh] w-ful relative'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="events-swiper"
      >
        {images.map((url, idx) => (
          <SwiperSlide key={idx}>
            <img src={url} alt={`event-${idx + 1}`} className='cover object-cover' />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-0 left-0 flex justify-center items-start flex-col cover z-1 bg-[#000000ab]">
        <h4
         className={`text-[24px] md:text-3xl ml-8 md:ml-40 font-bold h-text ${images == seminarImages ? 'active' : ''}`}
         onClick={
          function () {
            setImage(seminarImages)
          }
         }
         >
          Students Seminars
        </h4>
        <h4
          className={`text-[24px] md:text-3xl ml-8 md:ml-40 font-bold h-text ${images == quizImages ? 'active' : ''}`}
         onClick={
          function () {
            setImage(quizImages)
          }
         }
         >
          Monthly Quizes
        </h4>
      </div>
    </div>
  );
}

export default Events;

function ImagesCards({ url }) {
  return (
    <SwiperSlide>
      <img src={url} alt="" className='h-55' />
    </SwiperSlide>
  )
}