import React from "react"
import { Layout } from "../components/layout";
import { PlaceToStayChildren } from "../components/placeToStayComponent/placeToStayChildren";

export const PlaceToStayScreen=()=>{
    return(
        <>
            <Layout children={<PlaceToStayChildren/>}/>
        </>

    )
}