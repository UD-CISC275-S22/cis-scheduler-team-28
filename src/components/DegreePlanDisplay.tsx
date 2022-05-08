import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { SemesterDisplay } from "./SemesterDisplay";
import { DegreePlan } from "../interfaces/degreeplan";
import { EditDegreePlan } from "./EditDegreePlan";

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
    const [chosenPlan, setChosenPlan] = useState<string>(
        degreeplanList[0].title
    );
    function clearSemesters(degreeplan: DegreePlan) {
        setDegreeplan({ ...degreeplan, semesters: [] });
    }
    function deletePlan(id: string) {
        setDegreeplanList(
            degreeplanList.filter(
                (degreeplan: DegreePlan): boolean => degreeplan.title !== id
            )
        );
        setChosenPlan(degreeplanList[0].title);
    }

    return (
        <Container>
            <Row>
                <h1>{degreeplan.title}</h1>
                <SemesterDisplay
                    degreeplan={degreeplan}
                    setDegreeplan={setDegreeplan}
                ></SemesterDisplay>
                <Col>
                    <Button onClick={() => clearSemesters(degreeplan)}>
                        Clear Semesters
                    </Button>
                </Col>
                <Col>
                    <Button className="edit-degree-plan" onClick={handleOpen}>
                        Edit Degree Plan
                    </Button>
                </Col>
                <EditDegreePlan
                    show={open}
                    handleClose={handleClose}
                    degreeplan={degreeplan}
                    setDegreeplan={setDegreeplan}
                    degreeplanList={degreeplanList}
                    setDegreeplanList={setDegreeplanList}
                ></EditDegreePlan>
                <Col>
                    <Button onClick={() => deletePlan(chosenPlan)}>
                        Delete Delete Plan
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
