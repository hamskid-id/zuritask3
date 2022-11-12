import React from "react"
import { HomeChildren } from "../components/HomePageComponent/homeChildren";
import { Layout } from "../components/layout";

export const HomeScreen=()=>{
    return(
        <>
            <Layout children={<HomeChildren/>}/>
        </>

    )
}