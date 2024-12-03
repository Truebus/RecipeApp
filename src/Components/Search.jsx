import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [storeData, setStoreData] = useState({ meals: [] });
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const handleData = async () => {
      try {
        const getData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
        if (!getData.ok) {
          throw new Error(`Something went wrong`);
        }

        const response = await getData.json();
        setStoreData(response);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      } finally {
        setIsLoading(false);
      }
    };

    handleData();
  }, [searchValue]);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    if (value.trim()) {
      setSearchValue(value);
    }
    setValue(''); // Clear input field after search
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading.......</div>
      ) : (
        <div className="p-[10px]">
          <div>
            <form className="flex justify-center mt-[30px] p-1 gap-x-5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Here"
                value={value}
                onChange={handleValue}
                className="rounded-xl p-2 w-[400px] outline-none border-2 border-gray-600"
              />
              <button
                type="submit"
                className="bg-gradient-to-tr from-yellow-400 to-orange-500 p-2 font-bold text-white rounded-lg hover:scale-105 ease-linear"
              >
                Search
              </button>
            </form>
          </div>

          <div className="flex flex-wrap justify-around mt-[20px] gap-y-5 p-2">
            {storeData.meals.length > 0 ? (
              storeData.meals.map((item, index) => (
                <div
                  className="h-[300px] w-[250px] border-2 border-gray-600 rounded-xl font-serif text-xl font-bold text-blue-800 p-[10px]
                  shadow-lg shadow-gray-500 hover:scale-105 10s ease-linear"
                  key={index}
                >
                  <h1 className="text-center">{item.strMeal}</h1>
                  
                  <Link to={`/recipe/${item.idMeal}`}>
                    <img
                      src={item.strMealThumb}
                      alt={item.strMeal}
                      className="rounded-lg"
                    />
                  </Link>
                </div>
              ))
            ) : (
              <div>
                <h1>No results found for "{searchValue}"</h1>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
