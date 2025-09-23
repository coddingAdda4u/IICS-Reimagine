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

      <div className="carousel-thumbnails">
        <div className="tumnail-list">
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

        <div className="carousel-controls">
          <button className="carousel-btn next">
            Enroll Now
          </button>
          <button className="carousel-btn prev">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

function ThumbailItems({ title, url }) {
  return (
    <div className="thumbail-items">
      <img src={url} alt={title} />
      <div className="thumbnail-desc">
        <h4>
          {title}
        </h4>
      </div>
    </div>
  )
}
