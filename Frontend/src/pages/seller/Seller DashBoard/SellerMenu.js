import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

const SellerMenu = ({ pname, pprice, pimage, urlData, menus, setMenus, id }) => {

    const deleteMenu = (e) => {
        let foodName = e.target.dataset.name;
        let foodId = e.target.dataset.id;

        let editedFoodMenu = menus.filter((menu) => menu.name !== foodName);

        let newEditedFoodMenu = {
            name: urlData,
            menu: editedFoodMenu
        }
        axios.put(`http://localhost:4000/foodMenus/${foodId}`, newEditedFoodMenu)
            .then((response) => {
                setMenus(response.data.menu);
                NotificationManager.error('Removed Food From The Menu', 'Removed!', 1500);
            })
    }

    return (
        <div className="d-flex border mx-3 mb-5 bg-success shadow-lg rounded-lg" style={{ width: "460px", height: "155px" }}>
            <img className="img-fluid" src={pimage}
                style={{
                    width: "190px", height: "100%",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "3px"
                }} />
            <div className="d-flex flex-column align-items-end text-white" style={{ width: "270px" }}>
                <h5 className="text-right my-3 mr-3">{pname}</h5>
                <p className="text-right mb-4 mr-3">Tk. {pprice}</p>
                <div className="d-flex mr-3">
                    <Link to={`/business/foodMenu/${urlData}/${pname}`} className="btn btn-warning mr-2">
                        <i class="fas fa-edit"></i> Edit
                    </Link>
                    <button className="btn btn-sm btn-warning" data-id={id} data-name={pname} onClick={deleteMenu}>
                        <i className="fas fa-trash mr-1"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SellerMenu
