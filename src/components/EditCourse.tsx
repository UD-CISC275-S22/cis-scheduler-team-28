import React, { useState } from "react";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function EditCourseModal({
    show,
    handleClose,
    updateCourse,
    course
}: {
    show: boolean;
    handleClose: () => void;
    updateCourse: (oldCourse: Course, newCourse: Course) => void;
    course: Course;
}) {
    const [title, setTitle] = useState<string>(course.title);
    const [code, setCode] = useState<string>(course.code);
    const [credits, setCredits] = useState<string>(course.credits);

    function saveChanges() {
        const newCourse: Course = {
            title: title,
            code: code,
            credits: credits,
            description: "",
            prereq: [],
            type: []
        };
        updateCourse(course, newCourse);
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header>
                <Modal.Title>Edit Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*Title */}
                <Form.Group as={Row}>
                    <Form.Label column sm={10}>
                        Name:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Code */}
                <Form.Group as={Row}>
                    <Form.Label column sm={10}>
                        Code:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Credits */}
                <Form.Group as={Row}>
                    <Form.Label column sm={10}>
                        Credits:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="number"
                            value={credits}
                            onChange={(e) => setCredits(e.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="seconary"
                    onClick={handleClose}
                    data-testid="cancel-button"
                >
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    onClick={saveChanges}
                    data-testid="save-button"
                >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
