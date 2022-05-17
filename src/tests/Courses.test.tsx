import React from "react";
import { render, screen } from "@testing-library/react";
import { CatalogCourses } from "../components/CatalogCourses";
//import userEvent from "@testing-library/user-event";

describe("Course tests", () => {
    test("Courses have a dropdown", () => {
        render(<CatalogCourses />);
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    });
    /*test("Selected courses are displayed", () => {
        render(<CatalogCourses />);
        const selected = screen.getByRole("combobox");
        userEvent.selectOptions(selected, "CISC 101");
        expect(
            screen.getByText(/Title: Principles of Computing/i)
        ).toBeInTheDocument();
        expect(screen.getByText(/Credits: 3/i)).toBeInTheDocument();
    });*/
    test("Courses can be deleted", () => {
        render(<CatalogCourses />);
        const deleteButton = screen.getByRole("button", {
            name: /Delete Course/i
        });
        expect(deleteButton).toBeInTheDocument();
        deleteButton.click();
        expect(screen.queryByText("CISC101")).not.toBeInTheDocument();
    });
});
