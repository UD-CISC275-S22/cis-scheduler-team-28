import React from "react";
import { Button, Container } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterDisplay } from "./SemesterDisplay";
import { DegreePlan } from "../interfaces/degreeplan";

export function DegreePlanDisplay({
    degreeplan,
    setDegreeplan
}: {
    degreeplan: DegreePlan;
    setDegreeplan: (degreeplan: DegreePlan) => void;
}): JSX.Element {
    function clearSemesters(degreeplan: DegreePlan) {
        setDegreeplan({ ...degreeplan, semesters: [] });
    }

    /*function clearCourses(degreeplan: DegreePlan, title: string): DegreePlan {
        return {
            ...degreeplan,
            [title]: degreeplan.semesters.map((semester: Semester) =>
                semester.title !== title
                    ? semester
                    : { ...semester, courses: [] }
            )
        };
    }*/

    /*function clearSemester(title: string, degreeplan: DegreePlan) {
        setDegreeplan(
            degreeplan.semesters.filter(
                (semester: Semester): boolean => semester.title !== title
            )
        );
    }*/

    return (
        <Container>
            <h1>{degreeplan.title}</h1>
            {degreeplan.semesters.map((semester: Semester) => (
                <SemesterDisplay
                    key={semester.title}
                    semester={semester}
                ></SemesterDisplay>
            ))}
            <Button onClick={() => clearSemesters(degreeplan)}>
                Clear Semesters
            </Button>
        </Container>
    );
}
