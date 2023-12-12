import { useEffect, useState } from 'react'
import { CategoryPills } from '../../components/CategoryPills/CategoryPills'
import { categoriesEnjoy } from '../../categories'
const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'blou1S2KSFYz9yANhzHmYbmbrq2NDidI4cKeucZoIEg='

export function PageEnjoy() {
  const [enjoyApps, setEnjoyApps] = useState({ content: { videos: [] } })
  const [activeCategory, setActiveCategory] = useState(null)

  const getSection = async (section) => {
    try {
      const response = await fetch(`${BASE_URL}content/section/${section}`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const sectionData = await response.json()
      return sectionData
    } catch (error) {
      console.error('Error fetching section:', error)
      return { content: { apps: [] } } // You might want to change this default value
    }
  }
  console.log(activeCategory)
  useEffect(() => {
    const getGameData = async () => {
      const data = await getSection(`moira-${activeCategory}`)
      setEnjoyApps(data)
    }

    if (activeCategory) {
      getGameData()
    }
  }, [activeCategory])
  const handleCategoryClick = (category) => {
    setActiveCategory(category.slug)
  }
  return (
    <div className="container py-5">
      <div className="section-title d-flex justify-content-between my-3">
        <h2>Enjoy</h2>
      </div>
      <CategoryPills
        categories={categoriesEnjoy}
        activeCategory={activeCategory}
        onClick={handleCategoryClick}
      />
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
    </div>
  )
}
