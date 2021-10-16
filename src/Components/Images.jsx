import React from 'react'
import { useLocation, useParams } from 'react-router-dom';


const Images = (Props) => {
    var location =useLocation();
    var {iname}=useParams();
    let data="";

    if (iname==="ankush")

    {
        data="my important password is 1177";

    }
    
    return (

        <>
            <h1> {Props.name} image component is running</h1>
            <h1> {location.pathname} </h1>
            <h2> {data}</h2>

        </>

    )   
}

export default Images;
