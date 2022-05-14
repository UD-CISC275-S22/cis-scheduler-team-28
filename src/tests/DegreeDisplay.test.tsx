import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
describe("Degree Plan tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("There is a way to edit name of plan, essentially add one", () => {
        expect(
            screen.getByRole("button", {
                name: /Edit Degree Plan/i
            })
        ).toBeInTheDocument();
    });
    test("The modal opens to change the title", () => {
        const editDPButton = screen.getByRole("button", {
            name: /Edit Degree Plan/i
        });
        editDPButton.click();
    });
    test("User can save change to degree plan", () => {
        render(<App />);
        const editDPButton = screen.getByRole("button", {
            name: /Edit Degree Plan/i
        });
        editDPButton.click();
        const planInput = screen.queryAllByRole("textbox");
        const inputBox = planInput[0];
        const savePlanTitle = screen.getByTestId("save-button");
        userEvent.type(inputBox, "Custom");
        savePlanTitle.click();
        expect(screen.getByText(/Custom/)).toBeInTheDocument();
    });
    test("X will not save changes", () => {
        render(<App />);
        const editDPButton = screen.getByRole("button", {
            name: /Edit Degree Plan/i
        });
        editDPButton.click();
        const planInput = screen.queryAllByRole("textbox");
        const inputBox = planInput[0];
        const cancelPlanTitle = screen.getByTestId("cancel-button");
        userEvent.type(inputBox, "CS BS AII");
        cancelPlanTitle.click();
        expect(screen.getByText(/CS BS AI/)).toBeInTheDocument();
    });
    test("Clear semesters clears all semesters", () => {
        render(<App />);
        const clearSems = screen.getByRole("button", {
            name: /Clear Semesters/i
        });
        clearSems.click();
        clearSems.click();
        const sem1 = screen.queryByTestId("SemesterDisplay");
        expect(sem1).not.toBeInTheDocument();
    });
});
