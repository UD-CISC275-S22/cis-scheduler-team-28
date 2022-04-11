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
                UD CISC275 with React Hooks and TypeScript - Final Project Team
                28 (Lexi Anderson and Sarah Kimak)
            </header>
            <DegreePlanDisplay degreeplan={degreeplan}></DegreePlanDisplay>
        </div>
    );
}

export default App;
