import React from 'react'
import { useParams } from 'react-router';
import FoodMenu from './FoodMenu'
import RestuarentInfo from './RestuarentInfo'


const SellerDashBoard = () => {

    const urlData = useParams();

    console.log(urlData);
    return (
        <div style={{ minHeight: "81vh" }}>
            <RestuarentInfo urlData={urlData.name} />
            <FoodMenu urlData={urlData.name} />
        </div>
    )
}

export default SellerDashBoard
