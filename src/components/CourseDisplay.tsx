import React from "react";
import { Course } from "../interfaces/course";
import { DragCourse } from "./DragCourse";
export function CourseDisplay({
    chosenCourse
}: {
    chosenCourse: Course | undefined;
}): JSX.Element {
    if (chosenCourse === undefined) {
        return (
            <div>
                <p>Invalid Course</p>
            </div>
        );
    } else {
        return <DragCourse course={chosenCourse}></DragCourse>;
    }
}
