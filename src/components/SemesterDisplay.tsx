import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { v4 as uuid } from "uuid";

export function SemesterDisplay({
    semester
}: {
    semester: Semester;
}): JSX.Element {
    return (
        <>
            <div>
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
                                <tr key={uuid()}>
                                    <td>{course.code}</td>
                                    <td>{course.type}</td>
                                    <td>{course.credits}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </div>
            <div>
                <Button onClick={() => (semester.courses = [])}>
                    Clear Courses
                </Button>
            </div>
        </>
    );
}
