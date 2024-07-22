import React, { useState } from "react";
import { categories } from "./sharedData";

function CategoryItems() {
  const [selectedCategory, setSelectedCategory] = useState();

  const handleClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="row space-x-3 flex-1 m-2">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleClick(category)}
          className={`border border-[${category.color}] p-2 rounded-lg`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryItems;
