/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import "./App.css";
import { DegreePlan } from "./interfaces/degreeplan";
import { DegreePlanDisplay } from "./components/DegreePlanDisplay";
import degreeplanData from "./data/mockdata.json";

const DEGREEPLAN = degreeplanData as DegreePlan;

function App(): JSX.Element {
    const [degreeplan] = useState<DegreePlan>(DEGREEPLAN);

    return (
        <div className="App">
            <header className="App-header">
                <p>University of Delaware CS Scheduler Site</p>
                <p>Team 28: Lexi Anderson and Sarah Kimak</p>
            </header>
            <p>
                Welcome to the scheduler for UD CS and CIS degrees! It can be
                very difficult to navigate the college degree planning world
                without actual advisors, so we are creating a site to help
                students and professors, broken down by plans, semesters and
                required courses.
            </p>
            <div>
                Degree Plans:
                <li>{degreeplan.title}</li>
            </div>
            <DegreePlanDisplay degreeplan={degreeplan}></DegreePlanDisplay>
        </div>
    );
}

export default App;
