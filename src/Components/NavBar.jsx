import { Link } from "react-router-dom"
import Theme from "../Context/ContextLight"
import { useContext } from "react"
import { FaSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";

export const NavBar=()=>{
   const {modevalue,Handle} = useContext(Theme);
    return(
        <div>
            <div className={`${modevalue==='light'?'bg-amber-200':'bg-black text-white'} text-xl flex justify-around items-center p-[10px] font-extrabold font-serif text-blue-800`}
            id="shadow">
                <h1>Recipe App</h1>
                <ul className="inline-flex gap-x-4 ml-5">
                    <li className="hover:bg-amber-100 p-1 rounded-xl cursor-pointer"><Link to={'/'}>Home</Link></li>
                    <li className="hover:bg-amber-100 p-1 rounded-xl cursor-pointer"><Link to={'/search'}>Search</Link></li>
                </ul>
                <div className="inline-flex gap-x-5">
                <h2 className="cursor-pointer mt-2" onClick={Handle}>{modevalue==='light'?<IoMoon />:<FaSun />}</h2>
                </div>
            </div>
        </div>
    )
}