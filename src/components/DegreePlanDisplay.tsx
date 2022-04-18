import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterDisplay } from "./SemesterDisplay";
import { DegreePlan } from "../interfaces/degreeplan";

export function DegreePlanDisplay({
    degreeplan
}: {
    degreeplan: DegreePlan;
}): JSX.Element {
    const [semesterList, setSemesterList] = useState<Semester[]>(
        degreeplan.semesters
    );

    return (
        <Container>
            <h1>{degreeplan.title}</h1>
            {semesterList.map((semester: Semester) => (
                <SemesterDisplay
                    key={semester.title}
                    semester={semester}
                ></SemesterDisplay>
            ))}
            <Button onClick={() => setSemesterList([])}>Clear Semesters</Button>
        </Container>
    );
}
