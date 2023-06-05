import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieListPage from "./components/Cookies/CookieListPage";
import CookieManagement from "./components/Cookies/CookieManagement";
import CookieErrorPage from "./components/ErrorPage/CookieErrorPage";
import PageNotFound from "./components/ErrorPage/PageNotFound";
import CollegeProfilePage from "./components/IndividualCollegeProfile/CollegeProfilePage";
import HomepageMain from "./components/MainComponent/Homepage/HomepageMain";
import AboutMoov from "./components/MainComponent/MainPage/AboutMoov";
import FormOverlay from "./components/MainComponent/MainPage/FormOverlay";
import AboutMobView from "./components/MainMobileView/AboutMobView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomepageMain />} />
          <Route path="/consulation" element={<FormOverlay />} />
          <Route path="/cookie" element={<CookieListPage />} />
          <Route path="/college-profile" element={<CollegeProfilePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/manage-cookie" element={<CookieManagement />} />
          <Route path="/about" element={<AboutMoov />} />
          <Route path="/aboutus" element={<AboutMobView />} />
          <Route path="/cookie-error" element={<CookieErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
