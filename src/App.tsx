import React, { useState } from "react";
import "./App.css";
import { Course } from "./interfaces/course";
import { Semester } from "./interfaces/semester";
import { CourseDisplay } from "./components/CourseDisplay";
import { SemesterDisplay } from "./components/SemesterDisplay";
import courseData from "./data/onecourse.json";
import semesterData from "./data/onesemester.json";

const COURSE = courseData as Course;
const SEMESTER = semesterData as Semester;

function App(): JSX.Element {
    const [course] = useState<Course>(COURSE);
    const [semester] = useState<Semester>(SEMESTER);

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Final Project Team
                28
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>Lexi Anderson</h1>
            <h2>Sarah Kimak</h2>
            <CourseDisplay course={course}></CourseDisplay>
            <SemesterDisplay semester={semester}></SemesterDisplay>
        </div>
    );
}

export default App;
