import React from 'react';
import { Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import AllTasks from './AllTasks';
import Widgets from './Widgets';
import {api, title} from "../../../config";

const TaskList = () => {
    document.title = title.name;
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Twitter Verileri" pageTitle="Twitter" />
                    {/*<Row>*/}
                    {/*    <Widgets />*/}
                    {/*</Row>*/}
                    <AllTasks />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TaskList;