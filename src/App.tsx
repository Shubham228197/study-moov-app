import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieListPage from "./components/Cookies/CookieListPage";
import CookieManagement from "./components/Cookies/CookieManagement";
import CookieErrorPage from "./components/ErrorPage/CookieErrorPage";
import PageNotFound from "./components/ErrorPage/PageNotFound";
import CollegeProfilePage from "./components/IndividualCollegeProfile/CollegeProfilePage";
import HomepageFiltered from "./components/MainComponent/Homepage/HomepageFiltered";
import ProgramDetails from "./components/MainMobileView/ProgramDetails";
import HomepageMoov from "./components/ResponsiveComponents/HomepageMoov";
import FormMoov from "./components/ResponsiveComponents/FormMoov";
import PrivacyPolicyMoov from "./components/ResponsiveComponents/PrivacyPolicyMoov";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomepageMoov />} />
          <Route path="/filtered" element={<HomepageFiltered />} />
          <Route path="/consulation" element={<FormMoov />} />
          <Route path="/cookie" element={<CookieListPage />} />
          <Route path="/college-profile" element={<CollegeProfilePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/manage-cookie" element={<CookieManagement />} />
          <Route path="/cookie-error" element={<CookieErrorPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyMoov />} />
          <Route path="/program-details-mob" element={<ProgramDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
