import React from "react";
import { render, screen } from "@testing-library/react";
import { DegreePlan } from "../interfaces/degreeplan";
import { DegreePlanDisplay } from "../components/DegreePlanDisplay";
import degreeplanData from "../data/mockdata.json";

const DEGREEPLAN = degreeplanData as DegreePlan;

describe("DegreePlanDisplay Component tests", () => {
    beforeEach(() => {
        render(<DegreePlanDisplay degreeplan={DEGREEPLAN} />);
    });
    test("The degree plan title is displayed", () => {
        const title = screen.getAllByRole("heading");
        expect(title[0]).toHaveTextContent("CS BS AI Concentration");
    });
    test("The semester titles are displayed", () => {
        const titles = screen.getAllByRole("heading");
        expect(titles[1]).toHaveTextContent("Fall 2020");
        expect(titles[2]).toHaveTextContent("Spring 2021");
        expect(titles[3]).toHaveTextContent("Fall 2021");
        expect(titles[4]).toHaveTextContent("Spring 2022");
        expect(titles[5]).toHaveTextContent("Fall 2022");
        expect(titles[6]).toHaveTextContent("Spring 2023");
        expect(titles[7]).toHaveTextContent("Fall 2023");
        expect(titles[8]).toHaveTextContent("Spring 2024");
    });
    test("There are 8 tables", () => {
        const tables = screen.getAllByRole("table");
        expect(tables).toHaveLength(8);
    });
    test("The clear semesters button works properly", () => {
        const use = screen.getByRole("button", { name: /clear semesters/i });
        use.click();
        expect(screen.queryByRole("table")).toBeNull();
    });
});
