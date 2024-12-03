import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import { Home } from './Components/Home'
import { Footer } from './Components/Footer'
import { Search } from './Components/Search'
import { DetailPage } from './Components/DetailPage'
import { HandleMode } from './Context/ContextLight'

function App() {

  return (
    <div>
      <HandleMode>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/recipe/:idMeal' element={<DetailPage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </HandleMode>
    </div>
  )
}

export default App
