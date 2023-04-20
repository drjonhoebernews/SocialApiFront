import React, {useEffect, useState} from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import CountUp from "react-countup";

//Import Icons
import FeatherIcon from "feather-icons-react";
import axios from "axios";
import {backend_api} from "../../config";

const Widget = () => {
    const [allData, setAllData] = useState(0);
    const [totalTweets, setTotalTweets] = useState(0);
    const [totalGoogle, setTotalGoogle] = useState(0);
    const [totalYoutube, setTotalYoutube] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${backend_api.url}twitter/total_tweets`);
                setTotalTweets(response.total_tweets);
                setAllData(response.total_documents);
                setTotalGoogle(response.total_google);
                setTotalYoutube(response.total_youtube)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        const interval = setInterval(() => {
            fetchData();
        }, 10000); // 10000 ms = 10 saniye

        return () => clearInterval(interval);
    }, []);
    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="fw-medium text-muted mb-0">Toplam DATA</p>
                                    <h2 className="mt-4 ff-secondary fw-semibold">
                                        <span className="counter-value" data-target="97.66">
                                            <CountUp
                                                start={allData}
                                                end={allData}
                                                duration={4}
                                            />
                                        </span></h2>
                                    <p className="mb-0 text-muted"><span className="badge bg-light text-success mb-0">
                                        <i className="ri-arrow-up-line align-middle"></i> 16.24 %
                                    </span> Günlük veri Çekim oranı</p>
                                </div>
                                <div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                            <FeatherIcon
                                                icon="activity"
                                                className="text-info"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="fw-medium text-muted mb-0">Toplam Tweet</p>
                                    <h2 className="mt-4 ff-secondary fw-semibold">
                                        <span className="counter-value">
                                            <CountUp
                                                start={totalTweets}
                                                end={totalTweets}
                                                duration={4}
                                            />
                                            </span></h2>
                                    <p className="mb-0 text-muted"><span className="badge bg-light text-success mb-0">
                                        <i className="ri-arrow-up-line align-middle"></i> 16.24 %
                                    </span> Günlük veri Çekim oranı</p>
                                </div>
                                <div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                            <FeatherIcon
                                                icon="twitter"
                                                className="text-info"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="fw-medium text-muted mb-0">Toplam Google</p>
                                    <h2 className="mt-4 ff-secondary fw-semibold">
                                        <span className="counter-value" data-target="97.66">
                                            <CountUp
                                                start={totalGoogle}
                                                end={totalGoogle}
                                                duration={4}
                                            />
                                        </span></h2>
                                    <p className="mb-0 text-muted"><span className="badge bg-light text-success mb-0">
                                        <i className="ri-arrow-up-line align-middle"></i> 16.24 %
                                    </span> Günlük veri Çekim oranı</p>
                                </div>
                                <div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                            <FeatherIcon
                                                icon="rss"
                                                className="text-info"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="fw-medium text-muted mb-0">Toplam Youtube</p>
                                    <h2 className="mt-4 ff-secondary fw-semibold">
                                        <span className="counter-value">
                                            <CountUp
                                                start={totalYoutube}
                                                end={totalYoutube}
                                                duration={4}
                                            />
                                            </span></h2>
                                    <p className="mb-0 text-muted"><span className="badge bg-light text-success mb-0">
                                        <i className="ri-arrow-up-line align-middle"></i> 16.24 %
                                    </span> Günlük veri Çekim oranı</p>
                                </div>
                                <div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-info rounded-circle fs-2">
                                            <FeatherIcon
                                                icon="youtube"
                                                className="text-info"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


        </React.Fragment>
    );
};

export default Widget;