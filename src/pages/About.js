import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function AboutPage() {
    const [user, setUser] = useState("Andrew")

    if (!user) {
        return (
            <Navigate to="/" replace={true} />
        )
    }
    
    return (
        <div className="about">
            <h2>About</h2>
            <p>About content</p>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}