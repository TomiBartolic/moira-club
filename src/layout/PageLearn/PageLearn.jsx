import { useEffect, useState } from 'react'
import game from '../../assets/game1.png'
import { CategoryPills } from '../../components/CategoryPills/CategoryPills';
import { categoriesLearn } from '../../categories';
const BASE_URL = 'https://cms-nocache-api.d1b.pw/'
const ACCESS_TOKEN = 'b4Xh6xTDLJXju73Co0C7NwGC5v3CPliHMzn85ylw8GQ='

export function PageLearn() {
  const [games, setGames] = useState({ content: { apps: [] } })
  const [activeCategory, setActiveCategory] = useState(null);

 
  const getSection = async (section) => {
    try {
      const response = await fetch(
        `${BASE_URL}content/section/${section}`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const sectionData = await response.json();
      return sectionData;
    } catch (error) {
      console.error('Error fetching section:', error);
      return { content: { apps: [] } }; // You might want to change this default value
    }
  };
  useEffect(() => {
    const getGameData = async () => {
      const data = await getSection(`moira-${activeCategory}-apps`);
      setGames(data);
    };

    if (activeCategory) {
      getGameData();
    }
  }, [activeCategory]);
  const handleCategoryClick = (category) => {
    setActiveCategory(category.slug);
  };
  return (
    <div className="container py-5">
      <div className="section-title d-flex justify-content-between my-3">
        <h2>Learn</h2>

        <button className="btn btn-secondary">Games</button>
      </div>
      <CategoryPills
          categories={categoriesLearn}
          activeCategory={activeCategory}
          onClick={handleCategoryClick}
        />
      <div className="row">
        {games.content.apps.map((learnApp) => (
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
