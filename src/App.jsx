
import './App.css'
import Landingpage from './store/pages/Landingpage'
import { Route,Routes } from 'react-router-dom'
import Mobilespage from './store/pages/Mobilespage'
import Womanspage from './store/pages/Womanspage'
import Watchespage from './store/pages/Watchespage'
import { Tvpage } from './store/pages/Tvpage'
import Speakerspage from './store/pages/Speakerspage'
import Menspage from './store/pages/Menspage'
import Kitchenpage from './store/pages/Kitchenpage'
import Furniturepage from './store/pages/Furniturepage'
import Fridgepage from './store/pages/Fridgepage'
import Computerspage from './store/pages/Computerspage'
import { Bookspage } from './store/pages/Bookspage'
import Acpage from './store/pages/Acpage'
import Mobilesingle from './singles/Mobilesingle'
import Laptopsingle from './singles/Laptopsingle'
import Womansingle from './singles/Womansingle'
import Menssingle from './singles/Menssingle'
import Fridgesingle from './singles/Fridgesingle'
import Kitchensingle from './singles/Kitchensingle'
import Acsingle from './singles/Acsingle'
import Bookssingle from './singles/Bookssingle'
import Speakersingle from './singles/Speakersingle'
import Furnituresingle from './singles/Furnituresingle'
import Watchessingle from './singles/Watchessingle'
import Tvsingle from './singles/Tvsingle'




const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/mobiles' element={<Mobilespage/>}/>
        <Route path='/womans' element={<Womanspage/>}/>
        <Route path='/watches' element={<Watchespage/>}/>
        <Route path='/tvs' element={<Tvpage/>}/>
        <Route path='/speakers' element={<Speakerspage/>}/>
        <Route path='/mens' element={<Menspage/>}/>
        <Route path='/kitchen' element={<Kitchenpage/>}/>
        <Route path='/furniture' element={<Furniturepage/>}/>
        <Route path='/fridges' element={<Fridgepage/>}/>
        <Route path='/computers' element={<Computerspage/>}/>
        <Route path='/books' element={<Bookspage/>}/>
        <Route path='/ac' element={<Acpage/>}/>

        <Route path='/mobiles/:id' element={<Mobilesingle/>}/>
        <Route path='/computers/:id' element={<Laptopsingle/>}/>
        <Route path='/womans/:id' element={<Womansingle/>}/>
        <Route path='/watches/:id' element={<Watchessingle/>}/>
        <Route path='/tvs/:id' element={<Tvsingle/>}/>
        <Route path='/speakers/:id' element={<Speakersingle/>}/>
        <Route path='/mens/:id' element={<Menssingle/>}/>
        <Route path='/kitchen/:id' element={<Kitchensingle/>}/>
        <Route path='/furniture/:id' element={<Furnituresingle/>}/>
        <Route path='/fridges/:id' element={<Fridgesingle/>}/>
        <Route path='/books/:id' element={<Bookssingle/>}/>
        <Route path='/ac/:id' element={<Acsingle/>}/>
        </Routes>
      
    </div>
  )
}

export default App