import { api } from "../api"
import { ModalBody } from "../modalbody";
export const NftChildren=()=>{
    return(
        <div className="section2_container">
            <div className=" justify-content-between py-2 mb-4 align-items-center web-query">
                <h6>Restaurant</h6>
                <h6>Cottage</h6>
                <h6>Castle</h6>
                <h6>fantast City</h6>
                <h6>Carbins</h6>
                <h6>off-grid</h6>
                <h6>Farm</h6>
                <button className="btn border rounded">
                   Location <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  width="15">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </button>
            </div>
            <ModalBody/>
            <div className="row w-100 m-auto">
                {
                    api.nft_collections.map((nft,index)=>{
                        const {name,mbt,distance,stay_day,img}  = nft;
                        return(
                            <div key={index} className="col-lg-3 mb-4 col-md-4">
                                <div className="border nft_border p-4">
                                    <img className="w-100 mb-3" src={img} alt="object not found"/>
                                        <div className="d-flex flex-column">
                                            <div className="d-flex justify-content-between">
                                                <h6>{name}</h6>
                                                <h6>{mbt}MBT per night</h6>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <h6>{distance}kw away</h6>
                                                <h6>available for {stay_day}weeks Stay</h6>
                                            </div>
                                            <div className="d-flex w-50 justify-content-between">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20" height="20" fill="#A02279">
                                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"  width="20" height="20" fill="#A02279">
                                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"  width="20" height="20" fill="#A02279">
                                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"  width="20" height="20" fill="#A02279">
                                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                </svg>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}