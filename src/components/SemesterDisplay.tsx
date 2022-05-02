import React from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                                    <th>Type</th>
                                    <th>Credits</th>
                                    <th>Course Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {semester.courses.map((course: Course) => (
                                    <tr key={uuid()}>
                                        <td>{course.code}</td>
                                        <td>{course.type}</td>
                                        <td>{course.credits}</td>
                                        <td>
                                            <Button
                                                className="course-info"
                                                onClick={handleOpen}
                                            >
                                                Expand
                                            </Button>
                                            <Modal
                                                show={open}
                                                onHide={handleClose}
                                            >
                                                <Modal.Header closeButton>
                                                    <Modal.Title>
                                                        {course.title}
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p>
                                                        Course Description:{" "}
                                                        {course.description}
                                                    </p>
                                                    <p>
                                                        Course Prereqs:{" "}
                                                        {course.prereq}
                                                    </p>
                                                    <p>
                                                        Requirement Fulfilled:{" "}
                                                        {course.type}
                                                    </p>
                                                </Modal.Body>
                                                <Modal.Footer></Modal.Footer>
                                            </Modal>
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
