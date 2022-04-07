import React from "react";
import { Table } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseDisplay({ course }: { course: Course }): JSX.Element {
    return (
        <Table bordered>
            <tbody>
                <tr>
                    <td>{course.code}</td>
                    <td>{course.type}</td>
                    <td>{course.credits}</td>
                </tr>
            </tbody>
        </Table>
    );
}
