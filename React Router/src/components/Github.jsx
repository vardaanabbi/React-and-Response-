import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github()
{
//     const [data , setData] = useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/hiteshchoudhary')
//         .then(response => response.json())
//         .then( data => {
//             console.log(data) ;
//             setData(data)
//      } )
//     }
//     , 
//     []
// )

    const data = useLoaderData()

    return (

        <div className="text-center m-4 bg-gray-600 text-white p4 text-3xl">
        Github Followers Count = {data.followers}
        <img src="data.avatar_url" alt="Github-picture" width={300} />
        </div>
    )
}

export default Github

export const GithubLoaderInfo = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json() 
}