import { NavLink, Outlet } from "react-router-dom";

export default function CareersLayout() {
    return (
        <div>
            <div>Careers</div>
            <p>Careers details</p>  
            <Outlet />
        </div>
    )
}