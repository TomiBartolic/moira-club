import { useEffect, useState } from 'react'
import gameImage from '../../assets/game1.png'
import { CategoryPills } from '../../components/CategoryPills/CategoryPills'
import { categories } from '../../categories'
import { useParams } from 'react-router-dom'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'blou1S2KSFYz9yANhzHmYbmbrq2NDidI4cKeucZoIEg='

export function PagePlay() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [games, setGames] = useState({ content: { games: [] } })
  const [articles, setArticles] = useState({ content: { articles: [] } })
  const { id } = useParams()

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
      return { content: { games: [] } } // You might want to change this default value
    }
  }

  useEffect(() => {
    const getGameData = async () => {
      const data = await getSection(`moira-${activeCategory}-games`)
      setGames(data)
    }

    const getArticlesData = async () => {
      const data = await getSection(`moira-${activeCategory}-games`)
      setArticles(data)
    }

    if (activeCategory) {
      getGameData()
      getArticlesData()
    }
  }, [activeCategory])

  const handleCategoryClick = (category) => {
    setActiveCategory(category.slug)
  }

  return (
    <div className="container">
      <div className="section-title d-flex justify-content-between">
        <h2>{id}</h2>
        <button className="btn btn-primary">Games</button>
      </div>
      <div className="row py-2 justify-content-center overflow-auto">
        <CategoryPills
          categories={categories}
          activeCategory={activeCategory}
          onClick={handleCategoryClick}
        />
      </div>
      <div className="row">
        {(games.content.games || []).map((game) => (
          <div key={game.id} className="col-lg-3 col-md-4 col-sm-2 my-3">
            <a href={game.src}>
              <div className="card">
                <div className="card-body">
                  <img src={gameImage} alt="game" />
                  <h3 className="card-title">{game.name}</h3>
                  <p className="card-text">{game.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
        {(articles.content.articles || []).map((article) => (
          <div key={article.id} className="col-lg-3 col-md-4 col-sm-2 my-3">
            <a href={article.src}>
              <div className="card">
                <div className="card-body">
                  <img src={gameImage} alt="article" />
                  <h3 className="card-title">{article.title}</h3>
                  <p className="card-text">{article.meta_description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
