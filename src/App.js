import './App.css';
import Landing from './Pages/Landing';
import Register from './Pages/Register';
import Checkout from './Pages/Checkout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/regis' element={<Register />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  );
}

export default App;
