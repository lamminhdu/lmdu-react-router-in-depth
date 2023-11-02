import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
    // const { id } = useParams()
    const career = useLoaderData()

    return (
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Lcation: {career.location}</p>
            <div className="details">
                <p>Details</p>
            </div>
        </div>
    )
}

// loader function
export const careerDetailsLoader = async( {params} ) => {
    const { id } = params

    const res = await fetch("http://localhost:4000/careers/" + id)
    
    if (!res.ok) {
        throw Error("Cound not fecth career data")
    }

    return res.json()
}
