import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';
import ParticlesAuth from "../ParticlesAuth";

//import images
import logoLight from "../../../assets/images/logo-light.png";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";

const BasicLockScreen = () => {
document.title="Kilit Ekranı | MedyaIzi Yönetim Paneli";
    return (
        <React.Fragment>
            <div className="auth-page-content">
                <div className="auth-page-wrapper">
                    <ParticlesAuth>
                        <div className="auth-page-content">
                            <Container>
                                <Row>
                                    <Col lg={12}>
                                        <div className="text-center mt-sm-5 mb-4 text-white-50">
                                            <div>
                                                <Link to="/dashboard" className="d-inline-block auth-logo">
                                                    <img src={logoLight} alt="" height="20" />
                                                </Link>
                                            </div>
                                            <p className="mt-3 fs-15 fw-medium">MedyaIzi Yönetim Paneli</p>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="justify-content-center">
                                    <Col md={8} lg={6} xl={5}>
                                        <Card className="mt-4">
                                            <CardBody className="p-4">
                                                <div className="text-center mt-2">
                                                    <h5 className="text-primary">Kilit Ekranı</h5>
                                                    <p className="text-muted">Ekran kilidini açmak için şifrenizi girin!</p>
                                                </div>
                                                <div className="user-thumb text-center">
                                                    <img src={avatar1} className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                                                    <h5 className="font-size-15 mt-3">Medya İzi</h5>
                                                </div>
                                                <div className="p-2 mt-4">
                                                    <form>
                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="userpassword">Parola</label>
                                                            <input type="password" className="form-control" id="userpassword" placeholder="Parolanızı Giriniz" required />
                                                        </div>
                                                        <div className="mb-2 mt-4">
                                                            <Button color="success" className="w-100" type="submit">Kilidi Aç</Button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </CardBody>
                                        </Card>
                                        <div className="mt-4 text-center">
                                            <p className="mb-0">Geri Dönmek İstermisin? <Link to="/auth-signin-basic" className="fw-semibold text-primary text-decoration-underline"> Geri Dön </Link> </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </ParticlesAuth>
                </div>
            </div>
        </React.Fragment>
    );
};

export default BasicLockScreen;