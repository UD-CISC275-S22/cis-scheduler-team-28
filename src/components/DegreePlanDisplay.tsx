import React from "react";
import { Button, Container } from "react-bootstrap";
import { SemesterDisplay } from "./SemesterDisplay";
import { DegreePlan } from "../interfaces/degreeplan";
import { EditDegreePlan } from "./EditDegreePlan";

export function DegreePlanDisplay({
    degreeplan,
    setDegreeplan,
    show,
    handleOpen,
    handleClose
}: {
    degreeplan: DegreePlan;
    setDegreeplan: (degreeplan: DegreePlan) => void;
    show: boolean;
    handleOpen: () => void;
    handleClose: () => void;
}): JSX.Element {
    function clearSemesters(degreeplan: DegreePlan) {
        setDegreeplan({ ...degreeplan, semesters: [] });
    }

    return (
        <Container>
            <h1>{degreeplan.title}</h1>
            <SemesterDisplay
                degreeplan={degreeplan}
                setDegreeplan={setDegreeplan}
            ></SemesterDisplay>
            <Button onClick={() => clearSemesters(degreeplan)}>
                Clear Semesters
            </Button>
            <p></p>
            <Button className="edit-degree-plan" onClick={handleOpen}>
                Edit Degree Plan
            </Button>
            <EditDegreePlan
                show={show}
                handleClose={handleClose}
                degreeplan={degreeplan}
                setDegreeplan={setDegreeplan}
            ></EditDegreePlan>
            <p></p>
        </Container>
    );
}
