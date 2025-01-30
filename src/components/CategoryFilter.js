import React,{useState} from "react";
import PropTypes from "prop-types";

function CategoryFilter({ categories = [] }) {
  
    const [selectedCategory, setSelectedCategory] = useState(null);
    return (
      <div className="categories">
        <h5>Category filters</h5>
        {categories.map((category) => (
          <button
            key={category}
            className={category === selectedCategory ? "selected" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };


CategoryFilter.propTypes = {
  categories: PropTypes.array,
};

export default CategoryFilter;
