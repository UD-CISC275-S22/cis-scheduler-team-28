import React from "react";
import { CSVLink } from "react-csv";
import { DegreePlan } from "../interfaces/degreeplan";

export function CSVExport({ plans }: { plans: DegreePlan[] }): JSX.Element {
    const csvData = plans;
    const csvHeaders = [
        { label: "Title", key: "title" },
        { label: "Semesters", key: "semesters" }
    ];

    return (
        <div>
            <div style={{ border: "solid 00539F" }}></div>
            <br></br>
            <div>
                <CSVLink
                    style={{ fontSize: "14px" }}
                    data={csvData}
                    headers={csvHeaders}
                >
                    Download Degree Plans
                </CSVLink>
            </div>
        </div>
    );
}
