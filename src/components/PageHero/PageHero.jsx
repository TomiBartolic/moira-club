// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import hero from '../../assets/hero.png'   
import frozen from '../../assets/playfrozen.jpg'
import "swiper/css";



export function PageHero() {
    const slide = [
        {
            title: "Spider-Man",
            image: hero
        },
        {
            title: "Frozen",
            image: frozen,
        },
        {
            title: "Spider-Man",
            image: hero,
        },
        {
            title: "Spider-Man",
            image: hero,

        }
    ]

    return (
        <div className='hero'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                {slide.map((slide) => {
                    return <SwiperSlide key={slide.id}><img className='hero-images' key={slide.title} src={slide.image} /></SwiperSlide>
                })}
            </Swiper>
            <div className="title">
                <h1>Moira, unlimited content</h1>
                <p>The Latest Movies, TV Shows, Games, Music & More...</p>
            </div>
        </div>


    )
}