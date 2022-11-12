import { FirstSection } from "./firstSection"
import { LearnMoreSection } from "./learnmore"
import { SecondSection } from "./secondsection"

export const HomeChildren =()=>{
    return(
        <>
            <FirstSection/>
            <div className="d-flex align-items-center gradient_bg justify-content-around py-2">
                <div>
                    <img className="sub_img" src="https://res.cloudinary.com/hamskid/image/upload/v1668357666/Group_59537_bumkhx.png"alt="object not found"/>
                </div>
                <div>
                    <img className="sub_img" src="https://res.cloudinary.com/hamskid/image/upload/v1668357665/Group_4040_ebuh5g.png"alt="object not found"/>
                </div>
                <div>
                    <img className="sub_img" src="https://res.cloudinary.com/hamskid/image/upload/v1668357665/Frame_4041_g67tun.png"alt="object not found"/>
                </div>
            </div>
            <SecondSection/>
            <LearnMoreSection/>
        </>
    )
}