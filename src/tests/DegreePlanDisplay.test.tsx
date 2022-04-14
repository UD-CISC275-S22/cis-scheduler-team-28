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
    //add test for title of DegreePlan once added
    test("The semester titles are displayed", () => {
        const titles = screen.getAllByRole("heading");
        expect(titles[0]).toHaveTextContent("Fall 2020");
        expect(titles[1]).toHaveTextContent("Spring 2021");
        expect(titles[2]).toHaveTextContent("Fall 2021");
        expect(titles[3]).toHaveTextContent("Spring 2022");
        expect(titles[4]).toHaveTextContent("Fall 2022");
        expect(titles[5]).toHaveTextContent("Spring 2023");
        expect(titles[6]).toHaveTextContent("Fall 2023");
        expect(titles[7]).toHaveTextContent("Spring 2024");
    });
    test("There are 8 tables", () => {
        const tables = screen.getAllByRole("table");
        expect(tables).toHaveLength(8);
    });
});
