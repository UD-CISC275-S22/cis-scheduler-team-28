import { Semester } from "./semester";

export interface DegreePlan {
    map(arg0: (degreeplan: DegreePlan) => DegreePlan): any;
    filter(arg0: (degreeplan: DegreePlan) => boolean): any;
    title: string;
    semesters: Semester[];
}
