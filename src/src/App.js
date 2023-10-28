import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

//pages
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path="about" element={<AboutPage />}/>
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App
