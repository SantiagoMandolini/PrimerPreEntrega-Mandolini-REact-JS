import React from 'react';

const Carousel = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="position-relative">
                    <div id="carouselWithControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./img/Rog-phone-8-banner.webp" className="d-block w-100" alt="Slide 1" />
                            </div>
                            <div className="carousel-item">
                                <img src="./img/switch-banner.webp" className="d-block w-100" alt="Slide 2" />
                            </div>
                            <div className="carousel-item">
                                <img src="./img/persona-3-baner.webp" className="d-block w-100" alt="Slide 3" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselWithControls" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselWithControls" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
