import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, ListGroup, ListGroupItem, Pagination, PaginationItem, PaginationLink, Row, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';

import SimpleBar from 'simplebar-react';

// Import Images
import product2 from "../../assets/images/products/img-2.png";
import product8 from "../../assets/images/products/img-8.png";
import product10 from "../../assets/images/products/img-10.png";

import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";

import { widgetsActivities, widgetsTasks } from "../../common/data/index";
import { OtherWidgetsCharts } from './WidgetsCharts';

const UpcomingActivity = () => {

    const chartDataOptions = [
        {
            id : 1,
            title : "Application",
            persantage : "16.24",
            series: [{
                name: "Results",
                data: [0, 68, 35, 90, 99],
            }],
            dataColors : '["--vz-success" , "--vz-transparent"]'
        },
        {
            id : 2,
            title : "Interviewed",
            persantage : "34.24",
            series: [{
                name: "Results",
                data: [0, 98, 85, 90, 67],
            }],
            dataColors : '["--vz-danger" , "--vz-transparent"]'
        },
        {
            id : 3,
            title : "Hired",
            persantage : "6.67",
            series: [{
                name: "Results",
                data: [0, 65, 103, 75, 120],
            }],
            dataColors : '["--vz-success" , "--vz-transparent"]'
        },
    ];
    
    return (
        <React.Fragment>
            <Row>
                <Col xxl={12}>
                    <Card className="card-height-100">
                        <CardHeader className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Upcoming Activities</h4>
                            <div className="flex-shrink-0">

                                <UncontrolledDropdown className="card-header-dropdown" direction='start'>
                                    <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                        <span className="text-muted fs-18"><i className="mdi mdi-dots-vertical"></i></span>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem>Edit</DropdownItem>
                                        <DropdownItem>Remove</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                            </div>
                        </CardHeader>

                        <CardBody className="pt-0">
                            <ListGroup className="border-dashed" flush>
                                {widgetsActivities.map((item, key) => (
                                    <ListGroupItem className="ps-0" key={key}>
                                        <Row className="align-items-center g-3">
                                            <Col className="col-auto">
                                                <div className="avatar-sm p-1 py-2 h-auto bg-light rounded-3">
                                                    <div className="text-center">
                                                        <h5 className="mb-0">{item.date}</h5>
                                                        <div className="text-muted">{item.weekDay}</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col className="col">
                                                <h5 className="text-muted mt-0 mb-1 fs-12 fw-semibold">{item.time}</h5>
                                                <Link to="#" className="text-reset fs-14 mb-0">{item.caption}</Link>
                                            </Col>
                                            <Col className="col-sm-auto">
                                                <div className="avatar-group">
                                                    {item.subItem.map((item, key) => (
                                                        <React.Fragment key={key}>
                                                            {item.img ? (<div className="avatar-group-item">
                                                                <Link to="#" className="d-inline-block" id={item.targetId}>
                                                                    <img src={item.img} alt="" className="rounded-circle avatar-xxs" />
                                                                </Link>
                                                            </div>) : (<div className="avatar-group-item">
                                                                <Link to="#">
                                                                    <div className="avatar-xxs">
                                                                        <span className={"avatar-title rounded-circle text-white " + item.bgcolor}>
                                                                            {item.imgNumber}
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </div>)
                                                            }
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            </Col>
                                        </Row>
                                    </ListGroupItem >))}
                            </ListGroup>

                            <Row className="align-items-center mt-2 text-center text-sm-start">
                                <Col className="col-sm">
                                    <div className="text-muted">Showing<span className="fw-semibold">4</span> of <span className="fw-semibold">125</span> Results
                                    </div>
                                </Col>
                                <Col className="col-sm-auto">

                                    <Pagination size='sm' className="pagination-separated pagination-sm justify-content-center justify-content-sm-start mb-0">
                                        <PaginationItem> <PaginationLink to="#"> ← </PaginationLink> </PaginationItem>
                                        <PaginationItem> <PaginationLink to="#"> 1 </PaginationLink> </PaginationItem>
                                        <PaginationItem active> <PaginationLink to="#"> 2 </PaginationLink> </PaginationItem>
                                        <PaginationItem> <PaginationLink to="#"> 3 </PaginationLink> </PaginationItem>
                                        <PaginationItem> <PaginationLink to="#"> → </PaginationLink> </PaginationItem>
                                    </Pagination>

                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    );
};

export default UpcomingActivity;