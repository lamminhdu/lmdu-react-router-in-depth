import { NavLink, useLoaderData } from "react-router-dom"

// export default function Careers() {
//     const data = useLoaderData()
//     return (
//         <div>
//             {data.map(career => {
//                 return (
//                     <div>
//                         <NavLink to={career.id}>{career.title}</NavLink>
//                         <div>{career.location}</div>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
export default function Careers() {
    const careers = useLoaderData()
    return (
        <div className="careers">
            {careers.map(career => (
                <NavLink to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </NavLink>
            ))}
        </div>
    )
}

export const careersLoader = async () => {
    const res = await fetch("http://localhost:4000/careers")

    if (!res.ok) {
        return Error("Could not fecth data")
    }

    return res.json()
}