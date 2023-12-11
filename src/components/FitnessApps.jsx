import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import icon_train from '../assets/icon-train.svg'
import game from '../assets/game1.png'
import star from '../assets/star-icon.svg'
import 'swiper/css'
import 'swiper/css/pagination'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'b4Xh6xTDLJXju73Co0C7NwGC5v3CPliHMzn85ylw8GQ='

export function FitnessApps() {
  const [fitnessApps, setFitnessApps] = useState({ content: { apps: [] } })

  useEffect(() => {
    const getFitness = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}content/section/moira-health-fitness-apps`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const fitnessAppsData = await response.json()
        setFitnessApps(fitnessAppsData)
      } catch (error) {
        console.error('Error fetching apps:', error)
      }
    }

    getFitness()
  })
  return (
    <>
      <div className="section-title d-flex justify-content-between my-3">
        <Link to="/fitness">
          <img src={icon_train} alt="icon game" />
          Fitness
        </Link>
        <Link to="/fitness" className="small-btn">
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
        {fitnessApps.content.apps.map(
          (fitnessApp, index) =>
            index < 8 && (
              <SwiperSlide key={fitnessApp.id} className="cards">
                <Link to={fitnessApp.src}>
                  <div className="card">
                    <div className="card-header">
                      <img src={game} alt="game" />
                      <div className="border-btn">
                        <Link to="/fitness" className="card-btn green-btn">
                          See All
                        </Link>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="card-title">{fitnessApp.name}</p>
                      <p className="card-text">{fitnessApp.description}</p>
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
                </Link>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  )
}
