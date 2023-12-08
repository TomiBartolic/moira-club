import { useEffect, useState } from 'react'
import game from '../../assets/game1.png'
import { CategoryPills } from '../../components/CategoryPills/CategoryPills'
import { categories } from '../../categories'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'nFoAZLbyEDWcjr3NTzMslQ9ZZ9RcnmW4Uo80M7DSiZE='

export function PageAdventure() {
  const [adventureGames, setAdventureGames] = useState({ content: { games: [] } })

  useEffect(() => {
    const getAdventure = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}content/section/moira-adventure-games`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const adventureGamesData = await response.json()
        setAdventureGames(adventureGamesData)
      } catch (error) {
        console.error('Error fetching apps:', error)
      }
    }

    getAdventure()
  },[])
  return (
    <div className='container'>
      <div className="section-title d-flex justify-content-between my-3">
        <h2>Play</h2>
      </div>
      <div className="row py-2 justify-content-center overflow-auto">
      <CategoryPills categories={categories} />
      </div>
      <div className="row">
        {adventureGames.content.games.map((adventureGame) => (
          <div key={adventureGame.id} className="col-lg-3 col-md-4 col-sm-2 my-3">
            <a href={adventureGame.src}>
              <div className="card">
                <div className="card-body">
                <img src={game} alt="game" />
                  <h3 className="card-title">{adventureGame.name}</h3>
                  <p className="card-text">{adventureGame.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
