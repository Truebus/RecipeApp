import { useState} from "react"
import { createContext } from "react"

const Theme = createContext();

export const HandleMode=({children})=>{
    const[modevalue,setModeValue] = useState(()=>{
        const value = localStorage.getItem('modevalue')
        return value?value:'light';
    })
      const Handle=()=>{
        setModeValue((prev)=>{
            const newvalue =  prev==='light'?'dark':'light';
            localStorage.setItem('modevalue',newvalue);
            return newvalue;
      })
    }
    return(
        <Theme.Provider value={{modevalue,Handle}}>
            {children}
        </Theme.Provider>
    )
}
export default Theme;