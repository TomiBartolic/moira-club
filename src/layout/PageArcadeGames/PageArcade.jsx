import { useEffect, useState } from 'react'
import game from '../../assets/game1.png'
import { CategoryPills } from '../../components/CategoryPills/CategoryPills'
import { categories } from '../../categories'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'b4Xh6xTDLJXju73Co0C7NwGC5v3CPliHMzn85ylw8GQ='

export function PageArcade() {
  const [arcadeGames, setArcadeGames] = useState({ content: { games: [] } })

  useEffect(() => {
    const getArcade = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}content/section/moira-arcade-games`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const arcadeGamesData = await response.json()
        setArcadeGames(arcadeGamesData)
      } catch (error) {
        console.error('Error fetching apps:', error)
      }
    }

    getArcade()
  })
  return (
    <div className='container'>
      <div className="section-title d-flex justify-content-between my-3">
        <h2>Play</h2>
      </div>
      <div className="row py-2 justify-content-center overflow-auto">
      <CategoryPills categories={categories} />
      </div>
      <div className="row">
        {arcadeGames.content.games.map((arcadeGame) => (
          <div key={arcadeGame.id} className="col-lg-3 col-md-4 col-sm-2 my-3">
            <a href={arcadeGame.src}>
              <div className="card">
                <div className="card-body">
                <img src={game} alt="game" />
                  <h3 className="card-title">{arcadeGame.name}</h3>
                  <p className="card-text">{arcadeGame.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
