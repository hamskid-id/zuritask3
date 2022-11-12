import { FirstSection } from "./firstSection"
import { LearnMoreSection } from "./learnmore"
import { SecondSection } from "./secondsection"

export const HomeChildren =()=>{
    return(
        <>
            <FirstSection/>
            <div>
                <img src="https://res.cloudinary.com/hamskid/image/upload/v1668257089/Frame_137_zwn5eu.png" className="w-100" alt="object not found"/>
            </div>
            <SecondSection/>
            <LearnMoreSection/>
        </>
    )
}