import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ShopCategory } from './Components/Pages/ShopCategory';
import { Cart } from './Components/Pages/Cart';
import {Product} from './Components/Pages/Product';
import  LoginSignup  from './Components/Pages/LoginSignup';
import  Login  from './Components/Pages/Login';
import {Shop} from './Components/Pages/Shop';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import {Practice} from './Components/Practice';
import Signup from './Components/Pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Shop/>}/>
        < Route path='/mens' element ={<ShopCategory banner={men_banner} category="men"/>}/>
        < Route path='/kids' element ={<ShopCategory  banner ={kid_banner} category="kid"/>}/>
        < Route path='/women' element ={<ShopCategory banner = {women_banner} category="women"/>}/>
       <Route path='/product' element ={<Product/>}>
            <Route path=':productId' element = {<Product/>}/>
         </Route>

         <Route path = '/cart' element ={<Cart/>}/>
         <Route path = '/signup' element ={<LoginSignup/>}/>
         <Route path = '/login' element ={<Login/>}/>

      </Routes>
      {/* <Practice/> */}
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}



export default App;
