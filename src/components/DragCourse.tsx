import { useDrag } from "react-dnd";
import { Course } from "../interfaces/course";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const DragCourse = ({ course }: { course: Course }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [style, setStyle] = useState<string>("collapse hide");
    const [, drag] = useDrag({
        type: "course",
        item: course,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    const toggleRow = () => {
        console.log(course.code);
        setOpen(!open);
        open ? setStyle("collapse hide") : setStyle("collapse show");
    };

    function ViewCourseInfo(): JSX.Element {
        return (
            <div className={style} id="course-info-toggle">
                <div className="card card-body">
                    <p>
                        <b>Prereqs:</b> {course.preReq}
                    </p>
                    <p>
                        <b>Requirement Fulfilled:</b> {course.type}
                    </p>
                    <p>
                        <b>Description:</b> {course.descr}
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div className="boxed" ref={drag}>
            <span>
                <Container
                    data-testid="scroll-courses"
                    className="course-pool-scrollable"
                >
                    <Row>
                        <Col>
                            {" "}
                            <p>
                                <b>Code: </b>
                                {course.code}
                            </p>
                            <p>
                                <b>Title: </b>
                                {course.title}
                            </p>
                            <p>
                                <b>Credits: </b>
                                {course.credits}
                            </p>
                        </Col>
                        <Col md="auto">
                            <p>
                                <button
                                    className="btn def"
                                    data-testid="pool-view/close-btn"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseEx"
                                    aria-expanded="false"
                                    aria-controls="collapseEx"
                                    onClick={toggleRow}
                                >
                                    {open ? "CLOSE" : "VIEW course info"}
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
            </span>
        </div>
    );
};
