import { useEffect, useState } from 'react'
import game from '../../assets/game1.png'
import { CategoryPills } from '../../components/CategoryPills/CategoryPills'
import { categories } from '../../categories'

const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'nFoAZLbyEDWcjr3NTzMslQ9ZZ9RcnmW4Uo80M7DSiZE='

export function PageMusic() {
  const [musicGames, setMusicGames] = useState({ content: { games: [] } })

  useEffect(() => {
    const getMusic = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}content/section/moira-music-games`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const musicGamesData = await response.json()
        setMusicGames(musicGamesData)
      } catch (error) {
        console.error('Error fetching apps:', error)
      }
    }

    getMusic()
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
        {musicGames.content.games.map((musicGame) => (
          <div key={musicGame.id} className="col-lg-3 col-md-4 col-sm-2 my-3">
            <a href={musicGame.src}>
              <div className="card">
                <div className="card-body">
                <img src={game} alt="game" />
                  <h3 className="card-title">{musicGame.name}</h3>
                  <p className="card-text">{musicGame.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
