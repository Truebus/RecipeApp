import { useContext } from "react"
import Theme from "../Context/ContextLight"

export const Home=()=>{
    const{modevalue} = useContext(Theme)
    return(
        <div className={`h-[500px] w-full ${modevalue==='light'?'bg-gradient-to-r from-white to-gray-100':'bg-black text-white'}`}>
            <div className="relative">
                <img src="https://img.freepik.com/premium-vector/happy-kids-jogging-healthy-cartoon-character-children-running-illustration-isolated-white_83111-437.jpg?w=2000" alt="image not available"
                className="h-[400px] w-[400px] absolute top-[100px]" id="running"/>
                <img src="https://png.pngtree.com/png-clipart/20231020/original/pngtree-fast-food-restaurant-png-image_13381023.png" alt="image not found"
                className="h-[450px] w-[400px] absolute top-3 left-[800px] animate-pulse"/>
            </div>
        </div>
    )
}