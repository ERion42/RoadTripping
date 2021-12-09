import React from 'react';
import ImgVan from '../../components/img/roadVan2.png';
import ImgRV from '../../components/img/roadCamper2.png';

export default function LandingPage() {
    return (

    <div className="container py-4">

        <div className="bg-light rounded-3">
            <div className="container-fluid">
                <div className="row pb-5">
                    <div className="col-md-12">
                        <h1 className="display-5 py-5 fw-bold">All Aboard the Nilbog Express!</h1>
                        <p className="fs-4">If you're planning a road trip, let us help you so the most daunting question you have to deal with is "Are we there yet?"</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="row align-items-md-stretch">
            <div className="col-md-6">
                <div className="h-100 p-5 text-white bg-transparent rounded-3 bg-image"
                style={{ backgroundImage: `url(${ImgVan})`}}>
                    <h2 className="pb-4 fw-bold">Trips for Cars</h2>
                    <p className=" fw-bold">Plan for hotels, motels, and campsites.</p>
                    <br />
                </div>
            </div>
            <div className="col-md-6">
                <div className="h-100 p-5 text-white bg-light border rounded-3 bg-image"
                style={{ backgroundImage: `url(${ImgRV})`}}>
                    <h2 className="pb-4 fw-bold">Trips for RVs</h2>
                    <p className=" fw-bold">Plan for RV hookups.</p>
                    <br />
                </div>
            </div>
        </div>

    </div>        



    )
}