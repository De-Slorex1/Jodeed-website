import './App.css';
import Navlinks from './components/Navlinks/navlink.component';
import { Routes, Route } from 'react-router-dom';
import Home from './Homepage/home.component';
import Package from './components/packages.component';
import Service from './components/service.component';
import About from './components/about.component';
import Contact from './components/contact.component';



function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Navlinks />}>
              <Route index element={<Home />}/>
              <Route index path='/package' element={<Package />}/>
              <Route index path='/service' element={<Service />}/>
              <Route index path='/about' element={<About />}/>
              <Route index path='/contact' element={<Contact />}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
