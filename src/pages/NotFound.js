import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h3>Page not found</h3>

            <p>Go to <Link to="/">Homepage</Link>.</p>
        </div>
    )
}