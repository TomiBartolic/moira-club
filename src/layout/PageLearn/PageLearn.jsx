import { useEffect, useState } from 'react'
import game from '../../assets/game1.png'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'Vz6OvlG5d8ID3L2KYe3xsaS/2MW8xiJuwfusVeiEeX4='

export function PageLearn() {
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
    <div className='container py-5'>
      <div className="section-title d-flex justify-content-between my-3">
        <h2>Learn</h2>

        <button className="btn btn-secondary">Games</button>
      </div>

      <div className="row">
        {learnApps.content.apps.map((learnApp) => (
          <div key={learnApp.id} className="col-lg-3 my-3">
            <a href={learnApp.src}>
                  <div className="card">
                    <div className="card-body">
                    <img src={game} alt="game" />
                      <h3 className="card-title">{learnApp.name}</h3>
                      <p className="card-text">{learnApp.description}</p>
                    </div>
                  </div>
                </a>
          </div>
        ))}
      </div>
    </div>
  )
}
