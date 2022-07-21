import { Person } from "./Person";

export class Student extends Person {

    private number: string;

    constructor(name: string, surname: string, email: string, number: string) {
        super(name, surname, email);
        this.number = number;
    }

    get getNumber() {
        return this.number;
    }

    set setNumber(number) {
        this.number = number;
    }

}