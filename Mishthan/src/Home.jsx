import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const [meals, setMeals] = useState([])
  const [search, setSearch] = useState("");
//   const[details,setDetails]=useState([])
//   console.log("detailss,",details);
  console.log(meals);
  const navigate=useNavigate();

  const data = async (query = "") => {
    try {
      const meal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const res = await meal.json();

      setMeals(res.meals || []);
    } catch (error) {
      console.log("error", error);
    }

  }

  useEffect(() => {

    data();

  }, [])

  useEffect(() => {

    data(search);

  }, [search])

const getDetails=async(id)=>{
const details=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
const res=await details.json();
console.log(res.meals);

navigate('/details',{state:res.meals[0]});



}
  return (
  
<>
 <div className="min-h-screen bg-gray-900 px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-white text-center mb-10">
            Search Recipes
          </h1>

          {/* Search Input */}
          <div className="flex justify-center mb-12">
            <input
              type="text"
              placeholder="Search for a recipe..."
              className="w-full md:w-1/2 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
              onChange={(e) => { setSearch(e.target.value) }}
            />
            <button className="ml-3 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg">
              Search
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">


            {/* Duplicate this card for UI only */}


            {meals.map((item, index) => (
              <div
                key={item.idMeal || index}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.strMeal}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {item.strArea} • {item.strCategory}
                  </p>
                  <button onClick={()=>getDetails(item.idMeal)} className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}




          </div>
        </div>
      </div>
   
</>
)
}

export default Home