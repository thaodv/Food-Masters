import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './SellerLogin.css';

const SellerLogin = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginStatus, setLoginStatus] = useState(false);
    const history = useHistory();

    const sellerLogin = (e) => {

        e.preventDefault();

        let logInInfo = {
            email: email,
            password: password
        };

        axios.post('http://localhost:4000/postRestuarents/login', logInInfo)
            .then((response) => {
                if (!response.data.auth) {
                    setLoginStatus(false);
                }
                else {
                    setLoginStatus(true);
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("isSeller", response.data.result.isSeller);
                    localStorage.setItem("image", response.data.result.image);
                    localStorage.setItem("name", response.data.result.name);
                    localStorage.setItem("logInSeller", true);
                    history.push(`seller/${response.data.result.name}`);
                }
            });
    }

    // const sellerAuthenticate = () => {
    //     axios.get('http://localhost:4000/isSellerAuth', {
    //         headers: {
    //             "x-access-token": localStorage.getItem("token")
    //         }
    //     }).then((response) => {
    //         console.log(response);
    //     })
    // }

    return (
        localStorage.getItem("logInSeller") === "true" ? <Redirect to={`/business/seller/${localStorage.getItem("name")}`} ></Redirect> : (
            <div>
                <section className="login-block">
                    <div className="container login-container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-5 login-sec">
                                <h2 className="text-center">Login Now As Seller</h2>
                                <form className="login-form" onSubmit={sellerLogin} class="need-validation">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1" className="text-uppercase">Email</label>
                                        <input type="text" className="form-control" onChange={(e) => { setEmail(e.target.value) }} required />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1" class="text-uppercase">Password</label>
                                        <input type="password" className="form-control"
                                            onChange={(e) => { setPassword(e.target.value) }} required />
                                    </div>
                                    <button type="submit" className="btn btn-login mt-3 float-left">Log In</button>
                                </form>
                            </div>
                        </div>
                        <div className="d-block pb-5">
                            <div className="row d-flex flex-column align-items-center">
                                <h2 className="text-uppercase text-dark">Not A Seller Yet ?</h2>
                                <Link className="btn btn-success mt-3" to="/business/addRestaurant">Register As A Seller</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    )
}

export default SellerLogin
