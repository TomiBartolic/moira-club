import { useEffect, useState } from 'react'
import game from '../../assets/game1.png'
import { CategoryPills } from '../../components/CategoryPills/CategoryPills'
import { categories } from '../../categories'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'b4Xh6xTDLJXju73Co0C7NwGC5v3CPliHMzn85ylw8GQ='

export function PageRacing() {
  const [racingGames, setRacingGames] = useState({ content: { games: [] } })

  useEffect(() => {
    const getRacing = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}content/section/moira-racing-games`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const racingGamesData = await response.json()
        setRacingGames(racingGamesData)
      } catch (error) {
        console.error('Error fetching apps:', error)
      }
    }

    getRacing()
  })
  return (
    <div className="container">
      <div className="section-title d-flex justify-content-between my-3">
        <h2>Play</h2>
      </div>
      <div className="row py-2 justify-content-center overflow-auto">
        <CategoryPills categories={categories} />
      </div>
      <div className="row">
        {racingGames.content.games.map((racingGame) => (
          <div key={racingGame.id} className="col-lg-3 col-md-4 col-sm-2 my-3">
            <a href={racingGame.src}>
              <div className="card">
                <div className="card-body">
                  <img src={game} alt="game" />
                  <h3 className="card-title">{racingGame.name}</h3>
                  <p className="card-text">{racingGame.games}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
