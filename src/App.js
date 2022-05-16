import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import {publicRoute} from './routes/PublicRoute';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import PrivateRoute from './Authentication/PrivetRoute';
import Services from './pages/Services';
import About from './pages/About';

function App() {

  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
    <div className="">
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route element={<PrivateRoute />}>
            <Route path='/services' element={<Services></Services>}></Route>
            <Route path='/about' element={<About></About>}></Route>
                    {/* more privet route here  */}
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
