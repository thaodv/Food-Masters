import React from "react";
import { Link, useHistory } from "react-router-dom";

const SellerNavbarLoggedIn = () => {

    let history = useHistory();

    const handleLogOut = () => {
        localStorage.removeItem("logInSeller");
        localStorage.removeItem("image");
        localStorage.removeItem("image");
        localStorage.removeItem("name");
        localStorage.removeItem("token");

        history.push('/business/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark px-5">
                <Link className="navbar-brand">
                    Food Masters
                </Link>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav text-uppercase">
                        <li className="nav-item">
                            <Link class="nav-link" to="/business/seller/orders">
                                Orders
                            </Link>
                        </li>
                        <li className="nav-item text-white ml-3 d-flex">
                            <img src={localStorage.getItem("image")} width="40px" height="40px" className="rounded-circle shadow-lg" />
                            <div className="dropdown">
                                <a className="nav-link text-warning ml-1 dropdown-toggle"
                                    style={{
                                        cursor: "pointer",
                                        wordSpacing: "4px", fontWeight: "600", letterSpacing: "2px"
                                    }}
                                    data-toggle="dropdown">
                                    {localStorage.getItem("name")}
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item text-dark"
                                        style={{ cursor: "pointer" }}
                                        onClick={handleLogOut}
                                    >
                                        Log Out
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default SellerNavbarLoggedIn;
