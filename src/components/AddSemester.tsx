import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { DegreePlan } from "../interfaces/degreeplan";
import { Semester } from "../interfaces/semester";
import { SemesterDisplay } from "./SemesterDisplay";

export function AddSemester({
    show,
    handleClose,
    degreeplanList,
    setDegreeplanList
}: {
    show: boolean;
    handleClose: () => void;
    degreeplanList: DegreePlan[];
    setDegreeplanList: (degreeplanList: DegreePlan[]) => void;
}) {
    const [tempTitle, setTempTitle] = useState<string>("");
    function saveChanges() {
        const newSem = { title: tempTitle, courses: [] };
        setDegreeplanList(
            degreeplanList.map(
                (originalPlan: DegreePlan, index): DegreePlan =>
                    index !== 0
                        ? originalPlan
                        : {
                              ...originalPlan,
                              semesters: [...originalPlan.semesters, newSem]
                          }
            )
        );
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="AddSemester" as={Row}>
                    <Form.Label column sm={3}>
                        Semester Title:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={tempTitle}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setTempTitle(event.target.value)}
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
