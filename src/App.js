import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Products from "./pages/Products.jsx"
import Cart from "./pages/Cart.jsx"
import Home from "./pages/Home.jsx"
import { ShopContextProvider } from './context/Shop-context';

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
      <BrowserRouter basename='/admin'>
      <NavBar />
        <Routes>
          <Route path='' element={<Home />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products /> }/>
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
