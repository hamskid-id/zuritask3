import React from "react"
import { HeaderComponent } from "./headerComponent"
import { FooterComponent } from "./footerComponent"
export const Layout=({children})=>{
    return(
        <>
            <header className="header_container">
                <HeaderComponent/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <FooterComponent/>
            </footer>
        </>
    )
}