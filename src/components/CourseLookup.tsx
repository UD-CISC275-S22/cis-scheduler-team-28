import React from "react";
import { Container, Row } from "react-bootstrap";
import type { Course } from "../interfaces/course";
import { CoursePoolTable } from "./CoursePool";
export function CoursePool({ catalog }: { catalog: Course[] }): JSX.Element {
    return (
        <Container
            style={{ overflowY: "scroll", height: "400px" }}
            data-testid="course-pool"
        >
            <Row>
                <h5>Course Pool: </h5>
            </Row>
            <Row>
                {catalog.map((course: Course) => (
                    <CoursePoolTable
                        key={course.code}
                        course={course}
                    ></CoursePoolTable>
                ))}
            </Row>
        </Container>
    );
}
