import { useDrag } from "react-dnd";
import { Course } from "../interfaces/course";
import React from "react";

export function DragCourse({ course }: { course: Course }): JSX.Element {
    const [{ isDragging }, dragRef] = useDrag(
        {
            type: "course",
            item: course,
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        },
        [course]
    );
    return (
        <div className="draggable-course" ref={dragRef}>
            <h5>{course.code}</h5>
            {isDragging}
        </div>
    );
}
