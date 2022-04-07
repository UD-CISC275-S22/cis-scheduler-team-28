import React from "react";
import { Stack } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterDisplay } from "./SemesterDisplay";

export function SemesterList({
    semester
}: {
    semester: Semester[];
}): JSX.Element {
    return (
        <Stack gap={3}>
            {semester.map((semester: Semester) => (
                <div key={semester.title} className="bg-light border m-2 p-2">
                    <SemesterDisplay semester={semester}></SemesterDisplay>
                </div>
            ))}
        </Stack>
    );
}
