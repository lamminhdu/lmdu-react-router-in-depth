import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function AboutPage() {
    const [user, setUser] = useState("Andrew")
    
    if (!user) {
        return <Navigate to="/" replace={true}/>
    }

    return (
        <div>
            <div>About page</div>
            <p>Content</p>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}