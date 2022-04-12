import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Course } from "../course";
import { Semester } from "../semester";
import { DegreePlan } from "../degreeplan";

export function EditMode({
    course,
    setEditing,
    currentSem,
    setCurrentSem
}: {
    course: Course;
    setEditing: (b: boolean) => void;
    currentSem: Semester;
    setCurrentSem: (s: Semester) => void;
}): JSX.Element {
    const [nCode, setCode] = useState<string>(course.code);
    const [nTitle, setTitle] = useState<string>(course.title);
    const [nCredits, setCredits] = useState<number>(course.credits);
    //const [nDescription, setDescription] = useState<string>(course.description);

    //function updateSem(): void {};

    function resetSem(): void {
        setCode(course.code);
        setTitle(course.title);
        setCredits(course.credits);
        //setDescription(course.description);
    }

    return (
        <Container>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Type</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            course={course} nCode={nCode} setCode ={setCode}
                        </td>
                        <td>
                            course={course} nTitle={nTitle} setTitle ={setTitle}
                        </td>
                        <td>
                            course={course} nCredits={nCredits} setCode =
                            {setCredits}
                            <Button
                                variant="outline-danger"
                                onClick={() => {
                                    resetSem();
                                    setEditing(false);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="success"
                                onClick={() => {
                                    updateSem();
                                    setEditing(false);
                                }}
                            >
                                Update
                            </Button>
                        </td>
                    </tr>
                    ))
                </tbody>
            </Table>
        </Container>
    );
}
