import React from "react";
import { render, screen } from "@testing-library/react";
import { CatalogCourses } from "../components/CatalogCourses";
import userEvent from "@testing-library/user-event";

describe("Course tests", () => {
    test("Courses have a dropdown", () => {
        render(<CatalogCourses />);
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    });
    test("Selected courses are displayed", () => {
        render(<CatalogCourses />);
        const selected = screen.getByRole("combobox");
        userEvent.selectOptions(selected, "CISC 101");
        expect(screen.queryByText(/CISC 101/i)).toBeInTheDocument();
        expect(
            screen.getByText(/Title: Principles of Computing/i)
        ).toBeInTheDocument();
        expect(screen.getByText(/Credits: 3/i)).toBeInTheDocument();
    });
});
