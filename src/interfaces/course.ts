export interface Course {
    code: string;
    title: string;
    descr: string;
    credits: string;
    preReq: string;
    type: string;
}
export function getCourseString(course: Course): string {
    return course.code + ": " + course.title;
}
