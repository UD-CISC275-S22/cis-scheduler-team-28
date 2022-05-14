import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Scheduler steps and welcome message", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("There is a welcome message with steps", () => {
        expect(
            screen.getByRole("button", {
                name: /Scheduler Steps/i
            })
        ).toBeInTheDocument();
    });
    test("The message displays properly on click", () => {
        const welcomeMsgButton = screen.getByRole("button", {
            name: /Scheduler Steps/i
        });
        welcomeMsgButton.click();
    });
});
