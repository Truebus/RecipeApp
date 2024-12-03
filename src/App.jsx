import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import { Home } from './Components/Home'
import { Footer } from './Components/Footer'
import { Search } from './Components/Search'
import { DetailPage } from './Components/DetailPage'

function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/recipe/:idMeal' element={<DetailPage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
