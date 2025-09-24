import './Carousel.css'
import carouselItemsData from './CarouselData/carouselData'
import thumbanailItemsData from './CarouselData/thumnailData'

function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-list">
        {
          carouselItemsData.flatMap(itemData => {
            return (
              <CarouselItems title={itemData.title} text={itemData.text} url={itemData.url} key={itemData.title} />
            )
          })
        }
      </div>
      
      <div className="carousel-controls">
        <button className="contorls-btn left-btn">
          <img src="arrow.svg" alt="Arrow" />
        </button>
        <button className="contorls-btn right-btn">
          <img src="arrow.svg" alt="Arrow" />
        </button>
      </div>

      <div className="carousel-thumbnails">
        <div className="thumbnail-list">
          {
            thumbanailItemsData.flatMap(itemData => {
              return <ThumbailItems title={itemData.title} url={itemData.url} key={itemData.title} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Carousel

function CarouselItems({ title, text, url }) {
  return (
    <div className="carousel-items">
      <img src={url} alt={title} />
      <div className="carousel-desc">
        <h1 className="carousel-title">
          {title}
        </h1>
        <p className="carousel-text">
          {text}
        </p>

        <div className="carousel-buttons">
          <button className="carousel-btn">
            Enroll Now
          </button>
          <button className="carousel-btn">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

function ThumbailItems({ title, url }) {
  return (
    <div className="thumbnail-items">
      <img src={url} alt={title} />
        <h4 className='thumbnail-desc'>
          {title}
        </h4>
    </div>
  )
}
