import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

//pages
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <h1>React Router</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App
