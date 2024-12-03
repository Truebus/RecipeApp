import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useContext } from "react";
import Theme from "../Context/ContextLight";

export const Footer=()=>{
    const{modevalue} = useContext(Theme);
    return(
        <div className={`h-[300px] w-full p-[5px] ${modevalue==='light'?'bg-sky-300':'bg-black text-white'}`}>
        <h1 className="text-left ml-[110px] mt-[20px] text-red-600 font-bold font-serif text-3xl">Recipe</h1>
            <div className="flex justify-around p-[10px]">
                <ul className="text-lg cursor-pointer">
                    <h3 className="font-bold text-xl">About Recipe</h3>
                    <li className="underline hover:text-red-700">Who We Are</li>
                    <li className="underline hover:text-red-700">Blog</li>
                    <li className="underline hover:text-red-700">Work With Us</li>
                    <li className="underline hover:text-red-700">Investor Relations</li>
                    <li className="underline hover:text-red-700">Report Fraud</li>
                    <li className="underline hover:text-red-700">Press Kit</li>
                </ul>
                <ul className="text-lg cursor-pointer">
                    <h3 className="font-bold text-xl">Contact Us</h3>
                    <li className="underline hover:text-red-700">Help & Support</li>
                    <li className="underline hover:text-red-700">Partner With Us</li>
                    <li className="underline hover:text-red-700">Ride With Us</li>
                </ul>
                <ul className="text-lg cursor-pointer">
                    <h3 className="font-bold text-xl">Legal</h3>
                        <li className="underline hover:text-red-700">Terms & Coditios</li>
                        <li className="underline hover:text-red-700">Cookie Policy</li>
                        <li className="underline hover:text-red-700">Privacy Policy</li>
                </ul>
                <ul>
                    <h3 className="font-bold text-xl">Social Links</h3>
                    <div className="flex text-3xl gap-x-2">
                    <li ><FaInstagramSquare /></li>
                    <li><FaSquareTwitter /></li>
                    <li><FaFacebookSquare /></li>
                    <li><FaYoutube /></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}