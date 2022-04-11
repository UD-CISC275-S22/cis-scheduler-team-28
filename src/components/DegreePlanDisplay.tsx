import React from "react";
import { Container } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterDisplay } from "./SemesterDisplay";
import { DegreePlan } from "../interfaces/degreeplan";

export function DegreePlanDisplay({
    degreeplan
}: {
    degreeplan: DegreePlan;
}): JSX.Element {
    return (
        <Container>
            {degreeplan.semesters.map((semester: Semester) => (
                <SemesterDisplay
                    key={semester.title}
                    semester={semester}
                ></SemesterDisplay>
            ))}
        </Container>
    );
}
