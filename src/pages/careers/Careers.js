import { Link, useLoaderData } from "react-router-dom"

/* Use this Careers will not render any data on UI
export default function Careers() {
    const careers = useLoaderData()
    return (
        <div className="careers">
            {careers.map(career => {
                <Link to='/' key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            })}
        </div>
    )
}
*/

export default function Careers() {
    const careers = useLoaderData()
    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
    )
}

export const careersLoader = async () => {
    const res = await fetch("http://localhost:4000/careers")
    
    if (!res.ok) {
        throw Error("Could not fetch the list of careers")
    }

    return res
}
