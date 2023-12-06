import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'YGCfQ+gNIfU7OpEmss6490mYdSpCxkwoPOr/9hf+E4A='

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
        <h2>Learn</h2>
        <Link to="/play" className="btn btn-light">
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
                    <div className="card-body">
                      <h3 className="card-title">{learnApp.name}</h3>
                      <p className="card-text">{learnApp.description}</p>
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
