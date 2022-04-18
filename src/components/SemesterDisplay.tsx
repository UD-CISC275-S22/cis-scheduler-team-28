import React, { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";

export function SemesterDisplay({
    semester
}: {
    semester: Semester;
}): JSX.Element {
    const [courseCode, setCode] = useState<string>("code");
    const [courseType, setType] = useState<string>("type");
    const [courseCredits, setCredits] = useState<string>("credits");
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [courseList, setCourseList] = useState<Course[]>(semester.courses);

    function updateCode(event: React.ChangeEvent<HTMLInputElement>) {
        setCode(event.target.value);
    }

    function updateType(event: React.ChangeEvent<HTMLInputElement>) {
        setType(event.target.value);
    }
    function updateCredits(event: React.ChangeEvent<HTMLInputElement>) {
        setCredits(event.target.value);
    }

    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditing(event.target.checked);
    }
    return (
        <>
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
            <div>
                <div>
                    <Form.Check
                        type="switch"
                        id="is-edit-mode"
                        label="Edit Course"
                        checked={isEditing}
                        onChange={updateEditing}
                    />
                    {isEditing && (
                        <div>
                            <Form.Group controlId="formCourseCode">
                                <Form.Label>Code:</Form.Label>
                                <Form.Control
                                    value={courseCode}
                                    onChange={updateCode}
                                />
                            </Form.Group>
                            <Form.Group controlId="formCourseType">
                                <Form.Label>Type:</Form.Label>
                                <Form.Control
                                    value={courseType}
                                    onChange={updateType}
                                />
                            </Form.Group>
                            <Form.Group controlId="formCourseCredits">
                                <Form.Label>Credits:</Form.Label>
                                <Form.Control
                                    value={courseCredits}
                                    onChange={updateCredits}
                                />
                            </Form.Group>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <Button onClick={() => setCourseList([])}>
                    Clear Semesters
                </Button>
            </div>
        </>
    );
}
