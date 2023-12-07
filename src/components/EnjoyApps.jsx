import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'Vz6OvlG5d8ID3L2KYe3xsaS/2MW8xiJuwfusVeiEeX4='

export function EnjoyApps() {
  const [enjoyApps, setEnjoyApps] = useState({ content: { videos: [] } })

  useEffect(() => {
    const getEnjoy = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}content/section/moira-animal-videos`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const enjoyAppsData = await response.json()
        setEnjoyApps(enjoyAppsData)
      } catch (error) {
        console.error('Error fetching apps:', error)
      }
    }

    getEnjoy()
  })
  return (
    <>
      <div className="section-title d-flex justify-content-between my-3">
        <h2>Enjoy</h2>
        <Link to="/enjoy" className="btn btn-light">
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
        {enjoyApps.content.videos.map(
          (enjoyApp, index) =>
            index < 8 && (
              <SwiperSlide key={enjoyApp.id} className="cards">
                <a href={enjoyApp.src}>
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">{enjoyApp.name}</h3>
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
