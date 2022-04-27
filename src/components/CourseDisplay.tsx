import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { EditCourseModal } from "./EditCourse";

export function SemesterDisplay({
    course,
    updateCourse,
    deleteCourse
}: {
    course: Course;
    updateCourse: (oldCourse: Course, newCourse: Course) => void;
    deleteCourse: (course: Course) => void;
}): JSX.Element {
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);
    const [isOpened, toggleOpened] = useState<boolean>(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div
            onClick={() => toggleOpened(!isOpened)}
            style={{
                backgroundColor: "white",
                borderRadius: "25px",
                padding: "10px",
                border: "1px solid black"
            }}
        >
            <h4>
                {course.code} {course.title} {course.prereq}
            </h4>
            <h6>{course.credits} Credit(s)</h6>
            <Button className="course-info" onClick={handleOpen}>
                Course Info
            </Button>
            <Modal show={open} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Course Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{course.description}</p>
                    <p>Counts for: {course.type}</p>
                    <p>Prereq: {course.prereq}</p>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
            <Button className="m-2" onClick={handleShowEditModal}>
                Edit Course
            </Button>
            <Button className="m-2" onClick={() => deleteCourse(course)}>
                Delete Course
            </Button>
            <EditCourseModal
                show={showEditModal}
                handleClose={handleCloseEditModal}
                course={course}
                updateCourse={updateCourse}
            ></EditCourseModal>
        </div>
    );
}
