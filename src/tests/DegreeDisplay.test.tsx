import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DegreePlanDisplay } from "../components/DegreePlanDisplay";
import { EditDegreePlan } from "../components/EditDegreePlan";

describe("Degree Plan tests", () => {
    test("User can see a modal to add or change name of plan", () => {
        render(<EditDegreePlan />);
        const addPlanBut = screen.getByTestId("AddPlan");
        addPlanBut.click();
        const planInput = screen.queryAllByRole("textbox");
        expect(planInput).toHaveLength(1);
    });
    test("User can save change to degree plan", () => {
        render(<EditDegreePlan />);
        const editButton = screen.getByTestId("edit-degree-plan");
        editButton.click();
        const planInput = screen.queryAllByRole("textbox");
        const inputBox = planInput[0];
        const savePlanTitle = screen.getByTestId("save-button");
        userEvent.type(inputBox, "Custom");
        savePlanTitle.click();
        expect(screen.getByText(/Custom/)).toBeInTheDocument();
    });
    test("X will not save changes", () => {
        render(<DegreePlanDisplay />);
        const EditDegreePlan = screen.getByTestId("edit-degree-plan");
        EditDegreePlan.click();
        const planInput = screen.queryAllByRole("textbox");
        const inputBox = planInput[0];
        const cancelPlanTitle = screen.getByTestId("cancel-button");
        userEvent.type(inputBox, "CS BS AII");
        cancelPlanTitle.click();
        expect(screen.getByText(/CS BS AI/)).toBeInTheDocument();
    });
    test("Clear semesters clears all semesters", () => {
        render(<DegreePlanDisplay />);
        const clearSemesters = screen.getByTestId("clear-all-sems");
        clearSemesters.click();
        const semTitle = screen.queryAllByText(/Fall 2020/);
        expect(semTitle).toHaveLength(0);
        const semTitle2 = screen.queryAllByText(/Fall 2021/);
        expect(semTitle2).toHaveLength(0);
    });
});
