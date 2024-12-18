// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DevskiWebDev from './Components/DevskiWebDev';
import HomePage from './Components/HomePage.js';
import ProjectsPage from './Components/ProjectsPage.js';
import AboutUs from './Components/Aboutus.js';
import DevskiServices from './Components/DevskiServices.js';
import DevskiUiUX from './Components/DevskiUiUx.js';
import DevskiAppDev from './Components/DevskiAppDev.js';
import AppDevProjects from './Components/AppDevProjects.js';
import UiUxProjects from './Components/UiUxProjects.js';
import CompleteProjects from './Components/CompleteProjects.js';
import ContactUs from './Components/ContactUs.js';

function App() {
  return (
    <>
         <BrowserRouter>
        <Routes>
                      
            <Route exact path="/devskiUiUx" element={<DevskiWebDev />}>
            </Route>

            <Route exact path="/devskiWebdev" element={<DevskiUiUX />}>
            </Route>

            <Route exact path="/devskiAppDev" element={<DevskiAppDev />}>
            </Route>

            <Route exact path="/devskiServices" element={<DevskiServices/>}>
            </Route>

            <Route exact path="/completeProjects" element={<CompleteProjects />}>
            </Route>

            <Route exact path="/projectsPage" element={<ProjectsPage />}>
            </Route>

            <Route exact path="/appDevProjects" element={<AppDevProjects />}>
            </Route>

            <Route exact path="/UiUXProjects" element={<UiUxProjects />}>
            </Route>

            <Route exact path="/aboutus" element={<AboutUs />}>
            </Route>

            <Route exact path="/devski-contactus" element={<ContactUs />}>
            </Route>

            <Route exact path="/" element={<HomePage />}></Route>
        </Routes>

      </BrowserRouter>
      {/* <DevskiProjects /> */}
    </>
  );
}

export default App;
