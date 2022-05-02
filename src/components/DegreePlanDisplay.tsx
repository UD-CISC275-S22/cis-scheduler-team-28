import React from "react";
import { Button, Container } from "react-bootstrap";
import { SemesterDisplay } from "./SemesterDisplay";
import { DegreePlan } from "../interfaces/degreeplan";

export function DegreePlanDisplay({
    degreeplan,
    setDegreeplan
}: {
    degreeplan: DegreePlan;
    setDegreeplan: (degreeplan: DegreePlan) => void;
}): JSX.Element {
    function clearSemesters(degreeplan: DegreePlan) {
        setDegreeplan({ ...degreeplan, semesters: [] });
    }

    /*function clearSemester(title: string, degreeplan: DegreePlan) {
        setDegreeplan(
            degreeplan.semesters.filter(
                (semester: Semester): boolean => semester.title !== title
            )
        );
    }*/

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
        </Container>
    );
}
