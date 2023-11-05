import { NavLink, useRouteError } from "react-router-dom";

export default function CareersError() {
    const error = useRouteError()
    return (
        <div>
            <div>{error.message}</div>
            <NavLink to="/">Go to home page</NavLink>
        </div>
    )
}