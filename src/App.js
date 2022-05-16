import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Services from './pages/Services';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/service" element={<Services></Services>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
