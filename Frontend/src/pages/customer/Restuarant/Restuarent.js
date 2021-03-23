import React from 'react';
import { Link } from 'react-router-dom';

const Restuarent = ({ name, location, phone, image }) => {
    return (
        <div class="card mx-4 mb-5 shadow" style={{ width: "320px" }}>
            <img class="card-img-top" src={image} alt="Card image" style={{ width: "100%" }} />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{location}</p>
                <Link className="btn btn-success align-end" to={`/restaurants/${name}`}>
                    See Menu
                </Link>
            </div>
        </div>
    )
}

export default Restuarent
