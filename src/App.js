import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from "react-router-dom"

//pages
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Contact from "./pages/help/Contact";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";

//layouts
import RootLayout from "./layouts/RouteLayOut";
import FaqPage from "./pages/help/Faq";
import CareersLayout from "./layouts/CareersLayout";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />}/>
      <Route path="about" element={<AboutPage />}/>
      <Route path="help" element={<HelpLayout />}>
        <Route path="contact" element={<Contact />}/>
        <Route path="faq" element={<FaqPage />}/>
      </Route>
      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careersLoader}/>
        <Route 
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
