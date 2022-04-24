import React, { useState } from "react";
import "./App.css";
import { DegreePlan } from "./interfaces/degreeplan";
import { DegreePlanDisplay } from "./components/DegreePlanDisplay";
import defaultdegreeplan from "./data/defaultsemester.json";
import mockdegreeplan from "./data/mockdata.json";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";

const DEFAULTDEGREEPLAN = defaultdegreeplan as DegreePlan;
const MOCKDEGREEPLAN = mockdegreeplan as DegreePlan;
const DEGREEPLANLIST: DegreePlan[] = [DEFAULTDEGREEPLAN, MOCKDEGREEPLAN];

function App(): JSX.Element {
    const [degreeplanList] = useState<DegreePlan[]>(DEGREEPLANLIST);
    const [degreeplan, setDegreeplan] = useState<DegreePlan>(degreeplanList[0]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function updateDegreeplan(title: string) {
        const degreeplanIndex = degreeplanList.findIndex(
            (degreeplan: DegreePlan): boolean => degreeplan.title === title
        );
        setDegreeplan(degreeplanList[degreeplanIndex]);
    }

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
                <Form.Group controlId="chosen-degreeplan">
                    <Form.Label>Choose Degree Plan to Display:</Form.Label>
                    <Form.Select
                        value={degreeplan.title}
                        onChange={(
                            event: React.ChangeEvent<HTMLSelectElement>
                        ) => updateDegreeplan(event.target.value)}
                    >
                        {degreeplanList.map((degreeplan: DegreePlan) => (
                            <option
                                key={degreeplan.title}
                                value={degreeplan.title}
                            >
                                {degreeplan.title}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <DegreePlanDisplay degreeplan={degreeplan}></DegreePlanDisplay>
        </div>
    );
}

export default App;
