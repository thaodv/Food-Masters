import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


const EditMenu = () => {

    const urlData = useParams();

    let history = useHistory();

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [id, setId] = useState();
    const [index, setIndex] = useState();
    const [menu, setMenu] = useState();

    React.useEffect(() => {
        axios.get(`http://localhost:4000/foodMenus/singlemenu`, {
            params: {
                name: urlData.name
            }
        })
            .then((response) => {
                let arr = response.data.menu;

                setMenu(arr);

                let selectedFood = arr.findIndex((food) => food.name === urlData.foodName);

                setIndex(selectedFood);

                selectedFood = arr[selectedFood];

                setName(selectedFood.name);
                setPrice(selectedFood.price);
                setImage(selectedFood.image);
                setId(response.data._id);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const editMenu = (e) => {

        e.preventDefault();

        let editedFood = {
            name,
            price,
            image
        }

        menu[index] = editedFood;

        let newEditedFood = {
            name: urlData.name,
            menu: menu
        }

        console.log(newEditedFood);

        axios.put(`http://localhost:4000/foodMenus/${id}`, newEditedFood)
            .then((response) => {
                history.push(`/business/seller/${urlData.name}`);
            })
    }

    const backDashBoard = () => {
        history.push(`/business/seller/${urlData.name}`);
    }

    return (
        <div style={{ minHeight: "82vh", backgroundColor: "mediumaquamarine" }}>
            <h3 className="text-center pt-4">Edit Food Information</h3>
            <div className="container d-flex justify-content-center">
                <form className="my-3" style={{ width: "50vw" }} onSubmit={editMenu}>
                    <div className="form-group">
                        <label for="food-name" className="col-form-label">Food Name:</label>
                        <input type="text" className="form-control" id="food-name" name="name"
                            onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className="form-group">
                        <label for="price" className="col-form-label">Price:</label>
                        <input className="form-control" id="price" name="price"
                            onChange={(e) => setPrice(e.target.value)} value={price} />
                    </div>
                    <div className="form-group">
                        <label for="image" className="col-form-label">Food Image Link:</label>
                        <input className="form-control" id="image" name="img"
                            onChange={(e) => setImage(e.target.value)} value={image} />
                    </div>
                    <button type="submit" className="btn btn-warning mt-4 mr-3">
                        <i class="fas fa-edit"></i> Edit Food
                    </button>
                    <button type="button" className="btn btn-secondary mt-4" onClick={backDashBoard}>
                        Back To DashBoard
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditMenu