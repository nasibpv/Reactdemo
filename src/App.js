import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import { Header } from './Components/Header';
import Footer from './Components/Footer';
import ReadMore from './Components/ReadMore';
import Productview from './Components/Productview';
import Productcategory from './Components/Productcategory';
import {Addcards} from './Components/Addcards';
import HideNaveBar from './Components/HideNaveBar';
import {Wishlist} from './Components/Wishlist';

function App() {
  return (
    <div className="App">
      <HideNaveBar>
        <Header/>
        </HideNaveBar>
      <Routes>
        <Route path='/xinstore-redux-' element={<Home/>}></Route>
        <Route path='/product-category/:id' element={<Productcategory/>}></Route>
        <Route path='/product/:id' element={<Productview/>}></Route>
        <Route path='readmore' element={<ReadMore/>}></Route>
        <Route path='/addcart' element={<Addcards/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
      </Routes> 
      <Footer/>
      
    </div>
  );
}

export default App;
