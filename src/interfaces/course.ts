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
    credits: string;
    prereq: string[];
    type: CourseType[];
}
export function getCourseString(course: Course): string {
    return course.code + ": " + course.title;
}
