import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ReadMore from './Components/ReadMore';
import Productview from './Components/Productview';
import Productcategory from './Components/Productcategory';
// import Product from './Components/Product';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/Reactdemo' element={<Home/>}></Route>
        <Route path='/product-category/:id' element={<Productcategory/>}></Route>
        {/* <Route path='/product/:id' element={<Product/>}></Route> */}
        <Route path='/product/:id' element={<Productview/>}></Route>
        <Route path='readmore' element={<ReadMore/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
