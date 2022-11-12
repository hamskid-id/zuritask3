import { Link } from "react-router-dom";
export const HeaderComponent =()=>{
   
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                            <div className="d-flex navbar-brand">
                                <span className="mb-0"><img className="badge_img"  src="https://res.cloudinary.com/hamskid/image/upload/v1668255747/Vector_5_agrnby.png" alt="object not found"/></span>
                                <h1 className="head-badge fw-bold" >Metabnb</h1>
                            </div>  
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                <Link className="nav-link text-dark link_li" to="/" >Home</Link>
                                                </li>
                                                <li className="nav-item">
                                                <Link className="nav-link text-dark link_li" to="/PlaceToStay" >Place To Stay</Link>
                                                </li>
                                                <li className="nav-item">
                                                <Link className="nav-link text-dark  link_li" to="/nft" >NFTs</Link>
                                                </li>
                                                <li className="nav-item">
                                                <Link className="nav-link text-dark link_li" to="/communty" >Community</Link>
                                                </li>
                                        </ul>
                                        <span className="navbar-text">
                                            <button className="btn btn-md btn_connect text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">connect wallet</button>
                                        </span>
                                    
                            </div>
                </div>
            </nav>
        </>
    )
}