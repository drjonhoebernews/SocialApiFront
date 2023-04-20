import React from 'react';
import { Col, Container, Form, Row } from 'reactstrap';

const Contact = () => {
    return (
        <React.Fragment>
            <section className="section" id="iletisim">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-5">
                                <h3 className="mb-3 fw-semibold">Bize Ulaşın.</h3>
                                <p className="text-muted mb-4 ff-secondary">Sitemiz hakkında herhangi bir sorunuz, öneriniz veya geri bildiriminiz varsa, lütfen bize ulaşın. Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="gy-4">
                        <Col lg={4}>
                            <div>
                                <div className="mt-4">
                                    <h5 className="fs-13 text-muted text-uppercase">Adres 1:</h5>
                                    <div className="ff-secondary fw-semibold">İstanbul/Kadıköy <br />No:</div>
                                </div>
                                <div className="mt-4">
                                    <h5 className="fs-13 text-muted text-uppercase">Adres 2:</h5>
                                    <div className="ff-secondary fw-semibold">İstanbul/Kadıköy<br />No:</div>
                                </div>
                                <div className="mt-4">
                                    <h5 className="fs-13 text-muted text-uppercase">Çalışma Saatleri</h5>
                                    <div className="ff-secondary fw-semibold">09:00 ile 18:00</div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={8}>
                            <div>
                                <Form>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-4">
                                                <label htmlFor="name" className="form-label fs-13">İsim</label>
                                                <input name="name" id="name" type="text"
                                                    className="form-control bg-light border-light" placeholder="İsminiz" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-4">
                                                <label htmlFor="email" className="form-label fs-13">Email</label>
                                                <input name="email" id="email" type="email"
                                                    className="form-control bg-light border-light" placeholder="Email" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="mb-4">
                                                <label htmlFor="subject" className="form-label fs-13">Konu</label>
                                                <input type="text" className="form-control bg-light border-light" id="subject"
                                                    name="subject" placeholder="Konu Giriniz.." />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="mb-3">
                                                <label htmlFor="comments" className="form-label fs-13">Mesajınız</label>
                                                <textarea name="comments" id="comments" rows="3"
                                                    className="form-control bg-light border-light"
                                                    placeholder="Mesajınızı Yazınız..."></textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} className="text-end">
                                            <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary"
                                                value="Gönder" />
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Contact;