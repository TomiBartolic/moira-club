import { useEffect, useState } from 'react'
import game from '../../assets/game1.png'
import { CategoryPills } from '../../components/CategoryPills/CategoryPills'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'nFoAZLbyEDWcjr3NTzMslQ9ZZ9RcnmW4Uo80M7DSiZE='
const categories = [
  {
    id: 1,
    name: 'Games',
    slug: 'games',
  },
  {
    id: 2,
    name: 'Apps',
    slug: 'apps',
  },
  {
    id: 3,
    name: 'VR',
    slug: 'vr',
  },
  {
    id: 4,
    name: 'Games',
    slug: 'games',
  },
  {
    id: 5,
    name: 'Apps',
    slug: 'apps',
  },
  {
    id: 6,
    name: 'VR',
    slug: 'vr',
  },
  {
    id: 7,
    name: 'Games',
    slug: 'games',
  },
  {
    id: 8,
    name: 'Apps',
    slug: 'apps',
  },
  {
    id: 9,
    name: 'VR',
    slug: 'vr',
  },
  {
    id: 10,
    name: 'Games',
    slug: 'games',
  },
  {
    id: 11,
    name: 'Apps',
    slug: 'apps',
  },
  {
    id: 12,
    name: 'VR',
    slug: 'vr',
  },
  {
    id: 13,
    name: 'Games',
    slug: 'games',
  },
  {
    id: 14,
    name: 'Apps',
    slug: 'apps',
  },
  {
    id: 15,
    name: 'VR',
    slug: 'vr',
  },
  {
    id: 16,
    name: 'Games',
    slug: 'games',
  },
  {
    id: 17,
    name: 'Apps',
    slug: 'apps',
  },
  {
    id: 18,
    name: 'VR',
    slug: 'vr',
  },
  {
    id: 19,
    name: 'Games',
    slug: 'games',
  },
  {
    id: 20,
    name: 'Apps',
    slug: 'apps',
  },
  {
    id: 21,
    name: 'VR',
    slug: 'vr',
  },
  {
    id: 22,
    name: 'Games',
    slug: 'games',
  },
  {
    id: 23,
    name: 'Apps',
    slug: 'apps',
  },
]

export function PagePlay() {
  const [apps, setApps] = useState({ content: { articles: [] } })
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

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
    <div className="container py-5">
      <div className="section-title d-flex justify-content-between my-3">
        <h2>Play</h2>

        <button className="btn btn-secondary">Games</button>
      </div>
      <div className="row py-2 justify-content-center overflow-auto">
        <CategoryPills
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>
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
