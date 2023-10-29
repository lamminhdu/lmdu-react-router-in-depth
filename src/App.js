import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom"

//pages
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";

//layouts
import RootLayout from "./layouts/RouteLayOut";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />}/>
      <Route path="/about" element={<AboutPage />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
