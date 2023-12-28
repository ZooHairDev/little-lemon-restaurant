import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import Login from './Login';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Menu from './Menu';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
      <Route path='/reservations' element={<Reservations/>}></Route>
      <Route path='/order-online' element={<OrderOnline/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </>
  );
}

export default App;
