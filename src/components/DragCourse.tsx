import { useDrag } from "react-dnd";
import { Course } from "../interfaces/course";
import React from "react";

export const DragCourse = ({ course }: { course: Course }) => {
    const [, drag] = useDrag({
        type: "course",
        item: course,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    return (
        <div className="boxed" ref={drag}>
            <span>
                <h5>{course.title}</h5>
                <p>
                    <b>Code: </b> {course.code}
                </p>
                <p>
                    <b>Credits: </b> {course.credits}
                </p>
                <p>
                    <b>Requirement Fulfilled: </b> {course.type}
                </p>
                <p>
                    <b>Prereqs: </b> {course.preReq}
                </p>
                <p>
                    <b>Description: </b> {course.descr}
                </p>
            </span>
        </div>
    );
};
