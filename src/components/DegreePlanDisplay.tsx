import { Button, Col, Container, Row } from "react-bootstrap";
import { SemesterDisplay } from "./SemesterDisplay";
import { DegreePlan } from "../interfaces/degreeplan";
import { AddDegreePlan } from "./AddDegreePlan";
import React from "react";

export function DegreePlanDisplay({
    degreeplanList,
    setDegreeplanList
}: {
    degreeplanList: DegreePlan[];
    setDegreeplanList: (degreeplanList: DegreePlan[]) => void;
}): JSX.Element {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    function clearSemesters() {
        setDegreeplanList(
            degreeplanList.map(
                (originalPlan: DegreePlan, index): DegreePlan =>
                    index !== 0
                        ? originalPlan
                        : { ...originalPlan, semesters: [] }
            )
        );
    }

    return (
        <Container>
            <Row>
                <h1>{degreeplanList[0].title}</h1>
                <Col>
                    <Button onClick={() => clearSemesters()}>
                        Clear Semesters
                    </Button>
                </Col>
                <Col>
                    <Button className="edit-degree-plan" onClick={handleOpen}>
                        Edit Plan
                    </Button>
                </Col>
                <Col>
                    <Button className="add-degree-plan" onClick={handleOpen}>
                        Add Plan
                    </Button>
                </Col>
                <SemesterDisplay
                    degreeplanList={degreeplanList}
                    setDegreeplanList={setDegreeplanList}
                ></SemesterDisplay>
                <AddDegreePlan
                    show={open}
                    handleClose={handleClose}
                    degreeplanList={degreeplanList}
                    setDegreeplanList={setDegreeplanList}
                ></AddDegreePlan>
            </Row>
        </Container>
    );
}
