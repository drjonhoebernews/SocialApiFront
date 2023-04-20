import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Images
import imgpattern from "../../../assets/images/landing/img-pattern.png";

import defaultDemo from "../../../assets/images/demos/default.png";
import saasDemo from "../../../assets/images/demos/saas.png";
import materialDemo from "../../../assets/images/demos/material.png";
import minimalDemo from "../../../assets/images/demos/minimal.png";
import creativeDemo from "../../../assets/images/demos/creative.png";
import modernDemo from "../../../assets/images/demos/modern.png";
import interactiveDemo from "../../../assets/images/demos/interactive.png";


const Home = () => {
    return (
        <React.Fragment>
            <section className="section pb-0 hero-section" id="anasayfa">
                <div className="bg-overlay bg-overlay-pattern"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={10}>
                            <div className="text-center mt-lg-5 pt-5">
                                <h1 className="display-6 fw-bold mb-3 lh-base">    Veri  Analizi  ve  Yönetimi <span
                                    className="text-success">Medyaizi </span></h1>
                                <p className="lead text-muted lh-base">Veri toplama, analiz etme ve yönetme, işletmelerin başarısı için giderek daha önemli hale geliyor. Bu başlık altında, veri analizinin ve yönetiminin önemini ve işletmelerin veri kullanımıyla elde edebilecekleri avantajları keşfedin.</p>

                                {/*<div className="d-flex gap-2 justify-content-center mt-4">*/}
                                {/*    <Link to="/register" className="btn btn-primary">Get Started <i className="ri-arrow-right-line align-middle ms-1"></i></Link>*/}
                                {/*    <Link to="/pages-pricing" className="btn btn-danger">View Plans <i className="ri-eye-line align-middle ms-1"></i></Link>*/}
                                {/*</div>*/}
                            </div>

                            <div className='mt-5 mt-sm-5 pt-sm-5 mb-sm-n5 demo-carousel'>
                                <lord-icon
                                    src="https://lottie.host/5ec2cc0f-f61f-48a5-b968-041357dda996/8wH1SD15xq.json"
                                    trigger="loop"
                                    colors="primary:#0ab39c"
                                    className="avatar-xl"
                                    style={{ width: "820px", height: "470px" }}
                                >
                                </lord-icon>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="position-absolute start-0 end-0 bottom-0 hero-shape-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 1440 120">
                        <g mask="url(&quot;#SvgjsMask1003&quot;)" fill="none">
                            <path d="M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z">
                            </path>
                        </g>
                    </svg>
                </div>

            </section>
        </React.Fragment>
    );
};

export default Home;