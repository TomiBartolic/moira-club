import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import icon_enjoy from '../assets/icon-enjoy.svg'
import game from '../assets/game1.png'
import star from '../assets/star-icon.svg'
import 'swiper/css'
import 'swiper/css/pagination'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'b4Xh6xTDLJXju73Co0C7NwGC5v3CPliHMzn85ylw8GQ='

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
        <Link to="/enjoy">
          <img src={icon_enjoy} alt="icon game" />
          Enjoy
        </Link>
        <Link to="/enjoy" className="small-btn">
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
                    <div className="card-header">
                      <img src={game} alt="game" />
                      <div className="border-btn">
                        <Link to="/enjoy" className="card-btn purple-btn">
                          See All
                        </Link>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="card-title">{enjoyApp.name}</p>
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
