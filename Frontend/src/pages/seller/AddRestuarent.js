import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddRestuarent = () => {

    const [resName, setResName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [location, setLocation] = useState();
    const [image, setImage] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    const setResNameF = (e) => {
        setResName(e.target.value);
    }

    const setEmailF = (e) => {
        setEmail(e.target.value);
    }

    const setPhoneF = (e) => {
        setPhone(e.target.value);
    }

    const setLocationF = (e) => {
        setLocation(e.target.value);
    }

    const setImageF = (e) => {
        setImage(e.target.value);
    }

    const setPasswordF = (e) => {
        setPassword(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();

        let newRestuarent = {
            name: resName,
            email: email,
            phone: phone,
            location: location,
            image: image,
            password: password
        }

        axios.post('http://localhost:4000/postRestuarents', newRestuarent)
            .then((response) => {
                console.log(response);

                let newMenu = {
                    name: resName,
                    menu: []
                }

                axios.post('http://localhost:4000/foodMenus', newMenu)
                    .then((response) => {
                        console.log(response);
                        history.push('/business/login')
                    });
            });
    }
    return (
        <div className="container">
            <h2 className="text-center mt-3">Register As Seller With Us</h2>
            <form onSubmit={onSubmit} class="needs-validation mb-5">
                <div class="form-group mt-4">
                    <label for="name">Restaurant Name:</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Your Restaurant Name..."
                        name="name" onChange={setResNameF} required />
                </div>
                <div class="form-group mt-4">
                    <label for="email">Business Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter Your Business Email..."
                        name="email" onChange={setEmailF} required />
                </div>
                <div class="form-group mt-4">
                    <label for="phone">Phone Number:</label>
                    <input type="text" class="form-control" id="phone" placeholder="Enter Your Phone Number..."
                        name="phone" onChange={setPhoneF} required />
                </div>

                <div class="form-group mt-4">
                    <label for="location">Location:</label>
                    <input type="text" class="form-control" id="location" placeholder="Enter Restaurant Location..."
                        name="location" onChange={setLocationF} required />
                </div>

                <div class="form-group mt-4">
                    <label for="image">Restaurant Image:</label>
                    <input type="text" class="form-control" id="city" placeholder="Enter Restaurant Image Link..."
                        name="image" onChange={setImageF} required />
                </div>

                <div class="form-group mt-4">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter Your Password..."
                        name="password" onChange={setPasswordF} required />
                </div>

                <button type="submit" class="btn btn-primary mt-2">Register With Us</button>
            </form>
        </div>
    )
}

export default AddRestuarent
