import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterDisplay } from "./SemesterDisplay";
import { DegreePlan } from "../interfaces/degreeplan";
import { AddPlan } from "../components/AddPlanModal";

export function DegreePlanDisplay({
    degreeplan
}: {
    degreeplan: DegreePlan;
}): JSX.Element {
    const [semesterList, setSemesterList] = useState<Semester[]>(
        degreeplan.semesters
    );
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const CloseAddModal = () => setShowAddModal(false);
    const ShowAddModal = () => setShowAddModal(true);

    return (
        <Container>
            <h1>{degreeplan.title}</h1>
            {semesterList.map((semester: Semester) => (
                <SemesterDisplay
                    key={semester.title}
                    semester={semester}
                ></SemesterDisplay>
            ))}
            <Button onClick={() => setSemesterList([])}>Clear Semesters</Button>
            <Button variant="success" className="m-4" onClick={ShowAddModal}>
                Add New Plan
            </Button>
            <AddPlan
                show={showAddModal}
                handleClose={CloseAddModal}
                addPlan={function (newPlan: DegreePlan): void {
                    throw new Error("Function not implemented.");
                }}
            ></AddPlan>
        </Container>
    );
}
