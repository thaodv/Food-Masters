import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Orders = () => {

    let [orders, setOrders] = useState();

    useEffect(() => {
        axios.get('http://localhost:4000/orders/user', {
            params: {
                name: localStorage.getItem("customerName")
            }
        })
            .then((response) => {
                setOrders(response.data.reverse());
                console.log(response.data);
            })
    }, [])

    return (

        localStorage.getItem("logInCustomer") !== "true" ? <Redirect to="/login" /> : (
            <div style={{ background: "linear-gradient(#FFEFBA, #FFFFFF)" }}>
                <h1 className="text-center pt-5 mb-3">
                    All The Orders
                </h1>
                <div className="container d-flex justify-content-center flex-wrap py-5">
                    {
                        orders === undefined ? console.log('loading') : orders.map((order) => {
                            let product = order.order.reduce((prevFood, nextFood) => {
                                return prevFood + (nextFood.name + '  x' + nextFood.quantity) + ' , ';
                            }, '')

                            return (
                                <div class="card bg-muted shadow mb-5 mx-4 border border-dark" style={{ width: "45%" }}>
                                    <div class="card-body">
                                        <h5 class="card-title">{product}</h5>
                                        <p class="card-text">
                                            <strong className="mr-3">Total:</strong> Tk. {order.amount}
                                        </p>
                                        <p class="card-text">
                                            <strong className="mr-3">Restaurant:</strong> {order.restuarant}
                                        </p>
                                        <p class="card-text">
                                            <strong className="mr-3">Ordered By:</strong> {order.name}
                                        </p>
                                        <p class="card-text">
                                            <strong className="mr-3">Deliver To:</strong>
                                            {order.address + ', ' + order.city + ', ' + order.country}
                                        </p>
                                        <p class="card-text">
                                            <strong className="mr-3">Payment Method:</strong>
                                            {order.paymentmethod + ' ' + `(${order.paymentid})`}
                                        </p>
                                        <p class="card-text">
                                            <strong className="mr-3">Phone :</strong>  {order.phone}
                                        </p>
                                        <p class="card-text">
                                            <strong className="mr-3">Ordered At:</strong> {Date(order.time).toString()}
                                        </p>
                                        <p class="card-text">
                                            <strong className="mr-3">Status:</strong>
                                            <span className="text-uppercase"><strong>{order.status}</strong></span>
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    )
}

export default Orders
