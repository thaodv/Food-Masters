import React, { useState } from 'react';
import axios from 'axios';

const EditRestuarantInfo = ({ pname, pemail, pphone, plocation, pimage, ppassword, pid, setRestuarentInfo }) => {

    const [name, setName] = useState(pname);
    const [email, setEmail] = useState(pemail);
    const [phone, setPhone] = useState(pphone);
    const [location, setLocation] = useState(plocation);
    const [image, setImage] = useState(pimage);
    const [password, setPassword] = useState(ppassword);


    const editRestuarantInfo = (e) => {
        e.preventDefault();
        let updatedRestuarantInfo = {
            name,
            email,
            phone,
            location,
            image,
            password
        }
        axios.put(`http://localhost:4000/postRestuarents/${pid}`, updatedRestuarantInfo)
            .then((response) => {
                console.log(response);
                setRestuarentInfo(Array(response.data));
            })
    }

    return (
        <div>
            <button className="btn btn-warning rounded-0 py-2"
                type="button"
                data-target="#exampleModal"
                data-toggle="modal"
                data-whatever="@mdo"
                style={{
                    position: "absolute", bottom: "0px", right: "0px", zIndex: "5"
                }}>
                <i class="fas fa-edit px-2"></i> Edit Restuarant Info
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Restuarent Info</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="restuarant-name" className="col-form-label">Restuarant Name:</label>
                                    <input type="text" className="form-control" id="restuarant-name" name="name"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label for="email" className="col-form-label">Bussiness Email:</label>
                                    <input className="form-control" id="email" name="email"
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label for="phone" className="col-form-label">Phone Number:</label>
                                    <input className="form-control" id="phone" name="phone"
                                        value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label for="location" className="col-form-label">Location:</label>
                                    <input className="form-control" id="location" name="location"
                                        value={location} onChange={(e) => setLocation(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label for="image" className="col-form-label">Image Link:</label>
                                    <input className="form-control" id="image" name="image"
                                        value={image} onChange={(e) => setImage(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label for="password" className="col-form-label">Password:</label>
                                    <input className="form-control" id="password" name="password"
                                        value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-warning" onClick={editRestuarantInfo} data-dismiss="modal">
                                        <i className="fas fa-edit px-2"></i> Edit Info
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditRestuarantInfo
