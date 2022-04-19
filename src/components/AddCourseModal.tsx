import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function AddCourse({
    show,
    handleClose,
    addCourse
}: {
    show: boolean;
    handleClose: () => void;
    addCourse: (newCourse: Course) => void;
}) {
    const [code, setCode] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [credits, setCredits] = useState<string>("");
    function saveChanges() {
        addCourse({
            code: "",
            title: "",
            description: "",
            credits: 0,
            prereq: [],
            type: []
        });
        handleClose();
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add A Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="AddCourse" as={Row}>
                        <Form.Label column sm={3}>
                            Course Code:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={code}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setCode(event.target.value)}
                            />
                        </Col>
                        <Form.Label column sm={3}>
                            Course Title:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={title}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTitle(event.target.value)}
                            />
                        </Col>
                        <Form.Label column sm={3}>
                            Course Description:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={description}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setDescription(event.target.value)}
                            />
                        </Col>
                        <Form.Label column sm={3}>
                            Course Credits:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={credits}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setCredits(event.target.value)}
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
        </div>
    );
}
