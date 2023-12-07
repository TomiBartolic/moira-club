import './CategoryPills.css'; 
const categories2 = [
    {
        id: 1,
        name: 'Games',
        slug: 'games'
    },
    {
        id: 2,
        name: 'Apps',
        slug: 'apps'
    },
    {
        id: 3,
        name: 'VR',
        slug: 'vr'
    },
    {
        id: 4,
        name: 'Games',
        slug: 'games'
    },
    {
        id: 5,
        name: 'Apps',
        slug: 'apps'
    },
    {
        id: 6,
        name: 'VR',
        slug: 'vr'
    },
    {
        id: 7,
        name: 'Games',
        slug: 'games'
    },
    {
        id: 8,
        name: 'Apps',
        slug: 'apps'
    },
    {
        id: 9,
        name: 'VR',
        slug: 'vr'
    },
    {
        id: 10,
        name: 'Games',
        slug: 'games'
    },
    {
        id: 11,
        name: 'Apps',
        slug: 'apps'
    },
    {
        id: 12,
        name: 'VR',
        slug: 'vr'
    },
    {
        id: 13,
        name: 'Games',
        slug: 'games'
    },
    {
        id: 14,
        name: 'Apps',
        slug: 'apps'
    },
    {
        id:  15,
        name: 'VR',
        slug: 'vr'
    },
    {
        id: 16,
        name: 'Games',
        slug: 'games'
    },
    {
        id: 17,
        name: 'Apps',
        slug: 'apps'
    },
    {
        id: 18,
        name: 'VR',
        slug: 'vr'
    },
    {
        id: 19,
        name: 'Games',
        slug: 'games'
    },
    {
        id: 20,
        name: 'Apps',
        slug: 'apps'
    },
    {
        id: 21,
        name: 'VR',
        slug: 'vr'
    },
    {
        id: 22,
        name: 'Games',
        slug: 'games'
    },
    {
        id: 23,
        name: 'Apps',
        slug: 'apps'
    }
  
  ]


export function CategoryPills(categories, selectedCategory, onSelect ) {   
    return (
        <div className="categories" role="group" aria-label="Basic example">
            <div className="categories-buttons">
            {categories2.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`btn btn-secondary ${category.id === selectedCategory ? 'active' : ''}`}
            onClick={() => onSelect(category.id)}
          >
            {category.name}
          </button>
                ))}     
            </div>
        </div>
    )
}