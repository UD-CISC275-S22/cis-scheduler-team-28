import React from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { DegreePlan } from "../interfaces/degreeplan";
import { v4 as uuid } from "uuid";

export function SemesterDisplay({
    degreeplan,
    setDegreeplan
}: {
    degreeplan: DegreePlan;
    setDegreeplan: (degreeplan: DegreePlan) => void;
}): JSX.Element {
    function clearCourses(
        degreeplan: DegreePlan,
        semtitle: string
    ): DegreePlan {
        return {
            ...degreeplan,
            semesters: degreeplan.semesters.map((semester: Semester) =>
                semester.title !== semtitle
                    ? semester
                    : { ...semester, courses: [] }
            )
        };
    }
    return (
        <Container>
            {degreeplan.semesters.map((semester: Semester) => (
                <>
                    <Container>
                        <h3>{semester.title}</h3>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Requirement</th>
                                    <th>Credits</th>
                                    <th>Course Info</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {semester.courses.map((course: Course) => (
                                    <tr key={uuid()}>
                                        <td>{course.code}</td>
                                        <td>{course.type}</td>
                                        <td>{course.credits}</td>
                                        <td>
                                            <p>
                                                <b>Course Title: </b>
                                                {course.title}
                                            </p>
                                            <p>
                                                <b>Course Prereqs:</b>{" "}
                                                {course.preReq}
                                            </p>
                                        </td>
                                        <td>
                                            <Form.Check
                                                type="checkbox"
                                                name="courses"
                                                label={"Completed"}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                    <div>
                        <Button
                            onClick={() =>
                                setDegreeplan(
                                    clearCourses(degreeplan, semester.title)
                                )
                            }
                        >
                            Clear Courses
                        </Button>
                    </div>
                </>
            ))}
        </Container>
    );
}
