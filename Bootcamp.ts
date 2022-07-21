import { Activity } from "./Activitiy";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class Bootcamp extends Activity {

    constructor(name: string, detail: string, students: Array<Student>, teachers: Array<Teacher>) {
        super(name, detail, students, teachers);
    }

}
