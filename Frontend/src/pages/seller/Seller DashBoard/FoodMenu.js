import React from 'react';
import axios from 'axios';
import SellerMenu from './SellerMenu';
import AddMenu from './AddMenu';


const FoodMenu = ({ urlData }) => {

    let [menus, setMenus] = React.useState();
    let [menuId, setMenuId] = React.useState();

    React.useEffect(() => {
        axios.get('http://localhost:4000/foodMenus/singlemenu',
            {
                params: {
                    name: urlData
                }
            })
            .then((response) => {
                setMenuId(response.data._id);
                setMenus(response.data.menu);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container-fluid mt-5" >
            <div className="d-flex justify-content-between align-items-start mx-4 mb-5">
                <h4 className="text-uppercase">Menu Dashboard:</h4>
                <AddMenu menus={menus} setMenus={setMenus} menuId={menuId} urlData={urlData} />
            </div>
            <section className="d-flex justify-content-center flex-wrap">
                {
                    menus === undefined ? console.log('loading') : menus.map((foodItem) => {
                        return (
                            <SellerMenu pname={foodItem.name} pprice={foodItem.price} pimage={foodItem.image}
                                urlData={urlData} menus={menus} setMenus={setMenus} id={menuId} />
                        )
                    })
                }
            </section>
        </div >
    )
}

export default FoodMenu;
