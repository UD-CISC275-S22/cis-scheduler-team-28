import React from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { DegreePlan } from "../interfaces/degreeplan";
import { v4 as uuid } from "uuid";

export function SemesterDisplay({
    degreeplanList,
    setDegreeplanList
}: {
    degreeplanList: DegreePlan[];
    setDegreeplanList: (degreeplanList: DegreePlan[]) => void;
}): JSX.Element {
    function clearCourses(semtitle: string) {
        setDegreeplanList(
            degreeplanList.map(
                (originalPlan: DegreePlan, index): DegreePlan =>
                    index !== 0
                        ? originalPlan
                        : {
                              ...originalPlan,
                              semesters: originalPlan.semesters.map(
                                  (originalSem: Semester): Semester =>
                                      originalSem.title !== semtitle
                                          ? originalSem
                                          : { ...originalSem, courses: [] }
                              )
                          }
            )
        );
    }
    return (
        <Container>
            {degreeplanList[0].semesters.map((semester: Semester) => (
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
                        <Button onClick={() => clearCourses(semester.title)}>
                            Clear Courses
                        </Button>
                    </div>
                </>
            ))}
        </Container>
    );
}
