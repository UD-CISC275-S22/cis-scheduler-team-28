import React from "react";
import { Container, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
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
                    {semester.courses.map((course: Course) => (
                        <tr key={course.code}>
                            <td>{course.code}</td>
                            <td>{course.type}</td>
                            <td>{course.credits}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
