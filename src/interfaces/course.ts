export type CourseType =
    | "concentration"
    | "core"
    | "univ"
    | "univA"
    | "univB"
    | "univC"
    | "univMC"
    | "COE"
    | "elective";

export interface Course {
    code: string;
    title: string;
    description: string;
    credits: number;
    prereq: string[];
    type: CourseType[];
}
