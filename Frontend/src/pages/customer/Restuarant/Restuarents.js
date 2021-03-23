import React from 'react';
import axios from 'axios';
import Restuarent from './Restuarent';

const Restuarents = () => {
    let [restuarents, setRestuarents] = React.useState();

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
        <div className="container-fluid mt-5">
            <div className="display-4 mb-5 text-center text-uppercase">All the restuarents we cover</div>
            <section className="d-flex justify-content-center flex-wrap">
                {
                    restuarents === undefined ? console.log('loading') : restuarents.map((restuarent) => {
                        return (
                            <Restuarent id={restuarent._id} name={restuarent.name} location={restuarent.location}
                                phone={restuarent.phone} image={restuarent.image} />
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Restuarents
