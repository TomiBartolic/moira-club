// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import './PageHero.css'
import 'swiper/css'
import 'swiper/css/pagination'

import spiderman_logo from '../../assets/spiderman-logo.png'
import avengers_logo from '../../assets/avengers-logo.png'
import 'swiper/css'

export function PageHero() {
  const slide = [
    {
      title: 'Spider-Man',
      image: spiderman_logo,
      class: 'slide1 hero-images',
      text: 'Lorem ipsum text',
    },
    {
      title: 'Frozen',
      image: avengers_logo,
      class: 'slide2 hero-images',
      text: 'Lorem ipsum text',
    },
    {
      title: 'Spider-Man',
      image: spiderman_logo,
      class: 'slide3 hero-images',
      text: 'Lorem ipsum text',
    },
    {
      title: 'Spider-Man',
      image: spiderman_logo,
      class: 'slide4 hero-images',
      text: 'Lorem ipsum text',
    },
  ]

  return (
    <div className="hero">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {slide.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div class="slide-content">
                <img
                  className="brand-logo"
                  key={slide.title}
                  src={slide.image}
                />
                <h5>{slide.text}</h5>
                <button type="button" class="btn-main">
                  Play Now
                </button>
              </div>
              <div class="vignette-border"></div>
              <div className={slide.class}></div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="title">
        <h1>Moira, unlimited content</h1>
        <h4>The Latest Movies, TV Shows, Games, Music & More...</h4>
      </div>
    </div>
  )
}
