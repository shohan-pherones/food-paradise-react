import React from "react";
import "./Foods.css";

const Foods = (props) => {
  const { strMealThumb, strMeal, strYoutube } = props.food;
  return (
    <div className="food">
      <div className="food-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="food-details">
        <h2>{strMeal}</h2>
        <a href={strYoutube} target="_blank" rel="noopener noreferrer">
          See on YouTube
        </a>
      </div>
    </div>
  );
};

export default Foods;
