import React from 'react';
import { useHistory } from 'react-router-dom';

import { NotificationManager } from 'react-notifications';

const Menu = ({ name, price, image, cart, restuarantName }) => {

    const history = useHistory();

    const handleCart = (e) => {

        if (localStorage.getItem("logInCustomer") === "true") {

            if (+(e.target.dataset.quantity) === 1) {

                let newItem = {
                    name: e.target.dataset.name,
                    price: e.target.dataset.price,
                    image: e.target.dataset.image,
                    restuarantName: restuarantName,
                    quantity: e.target.dataset.quantity
                }

                cart.push(newItem);

                e.target.dataset.quantity = Number(e.target.dataset.quantity) + 1;

            } else {

                let foodName = e.target.dataset.name;

                let index = cart.findIndex((food) => food.name === foodName);

                cart[index].quantity = e.target.dataset.quantity;

                e.target.dataset.quantity = Number(e.target.dataset.quantity) + 1;
            }
            sessionStorage.setItem("cart", JSON.stringify(cart));
            NotificationManager.success('Food Added To The Cart', 'Added!', 1500);
        } else {
            history.push("/login");
        }
    }

    return (
        <div className="d-flex border mx-3 mb-5 bg-success shadow-lg rounded-lg" style={{ width: "460px", height: "180px" }}>
            <img className="img-fluid" src={image}
                alt={name} style={{
                    width: "190px", height: "100%",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "3px"
                }} />
            <div className="d-flex flex-column align-items-end text-white" style={{ width: "270px" }}>
                <h5 className="text-right my-3 mr-3">{name}</h5>
                <p className="text-right mb-4 mr-3">Tk {price}</p>
                <div>
                    <button className="btn btn-sm btn-warning mr-3"
                        onClick={handleCart}
                        data-name={name}
                        data-price={price}
                        data-image={image}
                        data-quantity={1}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Menu
