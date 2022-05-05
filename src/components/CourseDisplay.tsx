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
                    <p>
                        <b>Code:</b> {chosenCourse.code}
                    </p>
                    <p>
                        <b>Credits: </b>
                        {chosenCourse.credits}
                    </p>
                    <p>
                        <b>Requirement Fulfilled:</b> {chosenCourse.type}
                    </p>
                    <p>
                        <b>Prereqs:</b> {chosenCourse.preReq}
                    </p>
                    <p>
                        <b>Description:</b> {chosenCourse.descr}
                    </p>
                </span>
            </div>
        );
    }
}
