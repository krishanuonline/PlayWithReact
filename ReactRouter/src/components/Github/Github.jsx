import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github () {
    
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/krishanuonline')
    //     .then(response => response.json()
    //     .then(data =>{
    //         console.log(data)
    //         setData(data);}
    //     ));
    // }, []);

    //optimize way of data loading api call and all through loader function
    const data = useLoaderData();


    return (
        <div className="text-center m-4 bg-gray-700 text-white p-4 ">
            Github Folowers: {data.followers}
            <img src={data.avatar_url} alt="" />
        </div>
    )
}

export default Github;


export const githubInfoLoader = async () => {
   const response =  await fetch('https://api.github.com/users/krishanuonline')
    return response.json();
}