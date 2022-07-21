import { Person } from "./Person";

export class Teacher extends Person {

    private branch: string;

    constructor(name: string, surname: string, email: string, branch: string) {
        super(name, surname, email);
        this.branch = branch;
    }

    get getBranch() {
        return this.branch;
    }

    set setBranch(branch) {
        this.branch = branch;
    }

}