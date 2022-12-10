import React from "react";

export const Category = ({ categories, filterItems }) => {
  return (
    <div className="mt-5 d-flex flex-row justify-content-center align-items-center">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            onClick={() => filterItems(category)}
            className="me-4 bg-primary text-light p-2 border-0"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
