import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Course } from "../interfaces/course";
export function CoursePoolTable({ course }: { course: Course }): JSX.Element {
    const [open, setOpen] = useState<boolean>(false);
    const [style, setStyle] = useState<string>("collapse hide");

    const toggleRow = () => {
        console.log(course.code);
        setOpen(!open);
        open ? setStyle("collapse hide") : setStyle("collapse show");
    };

    function ViewCourseInfo(): JSX.Element {
        return (
            <div className={style} id="course-info-collapse">
                <div className="card card-body">
                    <h6>Credits: {course.credits}</h6>
                    <h6>Description: {course.descr}</h6>
                    {<h6>Prerequisites: {course.preReq}</h6>}
                </div>
            </div>
        );
    }

    return (
        <Container
            data-testid="scroll-courses"
            className="course-pool-scrollable"
        >
            <Row>
                <Col>
                    {" "}
                    <p>
                        {course.code} : {course.title}
                    </p>
                </Col>
                <Col md="auto">
                    <p>
                        <button
                            className="btn default"
                            data-testid="pool-show/hide-btn"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                            onClick={toggleRow}
                        >
                            {open ? "hide info" : " see course info"}
                            <i className="bi bi-plus-lg"></i>
                        </button>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ViewCourseInfo />
                </Col>
            </Row>
        </Container>
    );
}
