import React from 'react'
import RestuarentSearch from './RestuarentSearch'

const Main = () => {
    return (
        <>
            <div className="banner d-flex align-items-center flex-column pt-2">
                <h1 className="my-5">Food Masters</h1>
                <p>Restaurant Foods Delivered To Your Door Step</p>
                <RestuarentSearch />
            </div>
            <h3 className="text-center mt-4 mb-5 pt-2 text-dark">Why We Are Masters At Food</h3>
            <section className="container d-flex justify content-center my-3">
                <div class="card text-center py-3 pt-5 mr-5 bg-light shadow" style={{ width: "400px" }}>
                    <i class="fas fa-biking" style={{ fontSize: "3rem" }}></i>
                    <div class="card-body">
                        <h4 class="card-title">Fast Delivery</h4>
                        <p>We Deliver Foods Even Faster Than Flash !</p>
                    </div>
                </div>
                <div class="card text-center py-3 pt-5 bg-light shadow" style={{ width: "400px" }}>
                    <i class="fas fa-utensils" style={{ fontSize: "3rem" }}></i>
                    <div class="card-body">
                        <h4 class="card-title">Most Restaurants</h4>
                        <p>We Give You All The Restaurants Option In Your City !</p>
                    </div>
                </div>
                <div class="card text-center py-3 pt-5 ml-5 bg-light shadow" style={{ width: "400px" }}>
                    <i class="fas fa-gifts" style={{ fontSize: "3rem" }}></i>
                    <div class="card-body">
                        <h4 class="card-title">Exciting Deals</h4>
                        <p>Some Call Us Santa of Food Delivery Service, Maybe For A Reason !</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main
