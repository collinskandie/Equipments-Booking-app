import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EFPage from './Pages/EFPage'
import StudioBooking from './Pages/StudioBooking';
import Others from './Pages/Others'
import NavbarTop from './Components/Navbar'
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">    
    <BrowserRouter>
    <NavbarTop/>
      <Routes>      
        <Route path='/' element={<EFPage/>}/>
        <Route path='/studio' element={<StudioBooking/>}></Route>
        <Route path='/other' element={<Others/>}></Route>
        <Route path='*' element={<Others/>}></Route>
      </Routes>    
    </BrowserRouter>
    </div>
  );
}

export default App;
