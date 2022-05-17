import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { DegreePlan } from "../interfaces/degreeplan";
import { Semester } from "../interfaces/semester";

export function AddCourse({
    show,
    handleClose,
    currSemester,
    degreeplanList,
    setDegreeplanList
}: {
    show: boolean;
    handleClose: () => void;
    currSemester: string;
    degreeplanList: DegreePlan[];
    setDegreeplanList: (degreeplanList: DegreePlan[]) => void;
}) {
    const [tempCode, setTempCode] = useState<string>("");
    const [tempTitle, setTempTitle] = useState<string>("");
    const [tempDescr, setTempDescr] = useState<string>("");
    const [tempCredits, setTempCredits] = useState<string>("");
    const [tempPrereq, setTempPrereq] = useState<string>("");
    const [tempType, setTempType] = useState<string>("");
    function addNewCourse(originalSem: Semester, newCourse: Course): Semester {
        return {
            ...originalSem,
            courses: [...originalSem.courses, newCourse]
        };
    }
    function addNewSem(
        originalPlan: DegreePlan,
        newCourse: Course
    ): DegreePlan {
        return {
            ...originalPlan,
            semesters: originalPlan.semesters.map(
                (originalSem: Semester): Semester =>
                    originalSem.title !== currSemester
                        ? originalSem
                        : addNewCourse(originalSem, newCourse)
            )
        };
    }
    function saveChanges() {
        const newCourse = {
            code: tempCode,
            title: tempTitle,
            descr: tempDescr,
            credits: tempCredits,
            preReq: tempPrereq,
            type: tempType
        };
        setDegreeplanList(
            degreeplanList.map(
                (originalPlan: DegreePlan, index): DegreePlan =>
                    index !== 0
                        ? originalPlan
                        : addNewSem(originalPlan, newCourse)
            )
        );
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Course {currSemester}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="AddCourse" as={Row}>
                    <Row>
                        <Form.Label column sm={3}>
                            Course Code:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={tempCode}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTempCode(event.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Form.Label column sm={3}>
                            Course Title:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={tempTitle}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTempTitle(event.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Form.Label column sm={3}>
                            Course Description:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={tempDescr}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTempDescr(event.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Form.Label column sm={3}>
                            Course Credits:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={tempCredits}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTempCredits(event.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Form.Label column sm={3}>
                            Course PreReqs:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={tempPrereq}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTempPrereq(event.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Form.Label column sm={3}>
                            Course Type:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={tempType}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setTempType(event.target.value)}
                            />
                        </Col>
                    </Row>
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
