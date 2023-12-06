import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'YGCfQ+gNIfU7OpEmss6490mYdSpCxkwoPOr/9hf+E4A='

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
        <h2>Fitness</h2>
        <Link to="/fitness" className="btn btn-light">
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
                    <div className="card-body">
                      <h3 className="card-title">{fitnessApp.name}</h3>
                      <p className="card-text">{fitnessApp.description}</p>
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
