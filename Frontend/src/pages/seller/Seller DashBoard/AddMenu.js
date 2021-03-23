import React, { useState } from 'react';
import axios from 'axios';

import { NotificationManager } from 'react-notifications';

const AddMenu = ({ menus, setMenus, urlData, menuId }) => {

    let [name, setName] = useState();
    let [price, setPrice] = useState();
    let [image, setImage] = useState();

    const addMenu = (e) => {

        e.preventDefault();

        let newMenu = {
            name,
            price,
            image
        }

        menus.push(newMenu);

        let updatedMenu = {
            name: urlData,
            menu: menus
        }

        axios.put(`http://localhost:4000/foodMenus/${menuId}`, updatedMenu)
            .then((response) => {
                setMenus(response.data.menu);
                NotificationManager.success('Added New Food To The Menu', 'Added!', 1500);
            })
    }

    return (
        <div>
            <button className="btn btn-sm btn-success mr-3"
                type="button"
                data-target="#exampleAddMenu"
                data-toggle="modal"
                data-whatever="@mdo">
                <i class="fas fa-plus mr-2"></i> Add New Food
            </button>

            <div className="modal fade" id="exampleAddMenu" tabindex="-1" role="dialog"
                aria-labelledby="exampleMenuLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content text-dark">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleMenuLabel">Add New Food</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-dark">
                            <form class="needs-validation">
                                <div className="form-group">
                                    <label for="food-name" className="col-form-label">Food Name:</label>
                                    <input type="text" className="form-control" id="food-name" name="name"
                                        onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label for="price" className="col-form-label">Price:</label>
                                    <input className="form-control" id="price" name="price"
                                        onChange={(e) => setPrice(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label for="image" className="col-form-label">Food Image Link:</label>
                                    <input className="form-control" id="image" name="img"
                                        onChange={(e) => setImage(e.target.value)} required />
                                </div>
                                <button type="button" className="btn btn-secondary mr-3" data-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-success" onClick={addMenu} data-dismiss="modal">
                                    <i class="fas fa-plus px-1"></i> Add Food
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMenu
