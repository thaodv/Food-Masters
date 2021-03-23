import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Menu from './Menu';

const SingleRestuarent = () => {

    const urlData = useParams();

    let [image, setImage] = React.useState();

    let [restLocation, setRestLocation] = React.useState();

    let [phone, setPhone] = React.useState();

    let [menus, setMenus] = React.useState();

    let [cart, setCart] = React.useState([]);

    React.useEffect(() => {

        if (image === undefined || restLocation === undefined || phone === undefined) {
            axios.get('http://localhost:4000/postRestuarents/singlerestuarant', {
                params: {
                    name: urlData.name
                }
            })
                .then((response) => {
                    setImage(response.data.image);
                    setRestLocation(response.data.location);
                    setPhone(response.data.phone);
                })
        }

        axios.get('http://localhost:4000/foodMenus/singlemenu', {
            params: {
                name: urlData.name
            }
        })
            .then((response) => {
                setMenus(response.data.menu);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div style={{ minHeight: "85vh" }}>
            <div style={{
                background: `url(${image}) no-repeat center/cover`,
                height: "40vh",
                position: "relative"
            }} className="d-flex flex-column justify-content-center align-items-center"
            >
                <a className="btn btn-warning py-3 px-4 lead"
                    style={{
                        position: 'absolute', bottom: '0px',
                        left: '0px', zIndex: '5',
                    }}>
                    Location: {restLocation}
                </a>
                <a className="btn btn-warning" href={`tel:${phone}`}
                    style={{
                        position: 'absolute', bottom: '0px',
                        right: '0px', zIndex: '5',
                    }}>
                    Contact Us
                </a>
            </div>
            <div className="container-fluid mt-5">
                <div className="display-4 mb-5 text-center text-uppercase">{urlData.name}</div>
                <section className="d-flex justify-content-center flex-wrap">
                    {
                        menus === undefined ? console.log('loading') : menus.map((foodItem) => {
                            return (
                                <Menu name={foodItem.name} price={foodItem.price} image={foodItem.image}
                                    cart={cart} setCart={setCart} restuarantName={urlData.name} />
                            )
                        })
                    }
                </section>
            </div>
        </div>
    )
}

export default SingleRestuarent;
