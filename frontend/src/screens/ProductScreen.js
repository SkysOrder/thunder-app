import React from "react";
import { useParams } from "react-router-dom";

export default function ProductScreen(){
    let { id } = useParams();
    return <div>Id is {id}</div>;
}