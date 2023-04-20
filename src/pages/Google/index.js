import React from 'react';
import { Container } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import AllGoogle from './AllGoogle';
import {title} from "../../config";

const GoogleList = () => {
    document.title = title.name;
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Google Verileri" pageTitle="Google" />
                    <AllGoogle />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default GoogleList;