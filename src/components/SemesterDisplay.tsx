import React from "react";
import { Button, Container, Form, Table, Col } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { DegreePlan } from "../interfaces/degreeplan";
import { AddCourse } from "./AddCourse";
import { v4 as uuid } from "uuid";

export function SemesterDisplay({
    degreeplanList,
    setDegreeplanList
}: {
    degreeplanList: DegreePlan[];
    setDegreeplanList: (degreeplanList: DegreePlan[]) => void;
}): JSX.Element {
    const [currSemester, setCurrSemester] = React.useState(
        degreeplanList[0].semesters[0]
    );
    const [openCourse, setOpenCourse] = React.useState(false);
    function handleOpenCourse(semester: Semester) {
        setCurrSemester(semester);
        setOpenCourse(true);
    }
    const handleCloseCourse = () => setOpenCourse(false);
    function makeEmptySem(
        originalPlan: DegreePlan,
        semtitle: string
    ): DegreePlan {
        return {
            ...originalPlan,
            semesters: originalPlan.semesters.map(
                (originalSem: Semester): Semester =>
                    originalSem.title !== semtitle
                        ? originalSem
                        : { ...originalSem, courses: [] }
            )
        };
    }
    function clearCourses(semtitle: string) {
        setDegreeplanList(
            degreeplanList.map(
                (originalPlan: DegreePlan, index): DegreePlan =>
                    index !== 0
                        ? originalPlan
                        : makeEmptySem(originalPlan, semtitle)
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
                                                data-testid="fulfilled"
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
                        <Col>
                            <Button
                                onClick={() => clearCourses(semester.title)}
                                data-testid="ClearCoursesButton"
                            >
                                Clear Courses
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                onClick={() => handleOpenCourse(semester)}
                                data-testid="AddCourseModal"
                            >
                                Add Course {semester.title}
                            </Button>
                        </Col>
                    </div>
                </>
            ))}
            <AddCourse
                show={openCourse}
                handleClose={handleCloseCourse}
                currSemester={currSemester.title}
                degreeplanList={degreeplanList}
                setDegreeplanList={setDegreeplanList}
            ></AddCourse>
        </Container>
    );
}
