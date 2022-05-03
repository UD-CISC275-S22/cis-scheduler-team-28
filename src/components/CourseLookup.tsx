import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course, getCourseString } from "../interfaces/course";
import { DragCourse } from "./DragCourse";

export function CourseFinder({
    catalog,
    pool,
    setPool
}: {
    catalog: Course[];
    pool: Course[];
    setPool: (newPool: Course[]) => void;
}): JSX.Element {
    const [query, setQuery] = useState<string>("");

    const CourseFinderStyles = {
        course_ind: {
            height: 50,
            backgroundColor: "white",
            alignContent: "center",
            outlineStyle: "solid",
            outlineWidth: "thin"
        } as React.CSSProperties,
        course_scroll_list: {
            height: 150,
            overflow: "scroll",
            alignContent: "center",
            backgroundColor: "white",
            paddingBottom: "1px",
            paddingTop: "1px",
            outlineStyle: "solid",
            outlineWidth: "medium"
        } as React.CSSProperties,
        course_container: {
            borderRadius: "25px",
            alignContent: "center",
            backgroundColor: "blue",
            padding: "10px",
            outlineStyle: "solid",
            outlineWidth: "medium"
        } as React.CSSProperties,
        course_pool_container: {
            backgroundColor: "blue",
            alignContent: "center",
            padding: "10px"
        } as React.CSSProperties
    };

    const COURSES = catalog.map(
        (course: Course): Course => ({
            ...course
        })
    );

    const containsQuery = (course: Course): boolean =>
        getCourseString(course).toLowerCase().includes(query.toLowerCase()) &&
        !pool.includes(course);

    function updateQuery(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
    }

    return (
        <div style={CourseFinderStyles.course_container}>
            <h4>Course Lookup</h4>
            <Form.Group controlId="formCourseSearch">
                <Form.Control
                    placeholder="Enter course name or code"
                    value={query}
                    onChange={updateQuery}
                    size="sm"
                />
            </Form.Group>
            <p></p>
            <div style={CourseFinderStyles.course_container}>
                {COURSES.filter(containsQuery).map(
                    (course: Course) =>
                        !pool.some(function (el) {
                            return el.code === course.code;
                        }) && (
                            <div
                                key={course.code}
                                style={CourseFinderStyles.course_ind}
                                onClick={() => setPool([...pool, course])}
                            >
                                {getCourseString(course)}
                            </div>
                        )
                )}
            </div>
            <div>
                <p></p>
                <h4>Course Pool</h4>
                {pool.length === 0 && <p>Click a course to add or remove it</p>}
                {pool.map((course: Course) => (
                    <div key={course.code}>
                        style={CourseFinderStyles.course_pool_container}
                        <DragCourse course={course}></DragCourse>
                    </div>
                ))}
                {pool.length >= 1 && <p>Drag courses into your plan!</p>}
                <Button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setPool([])}
                >
                    Clear course pool
                </Button>
            </div>
        </div>
    );
}
