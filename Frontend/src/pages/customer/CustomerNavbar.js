import React from "react";
import { Link } from "react-router-dom";

const CustomerNavbar = () => {

    let display = '';
    let displayProfile = '';

    if (localStorage.getItem("logInCustomer") === "true") {
        display = 'd-none';
        displayProfile = 'd-block';
    }
    else {
        display = 'd-block';
        displayProfile = 'd-none';
    }

    const handleLogOut = (e) => {
        localStorage.removeItem("customerName");
        localStorage.removeItem("customerImage");
        localStorage.removeItem("customerToken");
        localStorage.removeItem("logInCustomer");
        localStorage.removeItem("customerCity");
        localStorage.removeItem("customerAddress");
        localStorage.removeItem("customerEmail");
        localStorage.removeItem("customerPhone");
        localStorage.removeItem("customerPhone");
        sessionStorage.removeItem("cart");
        window.location.reload();
    }

    return (
        <>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark px-5">
                <Link className="navbar-brand" to="/">
                    Food Masters
                </Link>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav text-uppercase">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/restaurants">
                                Restaurants
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/orders">
                                Orders
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                        <li className={"nav-item " + display}>
                            <Link className="nav-link"
                                to="/login">
                                Log In
                            </Link>
                        </li>
                        <li className={"nav-item " + display}>
                            <Link className="nav-link"
                                to="/register">
                                Register
                            </Link>
                        </li>
                        <li className={"nav-item text-white ml-3 d-flex " + displayProfile}>
                            <img src={localStorage.getItem("customerImage")} width="40px" height="40px"
                                className={"rounded-circle shadow-lg " + displayProfile} />
                            <div className={"dropdown " + displayProfile}>
                                <a className="nav-link text-warning ml-1 dropdown-toggle"
                                    style={{
                                        cursor: "pointer",
                                        wordSpacing: "4px", fontWeight: "600", letterSpacing: "2px"
                                    }}
                                    data-toggle="dropdown">
                                    {localStorage.getItem("customerName")}
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

export default CustomerNavbar;
