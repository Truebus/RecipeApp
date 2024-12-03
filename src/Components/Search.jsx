import { useState, useEffect } from "react";

export const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [storeData, setStoreData] = useState({ hits: [] });
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState('cake');

  // API Key and ID
  const myKey = import.meta.env.VITE_API_KEY;  // Ensure it's correct in your .env file
  const myId = import.meta.env.VITE_API_ID;    // Ensure it's correct in your .env file

  // Log the API key and ID for debugging
  console.log('API Key:', myKey);
  console.log('API ID:', myId);

  useEffect(() => {
    const handleData = async () => {
      try {
        const apiUrl = `https://api.edamam.com/api/recipes/v2?q=${encodeURIComponent(searchValue)}&app_id=${myId}&app_key=${myKey}&type=public`;
        console.log('API URL:', apiUrl); // Check the URL for correctness

        const getData = await fetch(apiUrl);
        console.log('Response Status:', getData.status);  // Log status code

        if (!getData.ok) {
          throw new Error(`Server Error: ${getData.statusText}`);
        }

        const response = await getData.json();
        console.log('API Response:', response); // Log the response

        if (response.hits) {
          setStoreData(response);
        } else {
          throw new Error("No data found.");
        }
      } catch (err) {
        console.error("Error fetching data:", err.message); // Log the error
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
    setValue('');
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
            <form
              className="flex justify-center mt-[30px] p-1 gap-x-5"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Enter Here"
                value={value}
                onChange={handleValue}
                className="rounded-xl p-2 w-[400px] outline-none border-2 border-gray-600"
              />
              <button
                type="submit"
                className="bg-gradient-to-tr from-yellow-400 to-orange-500 p-2 font-bold text-white rounded-lg hover:scale-105 5s ease-linear"
              >
                Search
              </button>
            </form>
          </div>
          <div>
            {storeData.hits.length > 0 ? (
              storeData.hits.map((item, index) => (
                <div className="h-[300px] w-[250px] border-2 border-black p-1" key={index}>
                  <h1>{item.recipe.label}</h1>
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
