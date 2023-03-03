import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useDispatch } from "react-redux";
import { API_URL } from "./helper";
import { loginAction } from "./reducers/data";
import axios from "axios";


function App() {
  const dispatch = useDispatch();
  const keepLogin = async () => {
    try {
      let token = localStorage.getItem("pmf_login");
      console.log(token);
      if (token) {
        let response = await axios.get(`${API_URL}/user/keeplogin`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        console.log("Response data keeplogin:", response.data);
        localStorage.setItem("pmf_login", response.data.token);
        dispatch(loginAction(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    keepLogin();
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Landing />} /> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>

  );
}

export default App;
