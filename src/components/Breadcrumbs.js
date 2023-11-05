import { NavLink, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation()
    let currentLink = ""
    // console.log(location)
    const crumbs = location.pathname.split("/")
        .filter(crumb => crumb !== "")
        .map(crumb => {
            currentLink += `/${crumb}`
            return <NavLink key={currentLink} to={currentLink}>{crumb}</NavLink>
        })
    
    return (
        <div>
            {crumbs}
        </div>
    )
}