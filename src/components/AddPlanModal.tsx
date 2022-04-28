import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { DegreePlan } from "../interfaces/degreeplan";
import { Semester } from "../interfaces/semester";

export function AddPlan({
    show,
    handleClose,
    addPlan
}: {
    show: boolean;
    handleClose: () => void;
    addPlan: (newPlan: DegreePlan) => void;
}) {
    const [title, setTitle] = useState<string>("");
    function saveChanges() {
        addPlan({
            title: "",
            semesters: semesters.map(),

            map: function (arg0: (degreeplan: DegreePlan) => DegreePlan) {
                throw new Error("Function not implemented.");
            },
            filter: function (arg0: (degreeplan: DegreePlan) => boolean) {
                throw new Error("Function not implemented.");
            }
        });
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="AddPlan" as={Row}>
                    <Form.Label column sm={3}>
                        Semester Title:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={title}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(event.target.value)}
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
