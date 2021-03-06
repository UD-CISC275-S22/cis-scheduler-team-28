import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course } from "../interfaces/course";
import catalog from "../data/catalog.json";
import { EditCourses } from "./EditCourses";
import { CourseDisplay } from "./CourseDisplay";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
    const [chosenCourse, setChosenCourse] = useState<Course>(courseList[0]);
    const [editing, setEditing] = useState<boolean>(false);
    function updateCourse(event: ChangeEvent) {
        const newCourse = courseList.find(
            (course: Course): boolean => course.code === event.target.value
        );
        if (newCourse !== undefined) {
            setChosenCourse(newCourse);
        } else {
            setChosenCourse(courseList[0]);
        }
    }
    function deleteCourse(delCourse: Course) {
        setCourseList(
            courseList.filter(
                (course: Course): boolean => course.code !== delCourse.code
            )
        );
        setChosenCourse(courseList[0]);
    }
    function changeEditMode() {
        setEditing(!editing);
    }
    function editCourse(title: string, newCourse: Course) {
        setCourseList(
            courseList.map(
                (course: Course): Course =>
                    course.code === title ? newCourse : course
            )
        );
        setChosenCourse(newCourse);
    }
    return editing ? (
        <EditCourses
            code={chosenCourse.code}
            title={chosenCourse.title}
            credits={chosenCourse.credits}
            descr={chosenCourse.descr}
            preReqs={chosenCourse.preReq}
            type={chosenCourse.type}
            editCourse={editCourse}
            changeEditMode={changeEditMode}
        ></EditCourses>
    ) : (
        <div>
            <h3>CISC Related Catalog:</h3>
            <Form.Group controlId="chosenClass">
                <Form.Select value={chosenCourse.code} onChange={updateCourse}>
                    {courseList.map((course: Course) => (
                        <option key={course.code} value={course.code}>
                            {course.code}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <DndProvider backend={HTML5Backend}>
                <CourseDisplay chosenCourse={chosenCourse}></CourseDisplay>
            </DndProvider>
            <Button onClick={changeEditMode} data-testid="EditCourse">
                Edit Course
            </Button>
            <Button onClick={() => deleteCourse(chosenCourse)}>
                Delete Course
            </Button>
        </div>
    );
}
