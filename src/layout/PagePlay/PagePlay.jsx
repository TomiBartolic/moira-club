import { useEffect, useState } from 'react'
import game from '../../assets/game1.png'
import { CategoryPills } from '../../components/CategoryPills/CategoryPills'
import { categories } from '../../categories'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'Vz6OvlG5d8ID3L2KYe3xsaS/2MW8xiJuwfusVeiEeX4='



export function PagePlay() {
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
  }, [])


  return (
    <div className='container py-5'>
      <div className="section-title d-flex justify-content-between my-3">
        <h2>Play</h2>

        <button className="btn btn-secondary">Games</button>
      </div>
     
      <CategoryPills categories={categories} />
     
      <div className="row">
        {apps.content.articles.map((app) => (
          <div key={app.id} className="col-lg-3 my-3">
            <a href={app.src}>
              <div className="card">
                <div className="card-body">
                  <img src={game} alt="game" />
                  <h3 className="card-title">{app.title}</h3>
                  <p className="card-text">{app.meta_description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
