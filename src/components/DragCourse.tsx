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
                <p>Code: {course.code}</p>
                <p>Credits: {course.credits}</p>
                <p>PreReqs: {course.preReq}</p>
            </span>
        </div>
    );
};
