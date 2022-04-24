import React, { useState } from "react";
import "./App.css";
import { DegreePlan } from "./interfaces/degreeplan";
import { DegreePlanDisplay } from "./components/DegreePlanDisplay";
import degreeplanData from "./data/mockdata.json";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

const DEGREEPLAN = degreeplanData as DegreePlan;

function App(): JSX.Element {
    const [degreeplan] = useState<DegreePlan>(DEGREEPLAN);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Row>
                        <Col>
                            <p>UD CIS Scheduler Site</p>
                            <img src={require("./ud.jpeg")} />
                        </Col>
                        <Col>
                            <p></p>
                            <Button
                                className="App-directions"
                                onClick={handleOpen}
                            >
                                Scheduler Steps
                            </Button>
                            <Modal show={open} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Welcome Message</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Welcome to the scheduler for UD CS and CIS
                                    degrees! It can be very difficult to
                                    navigate the college degree planning world
                                    without actual advisors, so we are creating
                                    a site to help students and professor.
                                    Follow the buttons and switches to add, edit
                                    and remove your courses and semesters that
                                    build your degree plan!
                                </Modal.Body>
                                <Modal.Footer></Modal.Footer>
                            </Modal>
                            <p></p>
                            <p>
                                Final Project Done By Lexi Anderson and Sarah
                                Kimak
                            </p>
                        </Col>
                    </Row>
                </Container>
            </header>
            <div>
                Degree Plans:
                <li>{degreeplan.title}</li>
            </div>
            <DegreePlanDisplay degreeplan={degreeplan}></DegreePlanDisplay>
        </div>
    );
}

export default App;
