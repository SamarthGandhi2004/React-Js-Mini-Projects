import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Details = () => {
  const location = useLocation();
  const meal = location.state;
  const navigate = useNavigate();

  if (!meal) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p>No meal found</p>
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-12 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
        >
          ← Back to Home
        </button>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 text-center">{meal.strMeal}</h1>

        {/* Image */}
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="rounded-lg mb-6 w-full h-80 object-cover shadow-md"
        />

        {/* Category & Area */}
        <div className="flex justify-between mb-6 text-gray-300">
          <p>
            <strong>Category:</strong> {meal.strCategory}
          </p>
          <p>
            <strong>Area:</strong> {meal.strArea}
          </p>
        </div>

        {/* Ingredients */}
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {ingredients.map((item, index) => (
            <li
              key={index}
              className="bg-gray-700 rounded-md px-4 py-2 flex justify-between"
            >
              <span>{item.ingredient}</span>
              <span className="text-gray-400">{item.measure}</span>
            </li>
          ))}
        </ul>

        {/* Instructions */}
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          {meal.strInstructions}
        </p>

        {/* YouTube Link */}
        {meal.strYoutube && (
          <div className="text-center">
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-md font-semibold"
            >
              ▶ Watch on YouTube
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
