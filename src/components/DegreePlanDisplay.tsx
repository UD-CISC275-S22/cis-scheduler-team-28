import { Button, Col, Container, Row } from "react-bootstrap";
import { SemesterDisplay } from "./SemesterDisplay";
import { DegreePlan } from "../interfaces/degreeplan";
import { AddDegreePlan } from "./AddDegreePlan";
import { AddSemester } from "./AddSemester";
import React from "react";

export function DegreePlanDisplay({
    degreeplanList,
    setDegreeplanList
}: {
    degreeplanList: DegreePlan[];
    setDegreeplanList: (degreeplanList: DegreePlan[]) => void;
}): JSX.Element {
    const [openPlan, setOpenPlan] = React.useState(false);
    const handleOpenPlan = () => setOpenPlan(true);
    const handleClosePlan = () => setOpenPlan(false);
    const [openSem, setOpenSem] = React.useState(false);
    const handleOpenSem = () => setOpenSem(true);
    const handleCloseSem = () => setOpenSem(false);
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
                    <Button
                        className="add-degree-plan"
                        data-testid="AddPlan"
                        onClick={handleOpenPlan}
                    >
                        Add Plan
                    </Button>
                </Col>
                <AddDegreePlan
                    show={openPlan}
                    handleClose={handleClosePlan}
                    degreeplanList={degreeplanList}
                    setDegreeplanList={setDegreeplanList}
                ></AddDegreePlan>
            </Row>
            <Row>
                <Col>
                    <Button
                        className="add-semester"
                        data-testid="AddSemester"
                        onClick={handleOpenSem}
                    >
                        Add Semester
                    </Button>
                </Col>
                <AddSemester
                    show={openSem}
                    handleClose={handleCloseSem}
                    degreeplanList={degreeplanList}
                    setDegreeplanList={setDegreeplanList}
                ></AddSemester>
            </Row>
            <SemesterDisplay
                degreeplanList={degreeplanList}
                setDegreeplanList={setDegreeplanList}
            ></SemesterDisplay>
        </Container>
    );
}
