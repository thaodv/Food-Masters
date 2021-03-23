import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

const Buy = () => {

    const location = useLocation();
    const history = useHistory();

    let [name, setName] = useState(localStorage.getItem("customerName"));
    let [phone, setPhone] = useState(localStorage.getItem("customerPhone"));
    let [address, setAddress] = useState(localStorage.getItem("customerAddress"));
    let [city, setCity] = useState(localStorage.getItem("customerCity"));
    let [country, setCountry] = useState("Bangladesh");
    let [cart, setCart] = useState(location.state.cart);
    let [total, setTotal] = useState(location.state.total);
    let [paymentMethod, setPaymentMethod] = useState();
    let [paymentId, setPaymentId] = useState();

    const handleOrder = (e) => {

        e.preventDefault();

        let checkbox = document.querySelector('input[name="paymentmethod"]:checked').value;
        setPaymentMethod(checkbox);

        let newOrder = {
            name: name,
            email: localStorage.getItem("customerEmail"),
            phone: phone,
            address: address,
            city: city,
            country: country,
            restuarant: cart[0].restuarantName,
            order: cart,
            amount: total,
            paymentmethod: paymentMethod,
            paymentid: paymentId,
            time: new Date(),
            status: "unpaid",
        }

        console.log(newOrder);

        axios.post('http://localhost:4000/orders', newOrder)
            .then((response) => {
                sessionStorage.removeItem("cart");
                history.push('/orders');
            })
    }

    return (
        <div style={{ background: "#F6F6E8" }} className="pt-5 pb-2">
            <div className="container shadow-lg">
                <div className="bg-white pt-4 pb-4 row rounded d-flex justify-content-center ">
                    <div className="col-lg-11">
                        <div>
                            <div className="d-flex justify-content-between py-3 border-bottom">
                                <strong className="text-muted">Name: </strong>
                                <h5 className="">{name}</h5>
                            </div>
                            <div className="d-flex justify-content-between py-3 border-bottom">
                                <strong className="text-muted">Phone Number: </strong>
                                <h5 className="">{phone}</h5>
                            </div>
                            <div className="d-flex justify-content-between py-3 border-bottom">
                                <strong className="text-muted">Address: </strong>
                                <h5 className="">{address}</h5>
                            </div>
                            <div className="d-flex justify-content-between py-3 border-bottom">
                                <strong className="text-muted">City: </strong>
                                <h5 className="">{city}</h5>
                            </div>
                            <div className="d-flex justify-content-between py-3 border-bottom">
                                <strong className="text-muted">Country: </strong>
                                <h5 className="">{country}</h5>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between py-3 border-bottom">
                            <strong className="text-muted">Amount To Pay: </strong>
                            <h5 className="font-weight-bold">Tk. {total}</h5>
                        </div>
                        <form>
                            <div className="d-flex justify-content-between  mt-4">
                                <label>
                                    <strong className="text-muted">Payment Method: </strong>
                                </label>
                                <div>
                                    <div class="form-check-inline">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input" name="paymentmethod"
                                                value="Paypal" onClick={(e) => setPaymentMethod(e.target.value)} required />
                                            <strong>Paypal</strong>
                                        </label>
                                    </div>
                                    <div class="form-check-inline">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input" name="paymentmethod"
                                                value="Bkash" required onClick={(e) => setPaymentMethod(e.target.value)} />
                                            <strong>Bkash</strong>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-inline d-flex justify-content-between mt-4 mb-3">
                                <label className="">
                                    <strong className="text-muted">Payment Number:</strong>
                                </label>
                                <input type="text" className="form-control border border-primary" name="paymentid"
                                    onChange={(e) => setPaymentId(e.target.value)} required
                                    placeholder="Enter your paypal / bkash number..." />
                            </div>
                            <div className="d-flex justify-content-end border-top">
                                <button type="submit" className="btn btn-success mt-3 w-25" onClick={handleOrder}>
                                    Place Order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buy
