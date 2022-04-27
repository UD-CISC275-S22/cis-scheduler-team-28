import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";

export function SemesterDisplay({
    semester
}: {
    semester: Semester;
}): JSX.Element {
    const [courseList, setCourseList] = useState<Course[]>(semester.courses);

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
                            {courseList.map((course: Course) => (
                                <tr key={course.code}>
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
                <Button onClick={() => setCourseList([])}>Clear Courses</Button>
            </div>
        </>
    );
}
