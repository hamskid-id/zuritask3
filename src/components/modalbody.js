export const ModalBody=()=>{
    return(
        <>
            <div className="modal fade modal_round" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modal_round">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Connect Wallet</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h6 className="modal_choose">choose your preferred wallet:</h6>
                        <button className="btn w-100 border  modal_round mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src="https://res.cloudinary.com/hamskid/image/upload/v1668255746/image_66_hesphz.png" alt="object not found"/>
                                    <h6 className="fw-bold ms-2">Metamask</h6>
                                </div>
                                <div><img src="https://res.cloudinary.com/hamskid/image/upload/v1668358689/Vector_5_gjaxxm.png" alt="object not found"/>
                                </div>
                                </div>
                        </button>
                        <button className="btn w-100 border modal_round mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src="https://res.cloudinary.com/hamskid/image/upload/v1668255747/image_69_z5ngln.png" alt="object not found"/>
                                    <h6 className="fw-bold ms-2">walletConnect</h6>
                                </div>
                                <div><img src="https://res.cloudinary.com/hamskid/image/upload/v1668358689/Vector_5_gjaxxm.png" alt="object not found"/></div>
                            </div>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}