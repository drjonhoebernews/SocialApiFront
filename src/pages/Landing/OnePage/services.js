import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const Services = () => {
    return (
        <React.Fragment>
            <section className="section" id="veri analizi">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-5">
                                <h1 className="mb-3 ff-secondary fw-semibold lh-base">Medyaizi Medyadaki Gözünüz</h1>
                                <p className="text-muted">Gündem genellikle ülkenin ve dünyanın önemli olaylarına odaklanır ve siyaset, ekonomi, sağlık, teknoloji, spor ve eğlence gibi konuları kapsar. Haber kaynakları arasında televizyon kanalları, gazeteler, dergiler, radyo programları ve internet siteleri bulunur.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-3">
                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-twitter-fill fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Twitter</h5>
                                    <p className="text-muted my-3 ff-secondary">Twitter, dünyadaki haberlerin ve olayların hızla yayılması ve paylaşılması için önemli bir platformdur.</p>
                                    {/*<div>*/}
                                    {/*    <Link to="#" className="fs-13 fw-medium"><i className="ri-arrow-right-s-line align-bottom"></i></Link>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-facebook-box-fill fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Facebook</h5>
                                    <p className="text-muted my-3 ff-secondary">Facebook, dünya genelinde milyarlarca kullanıcısı olan sosyal medya platformudur. </p>
                                    {/*<div>*/}
                                    {/*    <Link to="#" className="fs-13 fw-medium"><i className="ri-arrow-right-s-line align-bottom"></i></Link>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-instagram-fill fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">İnstagram</h5>
                                    <p className="text-muted my-3 ff-secondary">Instagram, dünya genelinde milyarlarca kullanıcısı olan bir sosyal medya platformudur.</p>
                                    {/*<div>*/}
                                    {/*    <Link to="#" className="fs-13 fw-medium"><i className="ri-arrow-right-s-line align-bottom"></i></Link>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-google-fill fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Google</h5>
                                    <p className="text-muted my-3 ff-secondary">Google, dünya genelinde en çok kullanılan arama motorudur ve aynı zamanda bir haber kaynağıdır.</p>
                                    {/*<div>*/}
                                    {/*    <Link to="#" className="fs-13 fw-medium"><i className="ri-arrow-right-s-line align-bottom"></i></Link>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-stack-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Tiktok</h5>
                                    <p className="text-muted my-3 ff-secondary">TikTok, dünya genelinde milyonlarca kullanıcısı olan bir sosyal medya platformudur.</p>
                                    {/*<div>*/}
                                    {/*    <Link to="#" className="fs-13 fw-medium"><i className="ri-arrow-right-s-line align-bottom"></i></Link>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-youtube-fill fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Youtube</h5>
                                    <p className="text-muted my-3 ff-secondary">YouTube  haberler konusunda da etkili bir kaynak haline gelmiştir.</p>
                                    {/*<div>*/}
                                    {/*    <Link to="#" className="fs-13 fw-medium"><i className="ri-arrow-right-s-line align-bottom"></i></Link>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-slideshow-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Ekşi Sözlük</h5>
                                    <p className="text-muted my-3 ff-secondary">Ekşi Sözlük genellikle haberlerin paylaşıldığı bir platform olarak görülmektedir.</p>
                                    {/*<div>*/}
                                    {/*    <Link to="#" className="fs-13 fw-medium"> <i className="ri-arrow-right-s-line align-bottom"></i></Link>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-newspaper-fill fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Haber Ağları</h5>
                                    <p className="text-muted my-3 ff-secondary"> haber ağlarının diğer medya organizasyonlarına karşı rekabet gücünün ölçülmesinde de kullanılır.</p>
                                    {/*<div>*/}
                                    {/*    <Link to="#" className="fs-13 fw-medium"> <i className="ri-arrow-right-s-line align-bottom"></i></Link>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-linkedin-fill fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">LinkedIn</h5>
                                    <p className="text-muted my-3 ff-secondary">iş dünyasındaki gelişmeleri takip etmek,ve rekabetleri anlık yansıtmaya yarar.</p>
                                    {/*<div>*/}
                                    {/*    <Link to="#" className="fs-13 fw-medium"> <i className="ri-arrow-right-s-line align-bottom"></i></Link>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Services;