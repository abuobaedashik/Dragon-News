import React from "react";

function Vcategory({ categories, loadCategoryVideos, selectedCategory }) {
  return (
    <div id="category-btn" className="flex items-center justify-center py-2 px-4 gap-5">
      {categories.map((category) => (
        <button
          key={category.category_id}
          id={`btn-${category.category_id}`}
          onClick={() => loadCategoryVideos(category.category_id)}
          className={`style-btn text-sm font-bold button-sr ${
            selectedCategory === category.category_id ? "btn-bg" : ""
          }`}
        >
          {category.category}
        </button>
      ))}
    </div>
  );
}

export default Vcategory;
