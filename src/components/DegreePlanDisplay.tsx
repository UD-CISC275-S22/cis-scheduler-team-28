import React from "react";
import { Button, Container } from "react-bootstrap";
import { SemesterDisplay } from "./SemesterDisplay";
import { DegreePlan } from "../interfaces/degreeplan";
import { EditDegreePlan } from "./EditDegreePlan";

export function DegreePlanDisplay({
    degreeplan,
    setDegreeplan
}: {
    degreeplan: DegreePlan;
    setDegreeplan: (degreeplan: DegreePlan) => void;
    show: boolean;
}): JSX.Element {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                show={open}
                handleClose={handleClose}
                degreeplan={degreeplan}
                setDegreeplan={setDegreeplan}
            ></EditDegreePlan>
            <p></p>
        </Container>
    );
}
