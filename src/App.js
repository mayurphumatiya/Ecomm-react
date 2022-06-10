import './App.css';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Products from './pages/Products';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/home' element={<HomePage />} />
    <Route path='/products' element={<Products />} />
    </Routes>
    </>
    
     
 
    
  );
}

export default App;
