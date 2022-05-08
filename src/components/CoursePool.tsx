import React, { useState } from "react";
import { Course } from "../interfaces/course";
import { useDrop } from "react-dnd";
import { DragCourse } from "./DragCourse";
import { Button } from "react-bootstrap";
import "../components/course.css";

export function CoursePool(): JSX.Element {
    const [pool, setPool] = useState<Course[]>([]);
    const [, drop] = useDrop({
        accept: "course",
        drop: (course: Course) =>
            setPool((pool) =>
                !pool.includes(course) ? [...pool, course] : pool
            ),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });
    function ResetCourses() {
        setPool([]);
    }
    return (
        <div>
            <div className="pool" ref={drop}>
                {pool.map((course) => (
                    <DragCourse key={course.code} course={course}></DragCourse>
                ))}
            </div>
            <div>
                <Button onClick={ResetCourses}>Clear Course Pool</Button>
            </div>
        </div>
    );
}
