import React from "react";
import "./index.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  );
};

export default Directory;
