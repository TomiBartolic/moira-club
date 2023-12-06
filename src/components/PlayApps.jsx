import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'YGCfQ+gNIfU7OpEmss6490mYdSpCxkwoPOr/9hf+E4A='

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
        <h2>Play</h2>
        <Link to="/play" className="btn btn-light">
          See All
        </Link>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
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
                      <h3 className="card-title">{app.title}</h3>
                      <p className="card-text">{app.meta_description}</p>
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