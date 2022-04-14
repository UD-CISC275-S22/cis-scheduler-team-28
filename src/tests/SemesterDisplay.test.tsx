import React from "react";
import { render, screen } from "@testing-library/react";
import { Semester } from "../interfaces/semester";
import { SemesterDisplay } from "../components/SemesterDisplay";
import semesterData from "../data/onesemester.json";

const SEMESTER = semesterData as Semester;

describe("SemesterDisplay Component tests", () => {
    beforeEach(() => {
        render(<SemesterDisplay semester={SEMESTER} />);
    });
    test("The title is displayed", () => {
        const valueText = screen.getByText(/Fall 2020/i);
        expect(valueText).toBeInTheDocument();
    });
    test("There is a table", () => {
        const table = screen.getAllByRole("table");
        expect(table[0]).toBeInTheDocument();
    });
    test("The table headers are displayed", () => {
        const tableHeaders = screen.getAllByRole("columnheader");
        expect(tableHeaders[0]).toHaveTextContent("Code");
        expect(tableHeaders[1]).toHaveTextContent("Type");
        expect(tableHeaders[2]).toHaveTextContent("Credits");
    });
    test("The table's rows are displayed properly", () => {
        const firstRow = screen.getAllByRole("row");
        expect(firstRow[1]).toHaveTextContent("CISC108core3");
        expect(firstRow[2]).toHaveTextContent("EGGG101COEuniv2");
        expect(firstRow[3]).toHaveTextContent("ENGL110core3");
        expect(firstRow[4]).toHaveTextContent("MATH241core4");
        expect(firstRow[5]).toHaveTextContent("ARTH199COEunivA3");
    });
});