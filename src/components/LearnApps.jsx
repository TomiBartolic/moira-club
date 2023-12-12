import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import icon_learn from '../assets/icon-learn.svg'
import game from '../assets/game1.png'
import star from '../assets/star-icon.svg'
import 'swiper/css'
import 'swiper/css/pagination'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'blou1S2KSFYz9yANhzHmYbmbrq2NDidI4cKeucZoIEg='

export function LearnApps() {
  const [learnApps, setLearnApps] = useState({ content: { apps: [] } })

  useEffect(() => {
    const getLearn = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}content/section/moira-education-apps`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const learnAppsData = await response.json()
        setLearnApps(learnAppsData)
      } catch (error) {
        console.error('Error fetching apps:', error)
      }
    }

    getLearn()
  })
  return (
    <>
      <div className="section-title d-flex justify-content-between my-3">
        <Link to="/learn">
          <img src={icon_learn} alt="icon learn" />
          Learn
        </Link>
        <Link to="/learn" className="small-btn">
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
        {learnApps.content.apps.map(
          (learnApp, index) =>
            index < 8 && (
              <SwiperSlide key={learnApp.id} className="cards">
                <a href={learnApp.src}>
                  <div className="card">
                    <div className="card-header">
                      <img src={game} alt="game" />
                      <div className="border-btn">
                        <Link to="/learn" className="card-btn yellow-btn">
                          See All
                        </Link>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">{learnApp.name}</h3>
                      <p className="card-text">{learnApp.description}</p>
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
