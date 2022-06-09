import React, { useEffect, useState } from "react";
import Foods from "../Foods/Foods";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState([]);
  const [foods, setFoods] = useState([]);

  const handleSearch = async (foodName) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    );
    const data = await response.json();
    setFoods(data.meals);
  };

  useEffect(() => {
    handleSearch("fish");
  }, []);

  return (
    <div className="logo">
      <h1>FOOD PARADISE</h1>
      <div className="search-field">
        <input
          type="text"
          placeholder="Search any food..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => handleSearch(searchTerm)}>Search</button>
      </div>
      <div className="foods">
        {foods.map((food) => (
          <Foods key={food.idMeal} food={food}></Foods>
        ))}
      </div>
    </div>
  );
};

export default Header;
