import React from "react";
import { useParams } from "react-router-dom";

export default function Profile(){
    const {id, param} = useParams();

    return(
        <h1>Profile | ID: {id} | Params: {param} </h1>
    );
}