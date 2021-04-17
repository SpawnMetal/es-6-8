//Модернизация работы с метадаными
// Reflect - это встроенный объект, который предоставляет методы для перехватывания JavaScript операций.

class Student
{
    constructor(name)
    {
        this.name = name;
    }

    greet()
    {
        console.log(`Hi1 My name is ${this.name}`)
    }
}

class ProtoStudent
{
    university = 'Oxford'
}

// const student = Reflect.construct(Student, ['Igor'], ProtoStudent)
// console.log(student)
// console.log(student.__proto__ === Student.prototype) //false
// console.log(student.__proto__ === ProtoStudent.prototype) //true

const student = Reflect.construct(Student, ['Igor'])
Reflect.apply(student.greet, {name: 'Tester'}, [])
console.log(Reflect.ownKeys(student)) //Получает ключи класса

student.age = 25; //Добавлен ключ в класс
console.log(student)

Reflect.preventExtensions(student) //Блокирует изменения класса
console.log(Reflect.isExtensible(student)) //Объект подлежит изменениям? //false, если задан preventExtensions
console.log(student)

student.age1 = 30; //Добавлен ключ в класс
console.log(student)