import { ModalBody } from "../modalbody"

export const FirstSection =()=>{
    return(
        <div className="section1_container">
            <ModalBody/>
            <div className="row justify-content-center">
                <div className="col-md-6 mb-5">
                    <div>
                        <div className="rent display-5 fw-bold mb-4">Rent a <span className="gradient_color">Place</span> away from <span className="gradient_color">Home</span> in the <span className="gradient_color">Metaverse</span></div>
                        <div className="mb-4"><h6 className="provide">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</h6></div>
                        <form className="d-flex align-items-center">
                            <input className=" location_input w-75 rounded me-0" type="text" placeholder="Search For Location"/>
                            <button className="btn btn-md btn_connect search text-white w-25 ms-0">Search</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 section1_nft_moblie">
                    <div className="d-flex section1_nft">
                        <div className="mt-5">
                            <div className="d-flex flex-column">
                                <img className="w-100 nft_img" src="https://res.cloudinary.com/hamskid/image/upload/v1668255745/image_4_pvkjwg.png" alt="object not found"/>
                                <img className="w-100 nft_img" src="https://res.cloudinary.com/hamskid/image/upload/v1668255742/image_6_jcgph2.png" alt="object not found"/>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex flex-column">
                                <img className="w-100 nft_img nft_img_right" src="https://res.cloudinary.com/hamskid/image/upload/v1668255747/image_3_acdz2h.png" alt="object not found"/>
                                <img className="w-100 nft_img nft_img_right" src="https://res.cloudinary.com/hamskid/image/upload/v1668255740/image_5_t6e5ey.png" alt="object not found"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}