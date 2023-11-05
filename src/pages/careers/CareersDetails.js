import { useLoaderData } from "react-router-dom"

export default function CareersDetails() {
    const career = useLoaderData()
    return (
        <div>
            <p>{career.title}</p>
            <p>{career.salary}</p>
            <p>{career.location}</p>
        </div>
    )
}

export const careerDetailsLoader = async ( {params} ) => {
    console.log(params.id)
    const res = await fetch("http://localhost:4000/careers/" + params.id)
    
    if (!res.ok) {
        throw Error("Could not fetch that career")
    }

    return res.json()
}