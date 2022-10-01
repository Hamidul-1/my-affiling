
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import AllCategories from './Pages/All Categories/AllCategories';
import Navbar2 from './Pages/Shared/Navbar2';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Navbar2></Navbar2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="allCategories" element={<AllCategories />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="login" element={< />} />
        <Route path="login" element={<Login />} />
        <Route path="login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
