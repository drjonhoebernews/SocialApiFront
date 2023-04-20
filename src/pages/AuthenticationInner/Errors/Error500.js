import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Import Images
import error500 from "../../../assets/images/error500.png";

const Error500 = () => {
document.title="500 Hata Sayfası | MedyaIzi Yönetim Paneli";
    return (
        <React.Fragment>
            <div className="auth-page-wrapper py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="auth-page-content overflow-hidden p-0">
                    <Container fluid={true}>
                        <Row className="justify-content-center">
                            <Col xl={4} className="text-center">
                                <div className="error-500 position-relative">
                                    <img src={error500} alt="" className="img-fluid error-500-img error-img" />
                                    <h1 className="title text-muted">500</h1>
                                </div>
                                <div>
                                    <h4>Internal Server Error!</h4>
                                    <p className="text-muted w-75 mx-auto">Sunucu Hatası 500. Tam olarak ne olduğundan emin değiliz, ancak sunucularımız bir şeylerin ters gittiğini söylüyor.</p>
                                    <Link to="/dashboard" className="btn btn-success"><i className="mdi mdi-home me-1"></i>Geri Dön</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Error500;