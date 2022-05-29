
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import Confirmation from './components/Confirmation';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  <>
   <Header />
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
     <Route path='/confirmation' element={<Confirmation />} />
   </Routes>
  </>
  );
}

export default App;
