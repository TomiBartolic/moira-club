import "./CategoryPills.css";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const TRANSLATE_AMOUNT = 85;

export function CategoryPills({ categories,  onClick }) {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(categories[0]); 
  useEffect(() => {
    onClick(activeCategory); 
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const buttonsWidth = categories.length * 80;
      setIsLeftVisible(translate > 0);
      setIsRightVisible(translate + containerWidth < buttonsWidth);
    }
  }, [translate]);

  return (
    <div className="row py-2 justify-content-center overflow-auto">
      <div
        ref={containerRef}
        className="categories"
        role="group"
        aria-label="Basic example"
      >
        <div
          className="categories-buttons"
          style={{ transform: `translateX(-${translate}px)` }}
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className={`btn btn-secondary ${category === activeCategory ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category);
                onClick(category);
              }}
            >
              {category.name}
            </Link>
          ))}
        </div>
        {isLeftVisible && (
          <div className="chevron left">
            <button
              className="chevron-btn"
              onClick={() => {
                setTranslate((translate) => {
                  const newTranslate = translate - TRANSLATE_AMOUNT;
                  return newTranslate < 0 ? 0 : newTranslate;
                });
              }}
            >
              <ChevronLeft />
            </button>
          </div>
        )}
        {isRightVisible && (
          <div className="chevron right">
            <button
              className="chevron-btn"
              onClick={() => {
                setTranslate((translate) => {
                  if (!containerRef.current) return translate;
                  const newTranslate = translate + TRANSLATE_AMOUNT;
                  const containerWidth = containerRef.current.clientWidth;
                  const buttonsWidth = categories.length * 80;
                  const maxTranslate = buttonsWidth - containerWidth;
                  return newTranslate > maxTranslate
                    ? maxTranslate
                    : newTranslate;
                });
              }}
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
CategoryPills.propTypes = {
  categories: PropTypes.array.isRequired,
  activeCategory: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};
