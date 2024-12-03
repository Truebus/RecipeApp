import { Link } from "react-router-dom"
export const NavBar=()=>{
    return(
        <div>
            <div className="bg-amber-200 text-xl flex justify-around items-center p-[10px] font-extrabold font-serif text-blue-800"
            id="shadow">
                <h1>Recipe App</h1>
                <ul className="inline-flex gap-x-4 ml-5">
                    <li className="hover:bg-amber-100 p-1 rounded-xl cursor-pointer"><Link to={'/'}>Home</Link></li>
                    <li className="hover:bg-amber-100 p-1 rounded-xl cursor-pointer"><Link to={'/search'}>Search</Link></li>
                </ul>
                <div className="inline-flex gap-x-5">
                <h2 className="hover:bg-amber-100 p-1 rounded-xl cursor-pointer">Sign In</h2>
                <h2 className="hover:bg-amber-100 p-1 rounded-xl cursor-pointer">Sign Up</h2>
                <h2 className="hover:bg-amber-100 p-1 rounded-xl cursor-pointer">Add Cart</h2>
                <h2 className="cursor-pointer">Light</h2>
                </div>
            </div>
        </div>
    )
}