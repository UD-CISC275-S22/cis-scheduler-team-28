import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function EditCourses({
    code,
    title,
    descr,
    credits,
    preReqs,
    type,
    editCourse,
    changeEditMode
}: {
    code: string;
    title: string;
    credits: string;
    descr: string;
    preReqs: string;
    type: string;
    editCourse: (id: string, newCourse: Course) => void;
    changeEditMode: () => void;
}): JSX.Element {
    const [newCode, setNewCode] = useState<string>(code);
    const [newTitle, setNewTitle] = useState<string>(title);
    const [newCredits, setNewCredits] = useState<string>(credits);

    function save() {
        if (code) {
            editCourse(code, {
                code: newCode,
                title: newTitle,
                descr: descr,
                credits: newCredits,
                preReq: preReqs,
                type: type
            });
        }
        changeEditMode();
    }
    function cancel() {
        changeEditMode();
    }
    return (
        <div>
            <h2>Edit:</h2>
            <Container>
                <Row>
                    <Col>
                        <Form.Group controlId="formClassName" as={Row}>
                            <Form.Label column sm={2}>
                                Title:
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    value={newTitle}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setNewTitle(event.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="formClassCode" as={Row}>
                            <Form.Label column sm={2}>
                                Code:
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    value={newCode}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setNewCode(event.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group controlID="formCourseCredits" as={Row}>
                            <Form.Label column sm={2}>
                                Credits:
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    type="number"
                                    value={newCredits}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setNewCredits(event.target.value)}
                                />
                            </Col>
                        </Form.Group>
                        <Button
                            onClick={save}
                            variant="success"
                            className="me-4"
                        >
                            Save
                        </Button>
                        <Button
                            onClick={cancel}
                            variant="warning"
                            className="me-5"
                        >
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
