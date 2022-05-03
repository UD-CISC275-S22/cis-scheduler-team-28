import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { DegreePlan } from "../interfaces/degreeplan";

export function EditDegreePlan({
    show,
    handleClose,
    degreeplan,
    setDegreeplan
}: {
    show: boolean;
    handleClose: () => void;
    degreeplan: DegreePlan;
    setDegreeplan: (degreeplan: DegreePlan) => void;
}) {
    function saveChanges() {
        handleClose();
    }
    function setTitle(newTitle: string): DegreePlan {
        return { ...degreeplan, title: newTitle };
    }
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="AddPlan" as={Row}>
                    <Form.Label column sm={3}>
                        DegreePlan Title:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={degreeplan.title}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setDegreeplan(setTitle(event.target.value))}
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
