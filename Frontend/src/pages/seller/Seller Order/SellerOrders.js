import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const SellerOrders = () => {

    let [orders, setOrders] = useState();

    useEffect(() => {
        axios.get('http://localhost:4000/orders/seller', {
            params: {
                restuarant: localStorage.getItem("name")
            }
        })
            .then((response) => {
                setOrders(response.data.reverse());
                console.log(response.data);
            })
    }, [])

    const handleStatusChange = (e) => {

        let value = e.target.value;

        let id = e.target.dataset.id;

        let selectedOrder = orders.filter((order) => order._id === id);

        selectedOrder[0].status = value;

        console.log(selectedOrder[0]);

        let updatedOrder = {
            name: selectedOrder[0].name,
            email: selectedOrder[0].email,
            phone: selectedOrder[0].phone,
            address: selectedOrder[0].address,
            city: selectedOrder[0].city,
            country: selectedOrder[0].country,
            restuarant: selectedOrder[0].restuarant,
            order: selectedOrder[0].order,
            amount: selectedOrder[0].amount,
            paymentmethod: selectedOrder[0].paymentmethod,
            paymentid: selectedOrder[0].paymentid,
            time: selectedOrder[0].time,
            status: selectedOrder[0].status
        }

        axios.put(`http://localhost:4000/orders/${id}`, updatedOrder)
            .then((response) => {
                window.location.reload();
            })
    }

    return (
        <div style={{ minHeight: "75vh", background: "linear-gradient(#FFEFBA, #FFFFFF)" }}>
            <div className="display-4 text-center pt-5 mb-3">
                All The Orders
            </div>
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
                                        <strong className="mr-3">Restuarant:</strong> {order.restuarant}
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
                                        <strong className="mr-3">Current Status:</strong>
                                        <span className="text-uppercase lead">{order.status}</span>
                                    </p>
                                    <div class="form-inline">
                                        <label for="sel1" className="mr-3">Change Status:</label>
                                        <select class="form-control" id="status" data-id={order._id}
                                            onChange={handleStatusChange}>
                                            <option value="Unpaid" disabled selected>Unpaid</option>
                                            <option value="Paid">Paid</option>
                                            <option value="Out For Delivery">Out For Delivery</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SellerOrders
