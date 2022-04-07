import React from "react";
import { Container } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseDisplay({ course }: { course: Course }): JSX.Element {
    return (
        <Container>
            <table>
                <tr>
                    <th>{course.code}</th>
                    <th>{course.description}</th>
                    <th>{course.credits}</th>
                </tr>
            </table>
        </Container>
    );
}
