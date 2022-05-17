import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("DegreeDisplay tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("Add Semester button works", () => {
        const addSemButton = screen.getByRole("button", {
            name: /Add Semester/i
        });
        addSemButton.click();
        const AddSemester = screen.getByTestId("AddSemester");
        expect(AddSemester).toBeInTheDocument();
    });
    test("Add Plan button works", () => {
        const addPlanButton = screen.getByRole("button", {
            name: /Add Plan/i
        });
        addPlanButton.click();
        const AddPlan = screen.getByTestId("AddPlan");
        expect(AddPlan).toBeInTheDocument();
    });
    test("Clear Semesters button works", () => {
        const clearSemButton = screen.getByTestId("ClearSemButton");
        clearSemButton.click();
        const semDisplay = screen.queryByTestId("SemDisplay");
        expect(semDisplay).not.toBeInTheDocument();
    });
    test("Can view remaining info in course pool", () => {
        const courseStuff = screen.getAllByTestId("CourseInfo");
        expect(courseStuff).toHaveLength(1);
    });
    test("Can check off completed courses in any visible course", () => {
        const checkbox = screen.getAllByTestId("fulfilled");
        expect(checkbox).toHaveLength(40);
    });
});
