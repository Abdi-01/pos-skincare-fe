import './App.css';
import Landing from './Pages/Landing';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Products from './Pages/Products';
import NewProducts from './Pages/NewProduct';
import Category from './Pages/Category';
import { Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
<Route path='/regis' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product' element={<Products />} />
        <Route path='/new-product' element={<NewProducts />} />
        <Route path='/category' element={<Category />} />
<Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>


  );
}

export default App;
