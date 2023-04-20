import React, { useState, useEffect } from 'react';
import {Card, CardBody, CardHeader, Col, Row} from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { getCountryChartsData } from "../../store/dashboardAnalytics/action";
import {Link} from "react-router-dom";
import {topDrop} from "../../common/data";
import axios from "axios";
import {backend_api} from "../../config";

const LiveUsers = () => {
    const dispatch = useDispatch();
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        async function fetchTweets() {
            try {
                const response = await fetch(`${backend_api.url}twitterstream/politics_live_stream`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                if (data && data.tweets) {
                    setTweets(data.tweets);
                } else {
                    console.error("Error fetching tweets: Data is undefined or doesn't contain 'tweets' property");
                }
            } catch (error) {
                console.error("Error fetching tweets:", error);
            }
        }


        const intervalId = setInterval(() => {
            fetchTweets();
        }, 50000);

        fetchTweets();

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <React.Fragment>
            <Col xxl={5}>
                <Row className="h-100">

                    <Col xl={12}>
                        <Card>
                            <CardHeader className="d-flex align-items-center">
                                <h6 className="card-title mb-0 flex-grow-1">TWİTTER CANLI AKIŞ</h6>
                                <Link className="text-muted" to="#">
                                    Tüm Tablo<i className="ri-arrow-right-line align-bottom"></i>
                                </Link>
                            </CardHeader>
                            <CardBody style={{ height: 584 }}>
                                <div className="table-responsive table-card">
                                    <table className="table table-borderless align-middle">
                                        <tbody>
                                        {tweets.map((tweet, key) => {
                                            // Tarihi Türkçe biçimlendirme seçenekleri
                                            const dateOptions = {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                                hour: "numeric",
                                                minute: "numeric",
                                                second: "numeric",
                                                hour12: false,
                                            };
                                            // Tarihi Türkçe biçimlendirme
                                            const tweetDate = new Date(tweet.created_at);
                                            const formattedDate = tweetDate.toLocaleDateString("tr-TR", dateOptions);

                                            // Arka plan rengini değiştirme
                                            const rowStyle = key % 2 === 0 ? { backgroundColor: 'transparent' } : { backgroundColor: 'rgb(40 40 40)' };

                                            return (
                                                <tr key={key} style={rowStyle}>
                                                    <td>
                                                        <div className="d-flex align-items-center mb-2">
                                                            <div className="flex-shrink-0">
                                                                <i className="mdi mdi-twitter la-2x"></i>
                                                            </div>
                                                            <div className="ms-2">
                                                                <h6 className="fs-15 mb-1">{tweet.text}</h6>
                                                                <p className="mb-0 text-muted">
                                                                    {tweet.user} - {formattedDate}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            </CardBody>

                        </Card>
                    </Col>

                </Row>
            </Col>
        </React.Fragment>
    );
};

export default LiveUsers;