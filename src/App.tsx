import React, { useState } from "react";
import "./App.css";
import { Course } from "./interfaces/course";
import { CourseDisplay } from "./components/CourseDisplay";
import courseData from "./data/onecourse.json";

const COURSE = courseData as Course;

function App(): JSX.Element {
    const [course] = useState<Course>(COURSE);

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
        </div>
    );
}

export default App;
