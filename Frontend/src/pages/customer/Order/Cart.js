import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';

const Cart = () => {

    let cart = sessionStorage.getItem("cart");
    cart = JSON.parse(cart);

    const button = document.querySelector('#checkOutButton');

    let [total, setTotal] = useState(0);

    useEffect(() => {
        let sum = cart.reduce((prev, current) => {
            return prev + Number(Number(current.price) * Number(current.quantity));
        }, 0);

        setTotal(sum);

    }, [])

    const handleQuantityIncrease = (e) => {

        let sibling = e.target.parentElement.parentElement.previousElementSibling.firstChild;

        let addedPrice = Number(e.target.dataset.price);
        addedPrice += total;
        setTotal(addedPrice);

        let newQuantity = Number(sibling.innerHTML) + 1;

        sibling.innerHTML = String(newQuantity);
    }

    const handleQuantityDecrease = (e) => {

        let sibling = e.target.parentElement.parentElement.previousElementSibling.firstChild;

        if (Number(sibling.innerHTML) > 0) {
            let decreasedPrice = Number(e.target.dataset.price);
            decreasedPrice = total - decreasedPrice;
            setTotal(decreasedPrice);

            let newQuantity = Number(sibling.innerHTML) - 1;

            sibling.innerHTML = String(newQuantity);
        }
    }

    return (
        localStorage.getItem("logInCustomer") !== "true" ? <Redirect to="/login" /> : (
            <div className="pt-5" style={{ background: "#F6F6E8" }}>
                <div class="pb-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 p-5 bg-white rounded shadow-lg mb-5">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" class="border-0 bg-light">
                                                    <div class="p-2 px-3 text-uppercase">Food Items</div>
                                                </th>
                                                <th scope="col" class="border-0 bg-light">
                                                    <div class="py-2 text-uppercase">Price</div>
                                                </th>
                                                <th scope="col" class="border-0 bg-light">
                                                    <div class="py-2 text-uppercase">Quantity</div>
                                                </th>
                                                <th scope="col" class="border-0 bg-light">
                                                    <div class="py-2 text-uppercase">Change</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cart.map((foodItem) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row" class="border-0">
                                                                <div class="p-2">
                                                                    <img src={foodItem.image} width="70" class="img-fluid rounded shadow-sm" />
                                                                    <div class="ml-3 d-inline-block align-middle">
                                                                        <h5 class="mb-0">
                                                                            <a href="#" class="text-dark d-inline-block align-middle">
                                                                                {foodItem.name}
                                                                            </a>
                                                                        </h5>
                                                                        <span class="text-muted font-weight-normal font-italic d-block">
                                                                            Restaurant: {foodItem.restuarantName}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                            <td class="border-0 align-middle">
                                                                <strong>{foodItem.price}</strong>
                                                            </td>
                                                            <td class="border-0 align-middle">
                                                                <strong className="ml-4" id="foodQuantity">{foodItem.quantity}</strong>
                                                            </td>
                                                            <td class="border-0 align-middle">
                                                                <a class="text-dark ml-2" style={{ cursor: "pointer" }}>
                                                                    <i class="fas fa-plus mr-4" onClick={handleQuantityIncrease}
                                                                        data-price={foodItem.price}
                                                                        data-quantity={foodItem.quantity}></i>
                                                                </a>
                                                                <a style={{ cursor: "pointer" }}>
                                                                    <i class="fas fa-minus" onClick={handleQuantityDecrease}
                                                                        data-price={foodItem.price}
                                                                        data-quantity={foodItem.quantity}></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="bg-white row pt-5 rounded">
                                    <div className="col-lg-12">
                                        <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                                            Order summary
                                        </div>
                                        <div className="p-4">
                                            <p className="font-italic mb-4">Delivery and additional costs are calculated based on values you have entered.</p>
                                            <ul className="list-unstyled mb-4">
                                                <li className="d-flex justify-content-between py-3 border-bottom">
                                                    <strong class="text-muted">Order Subtotal </strong>
                                                    <strong>{total}</strong>
                                                </li>
                                                <li className="d-flex justify-content-between py-3 border-bottom">
                                                    <strong className="text-muted">Delivery and handling</strong>
                                                    <strong>Tk. 60</strong>
                                                </li>
                                                <li className="d-flex justify-content-between py-3 border-bottom">
                                                    <strong className="text-muted">Tax</strong><strong>Tk. 0</strong>
                                                </li>
                                                <li className="d-flex justify-content-between py-3 border-bottom">
                                                    <strong className="text-muted">Total</strong>
                                                    <h5 className="font-weight-bold">Tk. {total + 60}</h5>
                                                </li>
                                            </ul>
                                            {total !== 0 ? (
                                                <Link className="btn btn-dark rounded-pill py-2 btn-block" id="checkOutButton"
                                                    to={{
                                                        pathname: '/cart/buy',
                                                        state: {
                                                            cart: cart,
                                                            total: total + 60
                                                        }
                                                    }}
                                                >
                                                    Procceed to checkout
                                                </Link>) : (
                                                <button className="btn btn-dark rounded-pill py-2 btn-block" id="checkOutButton" disabled>
                                                    Procceed to checkout
                                                </button>)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Cart;
