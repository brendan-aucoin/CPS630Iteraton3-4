import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

function ItemPage () {
    const params = useParams();
    const {slug} = params;
    return (
    <div> Item Page
        <h1>{slug}</h1>
    </div>)
}

export default ItemPage;