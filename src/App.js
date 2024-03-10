import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';

import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop';
import Help from './components/Help';
import YourCart from './components/YourCart';

import OnlineOrder from './components/OnlineOrder';
import ContactForm from './components/ContactForm';
import Shoppingdetails from './components/Shoppingdetails';
import Shopping from './components/Shopping';
import WatchStore from './components/WatchStore';
import Header from './components/Header';




function App() {
  return (
    <>

      <Router>

      <Header/>




        <Routes>

          <Route path="/" element={<Home />} ></Route>
          <Route path="/home" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/shop" element={<Shop />} ></Route>
          <Route path="/shop/watchstore" element={<WatchStore />} ></Route>
          {/* <Route path="/1" element={<YourCart />} ></Route> */}
          <Route path="/shop/about" element={<Home />} ></Route>
          <Route path="/help" element={<Help />} ></Route>
          <Route path="/help/contactform" element={<ContactForm />} ></Route>
          <Route path="/help/onlineorder" element={<OnlineOrder/>} ></Route>
          <Route path="/cart" element={<YourCart />} ></Route>
          <Route path="/cart/shopping" element={<Shopping />} ></Route>

        </Routes>


      </Router>
    </>
  );
}

export default App;
