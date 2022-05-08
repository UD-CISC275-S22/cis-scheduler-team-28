import React, { useState } from "react";
import "./App.css";
import { DegreePlan } from "./interfaces/degreeplan";
import { DegreePlanDisplay } from "./components/DegreePlanDisplay";
import defaultdegreeplan from "./data/defaultsemester.json";
import mockdegreeplan from "./data/mockdata.json";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { CatalogCourses } from "./components/CatalogCourses";
import { DndProvider } from "react-dnd";
import { CoursePool } from "./components/CoursePool";
import { HTML5Backend } from "react-dnd-html5-backend";

const DEFAULTDEGREEPLAN = defaultdegreeplan as unknown as DegreePlan;
const MOCKDEGREEPLAN = mockdegreeplan as unknown as DegreePlan;
const DEGREEPLANLIST: DegreePlan[] = [DEFAULTDEGREEPLAN, MOCKDEGREEPLAN];

function App(): JSX.Element {
    const [degreeplanList, setDegreeplanList] =
        useState<DegreePlan[]>(DEGREEPLANLIST);
    const [degreeplan, setDegreeplan] = useState<DegreePlan>(degreeplanList[0]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function updateDegreeplan(title: string) {
        const degreeplanIndex = degreeplanList.findIndex(
            (degreeplan: DegreePlan): boolean => degreeplan.title === title
        );
        setDegreeplan({
            ...degreeplan,
            title: degreeplanList[degreeplanIndex].title,
            semesters: degreeplanList[degreeplanIndex].semesters
        });
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
                                    <Modal.Title>
                                        Welcome Message and About Requirements
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Col>
                                        Welcome to the scheduler for UD CS and
                                        CIS degrees! It can be very difficult to
                                        navigate the college degree planning
                                        world without actual advisors, so we are
                                        creating a site to help students and
                                        professor. Follow the buttons and
                                        switches to add, edit and remove your
                                        courses and semesters that build your
                                        degree plan!
                                    </Col>
                                    <Col>
                                        Each degree plan has a variety of
                                        requirement categories and certain
                                        courses that fulfill them. They are
                                        listed within the table to display what
                                        each course counts for with a variety of
                                        shorthand codes. Courses that appear to
                                        have many things listed COE is college
                                        of engineering, univ is a University
                                        fulfillment, univA/B/etc means it
                                        fulfills that category of a breadth
                                        requirement, core and concentration are
                                        within the CS major, and electives are
                                        free courses all up to you!
                                    </Col>
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
            <div>
                <DegreePlanDisplay
                    degreeplan={degreeplan}
                    setDegreeplan={setDegreeplan}
                    degreeplanList={degreeplanList}
                    setDegreeplanList={setDegreeplanList}
                ></DegreePlanDisplay>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <CatalogCourses></CatalogCourses>
                        </Col>
                        <Col>
                            <h3>Course Pool:</h3>
                            <DndProvider
                                debugMode={true}
                                backend={HTML5Backend}
                            >
                                <CoursePool></CoursePool>
                            </DndProvider>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
