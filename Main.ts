import { Bootcamp } from "./Bootcamp"
import { Student } from "./Student"
import { Teacher } from "./Teacher"

var student = new Student("Can", "Türet", "turetcan@gmail.com", "g181210013")
var teacher = new Teacher("Ömer", "Uslu", "usluomer@gmail.com", "Yazılım")

var students: Array<Student> = new Array<Student>;
var teachers: Array<Teacher> = new Array<Teacher>;

students.push(student);
teachers.push(teacher);

var bootCamp = new Bootcamp("Java & Angular BootCamp", "Köyümüzde; AKSigorta ile beraber düzenlediğimiz, AKSigorta ile çalışma şansı elde edebileceğin 45 saat sürecek olan ücretsiz Java & Angular BootCamp gerçekleştiriyoruz!", students, teachers)

console.log(bootCamp);


