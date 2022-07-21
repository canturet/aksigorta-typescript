import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class Activity {

    private name: string
    private detail: string
    private students: Array<Student>
    private teachers: Array<Teacher>

    constructor(name: string, detail: string, students: Array<Student>, teachers: Array<Teacher>) {
        this.name = name;
        this.detail = detail;
        this.students = students;
        this.teachers = teachers;
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }

    get getDetail() {
        return this.detail;
    }

    set setDetail(detail) {
        this.detail = detail;
    }

    get getStudents() {
        return this.students;
    }

    set setStudents(students) {
        this.students = students;
    }

    get getTeachers() {
        return this.teachers;
    }

    set setTeachers(teachers) {
        this.teachers = teachers;
    }

}
