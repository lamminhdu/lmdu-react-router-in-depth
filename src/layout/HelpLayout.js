import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
    return (
        <header>
            <nav>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="faq">FAQ</NavLink>
            </nav>
            <Outlet />
        </header>
    )
}