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
                                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="15" height="15" fill="grey">
                                    <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"/></svg></div>
                            </div>
                        </button>
                        <button className="btn w-100 border modal_round mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src="https://res.cloudinary.com/hamskid/image/upload/v1668255747/image_69_z5ngln.png" alt="object not found"/>
                                    <h6 className="fw-bold ms-2">walletConnect</h6>
                                </div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="15" height="15" fill="grey">
                                    <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"/></svg></div>
                            </div>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}