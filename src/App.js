import './App.css';
//import Landing from './Pages/Landing';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Products from './Pages/Products';
import NewProducts from './Pages/NewProduct';
import Category from './Pages/Category';
import { Route, Routes } from 'react-router-dom';
import { API_URL } from './helper';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from './Reducers/data';
import React from 'react';

function App() {
  const role = useSelector((state) => state.dataReducer.role);
  const dispatch = useDispatch();
  const keepLogin = async () => {
    try {
      let token = localStorage.getItem('skincare_login');
      if (token) {
        let response = await axios.get(`${API_URL}/user/keep-login`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log("ini response.data keep login", response.data)
        localStorage.setItem('skincare_login', response.data.token);
        dispatch(loginAction(response.data))
      }
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    keepLogin();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product' element={<Products />} />
        <Route path='/new-product' element={<NewProducts />} />
        <Route path='/category' element={<Category />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
      
      </Routes>
    </div>


  );
}


export default App;

