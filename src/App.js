import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from "react-router-dom"

//pages
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Contact, { contactAction } from "./pages/help/Contact";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareersError from "./pages/careers/CareersError";

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
        <Route path="contact" element={<Contact />} action={contactAction} />
        <Route path="faq" element={<FaqPage />}/>
      </Route>
      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route index element={<Careers />} loader={careersLoader}/>
        <Route 
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          // errorElement={<CareersError />}
        />
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
