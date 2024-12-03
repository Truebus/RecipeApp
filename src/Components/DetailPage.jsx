import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const DetailPage = () => {
    const [storedata, setStoreData] = useState({ meals: [] });
    const [isLoading, setIsLoading] = useState(true);
    const { idMeal } = useParams();
    const [tabvalue, setTabValue] = useState('overview');


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
    const HandleTab = (tab) => {
        setTabValue(tab);
    }
    return (
        <div>
            {isLoading ? (
                <div>Loading.....</div>
            ) : (
                <div>
                    {storedata.meals.length > 0 ? (
                        storedata.meals.map((item) => (
                            <div key={item.idMeal} className="h-auto w-full p-[15px]">
                                <img src={item.strMealThumb} alt="image not found" className="h-[450px] w-full rounded-3xl shadow-lg shadow-gray-600" />
                                <div className="mt-[30px] ml-[30px]">
                                    <ul className="flex gap-x-5 cursor-pointer">
                                        <li className={tabvalue === 'overview'} onClick={() => HandleTab('overview')} id="li">Overview</li>
                                        <li className={tabvalue === 'ingradients'} onClick={() => HandleTab('ingradients')} id="li">ingradients List</li>
                                        <li className={tabvalue === 'view'} onClick={() => HandleTab('view')} id="li">Watch Here</li>
                                        <li className={tabvalue === 'instruct'} onClick={() => HandleTab('instruct')} id="li">Instructions</li>
                                    </ul>
                                </div>
                                <div>
                                    {tabvalue === 'overview' && (
                                        <div className="ml-[30px] mt-[10px] font-serif">
                                            <h1 className="text-xl font-bold">Description:-</h1><hr />
                                            <div className="mt-[20px] flex flex-col gap-y-5">
                                                <h2><span className="font-bold">Meal:- </span> {item.strMeal}</h2>
                                                <h2><span className="font-bold">Category:-</span> {item.strCategory}</h2>
                                                <h2><span className="font-bold">Area:-</span> {item.strArea}</h2>
                                                <h2><span className="font-bold">Tags:-</span> {item.strTags}</h2>
                                                <h2><span className="font-bold">Alternatives:-</span> {item.strDrinkAlternate ? '' : 'No Avaliable'}</h2>
                                            </div>
                                        </div>
                                    )}
                                    {tabvalue === 'ingradients' && (
                                        <div className="ml-[30px] mt-[10px]">
                                            <h1>Ingradients</h1>
                                        </div>
                                    )}
                                    {tabvalue === 'view' && (
                                        <div className="ml-[30px] mt-[10px]">
                                            <h1 className="font-bold text-2xl">You are able to Watch Recipe</h1>
                                            <h1 className="font-bold text-xl">Watch Video:-</h1>
                                            {item.strYoutube && (
                                                <div className="relative pb-[56.25%] w-full h-0 overflow-hidden">
                                                    <iframe
                                                        className="absolute top-0 left-0 w-full h-full"
                                                        style={{ height: '400px',width: '700px' }}
                                                        src={`https://www.youtube.com/embed/${item.strYoutube.split("v=")[1]}`}
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {tabvalue === 'instruct' && (
                                        <div className="ml-[30px] mt-[10px]">
                                            kjhuyg
                                        </div>
                                    )}
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