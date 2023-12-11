import { useEffect, useState } from 'react'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'b4Xh6xTDLJXju73Co0C7NwGC5v3CPliHMzn85ylw8GQ='

export function PageFitness() {
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
      </div>

      <div className="row">
        {fitnessApps.content.apps.map((fitnessApp) => (
          <div key={fitnessApp.id} className="col-lg-3 my-3">
            <a href={fitnessApp.src}>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{fitnessApp.name}</h3>
                  <p className="card-text">{fitnessApp.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
