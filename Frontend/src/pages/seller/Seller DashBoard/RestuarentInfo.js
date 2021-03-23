import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import EditRestuarantInfo from './EditRestuarantInfo';

const RestuarentInfo = ({ urlData }) => {

    const history = useHistory();

    let [restuarentInfo, setRestuarentInfo] = React.useState();

    React.useEffect(() => {
        axios.get('http://localhost:4000/postRestuarents')
            .then((response) => {
                console.log("Hello");
                setRestuarentInfo(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    const closeRestuarant = (e) => {
        e.preventDefault();
        console.log("Closing");
        let id = e.target.dataset.id;

        axios.delete(`http://localhost:4000/postRestuarents/${id}`)
            .then((response) => {
            })

        axios.get('http://localhost:4000/foodMenus/delete', {
            params: {
                resname: localStorage.getItem("name")
            }
        })
            .then((res) => {
                localStorage.removeItem("logInSeller");
                localStorage.removeItem("image");
                localStorage.removeItem("image");
                localStorage.removeItem("name");
                localStorage.removeItem("token");
                localStorage.removeItem("isSeller");
                history.push('/business/addRestaurant');
            })

    }

    return (
        <div>
            {
                restuarentInfo === undefined ? console.log('loading') : restuarentInfo.map((restuarent) => {
                    return (
                        urlData !== restuarent.name ? console.log('nothing') : (
                            <div>
                                <div style={{
                                    background: `url(${restuarent.image}) no-repeat center/cover`,
                                    height: "40vh",
                                    position: "relative"
                                }} className="d-flex flex-column justify-content-center align-items-center"
                                >
                                    <h1 className=" bg-warning py-1 px-4 rounded">{restuarent.name}</h1>
                                    <div className="d-flex mt-3">
                                        <h6 className="bg-warning py-2 px-4 mr-2 rounded" >Phone: {restuarent.phone}</h6>
                                        <h6 className="bg-warning py-2 px-4 ml-2 rounded">Location: {restuarent.location}</h6>
                                    </div>
                                    <EditRestuarantInfo pname={restuarent.name}
                                        pemail={restuarent.email} pphone={restuarent.phone}
                                        plocation={restuarent.location} pimage={restuarent.image}
                                        ppassword={restuarent.password} pid={restuarent._id}
                                        setRestuarentInfo={setRestuarentInfo}
                                    />
                                    <button className="btn btn-danger" style={{
                                        position: 'absolute', bottom: '0px',
                                        left: '0px', zIndex: '5',
                                    }} onClick={closeRestuarant}
                                        data-id={restuarent._id}>
                                        Close Your Restuarant
                                    </button>
                                </div>
                            </div>
                        )
                    )
                })
            }
        </div>
    )
}

export default RestuarentInfo
