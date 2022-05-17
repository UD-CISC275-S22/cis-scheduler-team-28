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
    /*
    test("Can view remaining info in course pool", () => {
        const courses = screen.getAllByTestId("courseview");
        expect(courses).toHaveLength(3);
        courses[0].click();
        const deletecoursebutton = screen.getAllByTestId("deletecoursebutton");
        fireEvent.click(deletecoursebutton[0]);
        const courses2 = screen.queryAllByTestId("courseview");
        expect(courses2).toHaveLength(2);
    });
    */
});
