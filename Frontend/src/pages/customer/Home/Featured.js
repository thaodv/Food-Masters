import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Featured = () => {

    let [restuarents, setRestuarents] = useState();

    React.useEffect(() => {
        axios.get('http://localhost:4000/postRestuarents')
            .then((response) => {
                setRestuarents(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="featured-restuarent mb-5">
            <div className="container d-flex justify-content-between mt-5 mb-2">
                <h3>Featured Restaurants</h3>
                <a href="/restaurants" className="btn">All Restaurants >></a>
            </div>
            {
                restuarents === undefined ? console.log('loading') : (
                    <div className="container d-flex">
                        <div class="card mr-5" style={{ width: "350px" }}>
                            <img class="card-img-top" src={restuarents[0].image} style={{ width: "100%" }} />
                            <div class="card-body">
                                <h4 class="card-title">{restuarents[0].name}</h4>
                                <p class="card-text">{restuarents[0].location}</p>
                                <Link to={`/restaurants/${restuarents[0].name}`} class="btn btn-primary">See Menu</Link>
                            </div>
                        </div>
                        <div class="card" style={{ width: "350px" }}>
                            <img class="card-img-top" src={restuarents[1].image} alt="Card image" style={{ width: "100%" }} />
                            <div class="card-body">
                                <h4 class="card-title">{restuarents[1].name}</h4>
                                <p class="card-text">{restuarents[1].location}</p>
                                <Link to={`/restaurants/${restuarents[1].name}`} class="btn btn-primary">See Menu</Link>
                            </div>
                        </div>
                        <div class="card ml-5" style={{ width: "350px" }}>
                            <img class="card-img-top" src={restuarents[2].image} alt="Card image" style={{ width: "100%" }} />
                            <div class="card-body">
                                <h4 class="card-title">{restuarents[2].name}</h4>
                                <p class="card-text">{restuarents[2].location}</p>
                                <Link to={`/restaurants/${restuarents[2].name}`} class="btn btn-primary">See Menu</Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Featured;
