import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layout/RouteLayout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import HelpLayout from "./layout/HelpLayout";
import Contact, { contactAction } from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layout/CareersLayout";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareersDetails, { careerDetailsLoader } from "./pages/careers/CareersDetails";
import CareersError from "./pages/careers/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="contact" element={<Contact />} action={contactAction}/>
        <Route path="faq" element={<Faq />}/>
      </Route>
      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError/>}>
        <Route index element={<Careers/>} loader={careersLoader}/>
        <Route path=":id" element={<CareersDetails/>} loader={careerDetailsLoader}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
