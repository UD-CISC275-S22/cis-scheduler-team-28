import React from "react";
import { Stack } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { CourseDisplay } from "./CourseDisplay";

export function CourseList({ course }: { course: Course[] }): JSX.Element {
    return (
        <Stack gap={3}>
            {course.map((course: Course) => (
                <div key={course.code} className="bg-light border m-2 p-2">
                    <CourseDisplay course={course}></CourseDisplay>
                </div>
            ))}
        </Stack>
    );
}
