import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import AddProduct from './components/AddProduct/AddProduct';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/add' element={<AddProduct></AddProduct>} />
            <Route
              path='/products/update/:id'
              element={<UpdateProduct></UpdateProduct>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
