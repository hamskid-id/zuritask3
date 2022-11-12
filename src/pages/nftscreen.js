import React from "react"
import { Layout } from "../components/layout";
import { NftChildren } from "../components/nftPageComponent/nftChildren";

export const NftScreen=()=>{
    return(
        <>
            <Layout children={<NftChildren/>}/>
        </>

    )
}