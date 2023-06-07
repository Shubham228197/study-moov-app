import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieListPage from "./components/Cookies/CookieListPage";
import CookieManagement from "./components/Cookies/CookieManagement";
import CookieErrorPage from "./components/ErrorPage/CookieErrorPage";
import PageNotFound from "./components/ErrorPage/PageNotFound";
import CollegeProfilePage from "./components/IndividualCollegeProfile/CollegeProfilePage";
import HomepageMain from "./components/MainComponent/Homepage/HomepageMain";
import FormOverlay from "./components/MainComponent/MainPage/FormOverlay";
import HomepageFiltered from "./components/MainComponent/Homepage/HomepageFiltered";
import PrivacyPolicy from "./components/MainComponent/MainPage/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomepageMain />} />
          <Route path="/filtered" element={<HomepageFiltered />} />
          <Route path="/consulation" element={<FormOverlay />} />
          <Route path="/cookie" element={<CookieListPage />} />
          <Route path="/college-profile" element={<CollegeProfilePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/manage-cookie" element={<CookieManagement />} />
          <Route path="/cookie-error" element={<CookieErrorPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
