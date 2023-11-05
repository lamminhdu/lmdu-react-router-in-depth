import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function RootLayout() {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="help">Help</NavLink>
                <NavLink to="careers">Careers</NavLink>
            </nav>
            <Breadcrumbs />
            <Outlet />
        </header>
    )
}