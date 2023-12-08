// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import './PageHero.css'
import 'swiper/css'
import 'swiper/css/pagination'

import spiderman_logo from '../../assets/spiderman-logo.png'
import avengers_logo from '../../assets/avengers-logo.png'
import frozen_logo from '../../assets/frozen-logo.png'
import youtube_logo from '../../assets/youtube-logo.png'
import 'swiper/css'

export function PageHero() {
  const slide = [
    {
      title: 'Spider-Man',
      image: spiderman_logo,
      class: 'slide1 hero-images',
      text: 'The Official Movie Mobile Game - Be the hero',
      button_text: 'Play Now',
    },
    {
      title: 'Avengers',
      image: avengers_logo,
      class: 'slide2 hero-images',
      text: 'Which superhero are You?',
      button_text: 'Play Now',
    },
    {
      title: 'Frozen',
      image: frozen_logo,
      class: 'slide3 hero-images',
      text: 'The Official Movie Mobile Game',
      button_text: 'Play Now',
    },
    {
      title: 'Moira',
      image: youtube_logo,
      class: 'slide4 hero-images',
      text: "Check out the Moira's Youttube Channel",
      button_text: 'Play Now',
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
              <div className="slide-content">
                <img
                  className="brand-logo"
                  key={slide.title}
                  src={slide.image}
                />
                <h5>{slide.text}</h5>
                <button type="button" className="btn-main">
                  {slide.button_text}
                </button>
              </div>
              <div className="vignette-border"></div>
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
