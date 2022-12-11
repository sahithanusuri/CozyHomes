import React from 'react';
import './Mainpage.css'
function Mainpage(){

    return(
        <div>
            <h1 id = "heading"><b>COZY HOMES </b></h1>
            <div class ="body container mt-3" id = "crsl" >
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item ">
                            <img src="001.jpeg" class="d-block w-100 img-responsive" alt="BeachHouse" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="black">The Blue Horizon</h5>
                                    <p class="black">Bradenton Beach, FL</p>
                                </div>
                        </div>
                        <div class="carousel-item active">
                            <img src="002.jpeg" class="d-block w-100 img-responsive" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="black">Le Bora Bora</h5>
                                    <p class="black">Bora Bora, French Polynesia</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="003.jpeg" class="d-block w-100 img-responsive" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="black">Blakesley Hall</h5>
                                    <p class="black">Birmingham, England</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="004.jpeg" class="d-block w-100 img-responsive" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="black">100 Van Ness</h5>
                                    <p class="black">San Francisco, California</p>
                                </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            </div>
    );

}

export default Mainpage