import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [image, setImage] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    const handleRegistration = (e) => {
        e.preventDefault();

        let newUser = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            city: city,
            country: 'Bangladesh',
            image: image,
            password: password
        }

        axios.post('http://localhost:4000/users', newUser)
            .then((response) => {
                console.log(response);

                // let newOrder = {
                //     name: name,
                //     order: []
                // }

                // axios.post('http://localhost:4000/foodMenus', newMenu)
                //     .then((response) => {
                //         console.log(response);
                //         history.push('/business/login')
                //     });
                history.goBack();
            });
    }

    return (
        <div className="container mb-4">
            <h3 className="text-center mt-2">Register As A Customer</h3>
            <form onSubmit={handleRegistration} class="needs-validation">
                <div class="form-group mt-3">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter Name..."
                        name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div class="form-group mt-2">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter Your Email..."
                        name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div class="form-group mt-2">
                    <label for="phone">Phone Number:</label>
                    <input type="text" class="form-control" id="phone" placeholder="Enter Your Phone Number..."
                        name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>

                <div class="form-group mt-2">
                    <label for="address">Address:</label>
                    <input type="text" class="form-control" id="address" placeholder="Enter Your Address..."
                        name="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>

                <div class="form-group mt-2">
                    <label for="city">City:</label>
                    <input type="text" class="form-control" id="city" placeholder="Enter Your Address..."
                        name="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                </div>

                <div class="form-group mt-2">
                    <label for="image">Profile Picture:</label>
                    <input type="text" class="form-control" id="city" placeholder="Enter Your Image Link..."
                        name="image" value={image} onChange={(e) => setImage(e.target.value)} required />
                </div>

                <div class="form-group mt-2">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter Your Password..."
                        name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" class="btn btn-primary mt-1">Register With Us</button>
            </form>
        </div>
    )
}

export default Register;
