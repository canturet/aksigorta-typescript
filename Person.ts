export class Person {

    private name: string
    private surname: string
    private email: string

    constructor(name: string, surname: string, email: string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }

    get getSurname() {
        return this.surname;
    }

    set setSurname(surname) {
        this.surname = surname;
    }

    get getEmail() {
        return this.email;
    }

    set setEmail(email) {
        this.email = email;
    }
}
