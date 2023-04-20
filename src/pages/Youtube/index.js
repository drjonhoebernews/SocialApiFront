import React from 'react';
import { Container } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import AllYoutube from './AllYoutube';
import {title} from "../../config";

const YoutubeList = () => {
    document.title = title.name;
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Youtube Verileri" pageTitle="Youtube" />
                    <AllYoutube />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default YoutubeList;