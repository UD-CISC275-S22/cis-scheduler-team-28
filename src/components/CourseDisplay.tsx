import React from "react";
import { Course } from "../interfaces/course";
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
        return (
            <div>
                <span>
                    <h5>{chosenCourse.title}</h5>
                    <p>Code: {chosenCourse.code}</p>
                    <p>Credits: {chosenCourse.credits}</p>
                    <p>Requirement Fulfilled: {chosenCourse.type}</p>
                    <p>PreReqs: {chosenCourse.preReq}</p>
                    <p>Description: {chosenCourse.descr}</p>
                </span>
            </div>
        );
    }
}
