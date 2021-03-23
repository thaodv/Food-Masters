import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './CustomerLogin.css';


const CustomerLogin = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginStatus, setLoginStatus] = useState(false);

    const history = useHistory();

    const customerLogin = (e) => {
        e.preventDefault();

        let logInInfo = {
            email: email,
            password: password
        };

        axios.post('http://localhost:4000/users/login', logInInfo)
            .then((response) => {
                if (!response.data.auth) {
                    setLoginStatus(false);
                }
                else {
                    setLoginStatus(true);
                    localStorage.setItem("customerToken", response.data.token);
                    localStorage.setItem("customerImage", response.data.result.image);
                    localStorage.setItem("customerName", response.data.result.name);
                    localStorage.setItem("customerEmail", response.data.result.email);
                    localStorage.setItem("customerPhone", response.data.result.phone);
                    localStorage.setItem("customerAddress", response.data.result.address);
                    localStorage.setItem("customerCity", response.data.result.city);
                    localStorage.setItem("logInCustomer", true);
                    // history.push(`seller/${response.data.result.name}`);
                    history.goBack();
                }
            });
    }


    return (
        <>
            <section className="login-block">
                <div className="container login-container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-5 login-sec">
                            <h2 className="text-center">Login Now</h2>
                            <form className="login-form" onSubmit={customerLogin} class="need-validation">
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
                            <h2 className="text-uppercase text-dark">Don't have an account ?</h2>
                            <Link className="btn btn-success mt-3" to="/register">Register Now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CustomerLogin
