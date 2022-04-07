import React from "react";
import { Container, Table } from "react-bootstrap";
import { CourseDisplay } from "./CourseDisplay";
import { Semester } from "../interfaces/semester";

export function SemesterDisplay({
    semester
}: {
    semester: Semester;
}): JSX.Element {
    return (
        <Container>
            <h3>{semester.title}</h3>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Type</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    <CourseDisplay course={semester.courses[0]}></CourseDisplay>
                </tbody>
            </Table>
        </Container>
    );
}
