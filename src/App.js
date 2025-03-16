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
import ScrollToTop from './Components/ScrollToTop.js';


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
                      
            <Route exact path="/devski-devskiWebdev" element={<DevskiWebDev />}>
            </Route>

            <Route exact path= "/devski-devskiUiUx" element={<DevskiUiUX />}>
            </Route>

            <Route exact path="/devski-devskiAppDev" element={<DevskiAppDev />}>
            </Route>

            <Route exact path="/devski-devskiServices" element={<DevskiServices/>}>
            </Route>

            <Route exact path="/devski-completeProjects" element={<CompleteProjects />}>
            </Route>

            <Route exact path="/devski-projectsPage" element={<ProjectsPage />}>
            </Route>

            <Route exact path="/devski-appDevProjects" element={<AppDevProjects />}>
            </Route>

            <Route exact path="/devski-UiUXProjects" element={<UiUxProjects />}>
            </Route>

            <Route exact path="/devski-aboutus" element={<AboutUs />}>
            </Route>

            <Route exact path="/devski-contactus" element={<ContactUs />}>
            </Route>

            <Route exact path="/" element={<HomePage />}></Route>
       </Routes>
     </BrowserRouter>

      
      {/* <BrowserRouter>
        <Footer/>
      </BrowserRouter> */}
    </>
  );
}

export default App;
