import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const DetailPage = () => {
    const [storedata, setStoreData] = useState({ meals: [] });
    const [isLoading, setIsLoading] = useState(true);
    const { idMeal } = useParams();


    useEffect(() => {
        const HandleData = async () => {
            try {
                const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);

                if (!data.ok) {
                    throw new Error("Something went wrong...")
                }
                const response = await data.json();
                setStoreData(response);
            }
            catch (err) {
                console.log(err.message);
            }
            finally {
                setIsLoading(false);
            }

        }
        HandleData();
    }, [idMeal])
    return (
        <div>
            {isLoading ? (
                <div>Loading.....</div>
            ) : (
                <div>
                    {storedata.meals.length > 0 ? (
                        storedata.meals.map((item) => (
                            <div key={item.idMeal} className="h-auto w-full p-[15px]">
                             <img src={item.strMealThumb} alt="image not found" className="h-[450px] w-full rounded-3xl shadow-lg shadow-gray-600"/>    
                            <div>
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                            </div>
                        ))
                    ) : (
                        <div>No meal details found.</div>
                    )}

                </div>
            )}
        </div>
    )
}