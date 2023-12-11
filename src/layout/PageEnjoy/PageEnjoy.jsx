import { useEffect, useState } from 'react'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'b4Xh6xTDLJXju73Co0C7NwGC5v3CPliHMzn85ylw8GQ='

export function PageEnjoy() {
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
      </div>
      <div className="row">
        {enjoyApps.content.videos.map((enjoyApp) => (
          <div key={enjoyApp.id} className="col-lg-3 col-md-4 col-sm-2 my-3">
            <a href={enjoyApp.src}>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{enjoyApp.name}</h3>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
