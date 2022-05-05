import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";
import catalog from "../data/catalog.json";
import { EditCourses } from "./EditCourses";
import { CourseDisplay } from "./CourseDisplay";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const COURSES = Object.values(catalog).map((info) => ({
    code: info.code,
    title: info.title,
    descr: info.descr,
    credits: info.credits,
    preReq: info.preReq,
    type: info.type
}));

export function CatalogCourses(): JSX.Element {
    const [courseList, setCourseList] = useState<Course[]>(COURSES);
    const [chosenCourse, setChosenCourse] = useState<string>(
        courseList[0].code
    );
    const [editing, setEditing] = useState<boolean>(false);
    function updateCourse(event: ChangeEvent) {
        setChosenCourse(event.target.value);
    }
    function deleteCourse(id: string) {
        setCourseList(
            courseList.filter((course: Course): boolean => course.code !== id)
        );
        setChosenCourse(courseList[0].code);
    }
    function changeEditMode() {
        setEditing(!editing);
    }
    const courseInfo = COURSES.find(
        (course: Course): boolean => course.code == chosenCourse
    );
    function editCourse(title: string, newCourse: Course) {
        setCourseList(
            courseList.map(
                (course: Course): Course =>
                    course.code === title ? newCourse : course
            )
        );
    }
    return editing && courseInfo ? (
        <EditCourses
            code={courseInfo.code}
            title={courseInfo.title}
            credits={courseInfo.credits}
            descr={courseInfo.descr}
            preReqs={courseInfo.preReq}
            type={courseInfo.type}
            editCourse={editCourse}
            changeEditMode={changeEditMode}
        ></EditCourses>
    ) : (
        <div>
            <h3>CISC Related Catalog:</h3>
            <Form.Group controlId="chosenClass">
                <Form.Select value={chosenCourse} onChange={updateCourse}>
                    {courseList.map((course: Course) => (
                        <option key={course.code} value={course.code}>
                            {course.code}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <CourseDisplay chosenCourse={courseInfo}></CourseDisplay>
            <Button onClick={changeEditMode}>Edit Course</Button>
            <Button onClick={() => deleteCourse(chosenCourse)}>
                Delete Course
            </Button>
        </div>
    );
}
