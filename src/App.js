// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DevskiWebDev from './Components/DevskiWebDev';
import HomePage from './Components/HomePage.js';
import ProjectsPage from './Components/ProjectsPage.js';
import AboutUs from './Components/Aboutus.js';
import DevskiServices from './Components/DevskiServices.js';

function App() {
  return (
    <>
         <BrowserRouter>
        <Routes>
                      
            <Route exact path="/devskiWebDev" element={<DevskiWebDev />}>
            </Route>

            <Route exact path="/devskiServices" element={<DevskiServices/>}>
            </Route>

            <Route exact path="/projectsPage" element={<ProjectsPage />}>
            </Route>

            <Route exact path="/aboutus" element={<AboutUs />}>
            </Route>

            <Route exact path="/" element={<HomePage />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
