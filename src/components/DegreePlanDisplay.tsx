import { Button, Col, Container, Row } from "react-bootstrap";
import { SemesterDisplay } from "./SemesterDisplay";
import { DegreePlan } from "../interfaces/degreeplan";
import { EditDegreePlan } from "./EditDegreePlan";
import React from "react";

export function DegreePlanDisplay({
    degreeplan,
    setDegreeplan,
    degreeplanList,
    setDegreeplanList
}: {
    degreeplan: DegreePlan;
    setDegreeplan: (degreeplan: DegreePlan) => void;
    degreeplanList: DegreePlan[];
    setDegreeplanList: (degreeplanList: DegreePlan[]) => void;
}): JSX.Element {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    function clearSemesters(degreeplan: DegreePlan) {
        setDegreeplan({ ...degreeplan, semesters: [] });
    }

    return (
        <Container>
            <Row>
                <h1>{degreeplan.title}</h1>
                <Col>
                    <Button onClick={() => clearSemesters(degreeplan)}>
                        Clear Semesters
                    </Button>
                </Col>
                <Col>
                    <Button onClick={handleOpen}>Edit Plan</Button>
                </Col>
                <SemesterDisplay
                    degreeplan={degreeplan}
                    setDegreeplan={setDegreeplan}
                ></SemesterDisplay>
                <EditDegreePlan
                    show={open}
                    handleClose={handleClose}
                    degreeplan={degreeplan}
                    setDegreeplan={setDegreeplan}
                    degreeplanList={degreeplanList}
                    setDegreeplanList={setDegreeplanList}
                ></EditDegreePlan>
            </Row>
        </Container>
    );
}
