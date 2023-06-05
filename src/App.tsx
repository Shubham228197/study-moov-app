import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieListPage from "./components/Cookies/CookieListPage";
import CookieManagement from "./components/Cookies/CookieManagement";
// import CookieErrorPage from "./components/ErrorPage/CookieErrorPage";
import PageNotFound from "./components/ErrorPage/PageNotFound";
import CollegeProfilePage from "./components/IndividualCollegeProfile/CollegeProfilePage";
import HomepageMain from "./components/MainComponent/Homepage/HomepageMain";
// import HomepageMain from "./components/MainComponent/Homepage/HomepageMain";
import AboutMoov from "./components/MainComponent/MainPage/AboutMoov";
import FormOverlay from "./components/MainComponent/MainPage/FormOverlay";
// import MainNavbar from './components/MainComponent/MainPage/MainNavbar'
// import HomepageFiltered from "./components/MainComponent/Homepage/HomepageFiltered";
// import HomepageMob from "./components/MainMobileView/HomepageMob";
import AboutMobView from "./components/MainMobileView/AboutMobView";
// import ProgramDetails from "./components/MainMobileView/ProgramDetails";
// import ConsultationForm from "./components/MainMobileView/ConsultationForm";
// import ConsultationResult from "./components/MainMobileView/ConsultationResult";
// import MobNavTextBlack from "./components/MainMobileView/MobNavTextBlack";
// import SearchFilterMob from "./components/MainMobileView/SearchFilterMob";
// import FormInput from "./components/MainComponent/MainPage/FormInput";
// import FilterFieldHome from "./components/MainComponent/Homepage/FilterFieldHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageMain/>}/>
        <Route path="/consulation" element={<FormOverlay/>}/>
        <Route path="/cookie" element={<CookieListPage/>}/>
        <Route path="/college-profile" element={<CollegeProfilePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/manage-cookie" element={<CookieManagement/>}/>
          <Route path="/about" element={<AboutMoov/>}/>
          <Route path="aboutus" element={<AboutMobView/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
