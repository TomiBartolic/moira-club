import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import icon_game from '../assets/icon-game.svg'
import game from '../assets/game1.png'
import star from '../assets/star-icon.svg'
import 'swiper/css'
import 'swiper/css/pagination'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'b4Xh6xTDLJXju73Co0C7NwGC5v3CPliHMzn85ylw8GQ='

export function PlayApps() {
  const [apps, setApps] = useState({ content: { articles: [] } })

  useEffect(() => {
    const getApps = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}content/section/moira-exclusives-games`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const appsData = await response.json()
        setApps(appsData)
      } catch (error) {
        console.error('Error fetching apps:', error)
      }
    }
    getApps()
  })
  return (
    <>
      <div className="section-title d-flex justify-content-between my-3">
        <Link to="/play">
          <img src={icon_game} alt="icon game" />
          Play
        </Link>
        <Link to="/play" className="small-btn">
          See All
        </Link>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {apps.content.articles.map(
          (app, index) =>
            index < 8 && (
              <SwiperSlide key={app.id} className="cards">
                <a href={app.excerpt}>
                  <div className="card">
                    <div className="card-body">
                      <img src={game} alt="game" />
                      <h3 className="card-title">{app.title}</h3>
                      <p className="card-text">{app.meta_description}</p>
                      <div className="card-info">
                        <div className="tag-name">
                          <img src={star} alt="star review" />
                          <p className="miqro">4.2</p>
                        </div>
                        <div className="size-file">
                          <img src={star} alt="star review" />
                          <p className="miqro">4.2</p>
                        </div>
                        <div className="review">
                          <img src={star} alt="star review" />
                          <p className="miqro">4.2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  )
}
